const { sendResponse } = require("../../utils/common/helper");
const { COMMON_STRINGS } = require("../../consts/response/common");
const { WORKFLOW_STRINGS } = require("../../consts/response/workflow");
const Sequelize = require("sequelize");
const TimeTraceModel = require("../../models/workflow/time_trace.model");
const TimeStartModel = require("../../models/workflow/time_start.model");
const Op = Sequelize.Op;
const XLSX = require("xlsx");
const fs = require("fs");
const dayjs = require("dayjs");
const stream = require("stream");

exports.getTimeTracking = async (req, res) => {
  try {
    let condition = {};
    if (req.query.startDate && req.query.endDate) {
      condition = {
        createdAt: {
          [Op.between]: [req.query.startDate, req.query.endDate],
        },
      };
    }
    const userId = Number(req.query.userId);

    if (req.query.userId) {
      condition = {
        ...condition,
        userId: userId,
      };
    }

    const data = await TimeTraceModel.findAll({
      where: { ...condition },
    });

    if (!data) return sendResponse(res, 404, null, COMMON_STRINGS.NOT_FOUND);
    return sendResponse(res, 200, data);
  } catch (err) {
    console.log(`Error in getTasks: ${err.message}`);
    return sendResponse(
      res,
      500,
      null,
      COMMON_STRINGS.SERVER_ERROR,
      err.message
    );
  }
};

exports.addTimeTrace = async (req, res) => {
  try {
    const isStarted = await TimeStartModel.findOne({
      where: { userId: req.userId },
    });

    if (!isStarted)
      return sendResponse(
        res,
        402,
        WORKFLOW_STRINGS.TIMER_TRACKING_END_FAILURE
      );
    TimeStartModel.destroy({
      where: { userId: req.userId },
    });
    const data = await TimeTraceModel.create({
      ...req.body,
      userId: req.userId,
    });

    return sendResponse(
      res,
      200,
      data,
      WORKFLOW_STRINGS.TIMER_TRACKING_END_SUCCESS
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

exports.makeFile = async (req, res) => {
  let condition = {};
  if (req.query.startDate && req.query.endDate) {
    condition = {
      createdAt: {
        [Op.between]: [req.query.startDate, req.query.endDate],
      },
    };
  }
  const userId = Number(req.query.userId);

  if (req.query.userId) {
    condition = {
      ...condition,
      userId: userId,
    };
  }

  const timeTrack = await TimeTraceModel.findAll({
    where: { ...condition },
    attributes: [
      "startTime",
      "startLatitude",
      "startLongitude",
      "endTime",
      "endLatitude",
      "endLongitude",
    ],
  });

  let data = [
    ["Comenzar", "Latitud", "Longitud", "Fin", "Latitud", "Longitud"],
  ];
  const data1 = await Promise.all(
    timeTrack.map(async (item) => {
      const newArray = [
        dayjs(item.startTime).format("YYYY-MM-DD HH:mm:ss"),
        item.startLatitude,
        item.startLongitude,
        dayjs(item.endTime).format("YYYY-MM-DD HH:mm:ss"),
        item.endLatitude,
        item.endLongitude,
      ];
      data = [...data, newArray];

      return { ...item };
    })
  );

  // Create a new workbook and a new worksheet
  const wb = XLSX.utils.book_new();
  const ws = XLSX.utils.aoa_to_sheet(data);

  // Add the worksheet to the workbook
  XLSX.utils.book_append_sheet(wb, ws, "Sheet1");

  // Convert the workbook to a binary XLSX file
  const xlsxBinary = XLSX.write(wb, { type: "binary", bookType: "xlsx" });

  // Specify the file path where you want to save the XLS file
  const filePath = "./report/file.xlsx";

  // Write the XLSX file to the specified path
  fs.writeFileSync(filePath, xlsxBinary, "binary");

  return sendResponse(res, 200, WORKFLOW_STRINGS.TIMER_TRACKING_CREATED_XML);
};

exports.testMakeFile = async (req, res) => {
  let condition = {};
  if (req.query.startDate && req.query.endDate) {
    condition = {
      createdAt: {
        [Op.between]: [req.query.startDate, req.query.endDate],
      },
    };
  }
  const userId = Number(req.query.userId);

  if (req.query.userId) {
    condition = {
      ...condition,
      userId: userId,
    };
  }

  const timeTrack = await TimeTraceModel.findAll({
    where: { ...condition },
    attributes: [
      "startTime",
      "startLatitude",
      "startLongitude",
      "endTime",
      "endLatitude",
      "endLongitude",
    ],
  });

  let data = [
    ["Comenzar", "Latitud", "Longitud", "Fin", "Latitud", "Longitud"],
  ];
  const data1 = await Promise.all(
    timeTrack.map(async (item) => {
      const newArray = [
        dayjs(item.startTime).format("YYYY-MM-DD HH:mm:ss"),
        item.startLatitude,
        item.startLongitude,
        dayjs(item.endTime).format("YYYY-MM-DD HH:mm:ss"),
        item.endLatitude,
        item.endLongitude,
      ];
      data = [...data, newArray];

      return { ...item };
    })
  );

  const wb = XLSX.utils.book_new();
  const ws = XLSX.utils.aoa_to_sheet(data);
  XLSX.utils.book_append_sheet(wb, ws, "Sheet1");

  const buffer = XLSX.write(wb, { type: "buffer", bookType: "xlsx" });

  const readStream = new stream.PassThrough();
  readStream.end(buffer);

  res.set("Content-disposition", "attachment; filename=generated_file.xlsx");
  res.set(
    "Content-Type",
    "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
  );
  readStream.pipe(res);
};
