const { sendResponse } = require("../../utils/common/helper");
const { COMMON_STRINGS } = require("../../consts/response/common");
const UserModel = require("../../models/auth/user.model");
const { Op, where } = require("sequelize");
const { CRM_STRINGS } = require("../../consts/response/crm");
const TimeStartModel = require("../../models/workflow/time_start.model");
const TimeTraceModel = require("../../models/workflow/time_trace.model");

exports.getCustomers = async (req, res) => {
  try {
    const data = req.query.id
      ? await UserModel.findByPk(req.query.id)
      : await UserModel.findAll({
          where: { roleId: { [Op.ne]: 1 } },
          attributes: ["id", "dni", "firstName", "lastName"],
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

exports.deleteCustomerById = async (req, res) => {
  try {
    await TimeStartModel.destroy({ where: { userId: req.query.id } });
    await TimeTraceModel.destroy({ where: { userId: req.query.id } });

    await UserModel.destroy({ where: { id: req.query.id } });
    return sendResponse(
      res,
      200,
      { id: req.query.id },
      CRM_STRINGS.DELETE_CUSTOMER_SUCCESS
    );
  } catch (err) {
    console.log(`Error in deleteCustomerById: ${err.message}`);
    return sendResponse(
      res,
      500,
      null,
      COMMON_STRINGS.SERVER_ERROR,
      err.message
    );
  }
};
