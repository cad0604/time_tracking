const { sendResponse } = require("../../utils/common/helper");
const logger = require("../../utils/common/logger");
const { COMMON_STRINGS } = require("../../consts/response/common");
const { WORKFLOW_STRINGS } = require("../../consts/response/workflow");
const TimeStartModel = require("../../models/workflow/time_start.model");

exports.getTimeStart = async (req, res) => {
  try {
    const userId = req.userId;

    const data = await TimeStartModel.findOne({
      where: { userId: userId },
    });
    if (!data) return sendResponse(res, 404, null, COMMON_STRINGS.NOT_FOUND);
    return sendResponse(res, 200, data);
  } catch (err) {
    console.log(`Error in getTimeStart: ${err.message}`);
    return sendResponse(
      res,
      500,
      null,
      COMMON_STRINGS.SERVER_ERROR,
      err.message
    );
  }
};

exports.addTimeStart = async (req, res) => {
  try {
    const data = await TimeStartModel.create({
      ...req.body,
      userId: req.userId,
    });

    return sendResponse(
      res,
      200,
      data,
      WORKFLOW_STRINGS.TIMER_TRACKING_START_SUCCESS
    );
  } catch (err) {
    console.log(`Error in addTask: ${err.message}`);
    return sendResponse(
      res,
      500,
      null,
      COMMON_STRINGS.SERVER_ERROR,
      err.message
    );
  }
};
