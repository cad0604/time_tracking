const checkUserPermission = async (req, res, next) => {
  console.log(">>> userRoleId:", req.userRoleId);
  next();
};

module.exports = checkUserPermission;
