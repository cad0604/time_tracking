const bcryptSalt = process.env.BCRYPT_SALT;
var jwt = require("jsonwebtoken");
var bcrypt = require("bcryptjs");
const { sendResponse } = require("../../utils/common/helper");
const { COMMON_STRINGS } = require("../../consts/response/common");
const { AUTH_STRINGS } = require("../../consts/response/auth");
const UserModel = require("../../models/auth/user.model");
const CMSRoleModel = require("../../models/cms/role.model");
const { passwordValidatePattern } = require("../../consts/validation");

exports.signup = async (req, res) => {
  try {
    // Check if dni is duplicated
    const existing = await UserModel.findOne({
      where: {
        dni: req.body.dni,
      },
    });
    if (existing)
      return sendResponse(res, 405, null, AUTH_STRINGS.AUTH_EMAIL_DUPLICATION);

    await UserModel.create({
      ...req.body,
      password: bcrypt.hashSync(req.body.password, Number(bcryptSalt)),
      roleId: 2, // Ccusomer role
    });

    return sendResponse(res, 200, null, AUTH_STRINGS.AUTH_USER_SINGUP_SUCCESS);
  } catch (err) {
    console.log(`Error in signup: ${err.message}`);
    return sendResponse(
      res,
      500,
      null,
      COMMON_STRINGS.SERVER_ERROR,
      err.message
    );
  }
};

exports.signin = async (req, res) => {
  try {
    const user = await UserModel.findOne({
      where: { dni: req.body.dni },
      attributes: { exclude: ["roleId"] },
      include: [
        {
          model: CMSRoleModel,
          as: "role",
          attributes: ["id", "name"],
        },
      ],
    });
    if (!user) {
      return sendResponse(res, 401, null, AUTH_STRINGS.AUTH_USER_NOT_FOUND);
    }

    const passwordIsValid = bcrypt.compareSync(
      req.body.password,
      user.password
    );

    if (!passwordIsValid) {
      return sendResponse(
        res,
        401,
        { accessToken: null },
        AUTH_STRINGS.AUTH_INVALID_PASSWORD
      );
    }

    let expiration_time = process.env.AUTH_JWT_REFRESH_EXPIRATION;

    const token = jwt.sign(
      {
        id: user.id,
        dni: user.dni,
        roleId: user.role?.id,
      },
      process.env.AUTH_JWT_SECRET,
      {
        algorithm: "HS256",
        allowInsecureKeySizes: true,
        expiresIn: Number(expiration_time),
      }
    );

    return sendResponse(
      res,
      200,
      { user, accessToken: token },
      AUTH_STRINGS.AUTH_USER_SIGNIN_SUCCESS
    );
  } catch (err) {
    console.log(`Error in signin: ${err.message}`);
    return sendResponse(
      res,
      500,
      null,
      COMMON_STRINGS.SERVER_ERROR,
      err.message
    );
  }
};
