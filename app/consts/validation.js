exports.validationConf = {
  ...require("./validation/auth"),
  ...require("./validation/workflow"),
  ...require("./validation/crm"),
};

exports.passwordValidatePattern = new RegExp(
  "^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[-+_!@#$%^&*.,?]).+$"
);
