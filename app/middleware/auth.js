const jwt = require("jsonwebtoken");
const { ACL } = require("../consts/acl");
const { sendResponse } = require("../utils/common/helper");
const { AUTH_STRINGS } = require("../consts/response/auth");

const checkUserStatus = async (req, res, next) => {
  let userStatus = "UNAUTHORIZED";
  if (req.headers["authorization"]) {
    const token = req.headers["authorization"].replace(/^Bearer\s+/, "");
    jwt.verify(token, process.env.AUTH_JWT_SECRET, async (err, decoded) => {
      userStatus = "UNLOCK";
      if (!err) {
        req.userId = decoded.id;
      }
    });
  }

  if (ACL[userStatus].includes(`${req.method}:${req.url.split("?").shift()}`)) {
    next();
  } else {
    switch (userStatus) {
      case "UNAUTHORIZED":
        return sendResponse(res, 401, null, AUTH_STRINGS.UNAUTHORIZED);
      case "INCOMPLETE":
        return sendResponse(
          res,
          403,
          null,
          AUTH_STRINGS.AUTH_ACCOUNT_INCOMPLETE
        );
      case "LOCK":
        return sendResponse(res, 403, null, AUTH_STRINGS.AUTH_ACCOUNT_LOCK);
      case "NOROLE":
        return sendResponse(res, 403, null, AUTH_STRINGS.AUTH_USER_NOT_ROLE);
      default:
        return sendResponse(res, 401, null, AUTH_STRINGS.UNAUTHORIZED);
    }
  }
};

module.exports = checkUserStatus;
