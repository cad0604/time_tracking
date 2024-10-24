const { sendResponse } = require("../../utils/common/helper");
const { COMMON_STRINGS } = require("../../consts/response/common");
const UserModel = require("../../models/auth/user.model");
const { Op } = require("sequelize");

exports.getCustomers = async (req, res) => {
  try {
    const data = req.query.id
      ? await UserModel.findByPk(req.query.id)
      : await UserModel.findAll({
          where: { roleId: { [Op.ne]: 1 } },
          attributes: ["id", "firstName", "lastName"],
        });
    if (!data) return sendResponse(res, 404, null, COMMON_STRINGS.NOT_FOUND);
    return sendResponse(res, 200, data);
  } catch (err) {
    console.log(`Error in getCustomers: ${err.message}`);
    return sendResponse(
      res,
      500,
      null,
      COMMON_STRINGS.SERVER_ERROR,
      err.message
    );
  }
};
