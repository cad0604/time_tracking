const sendResponse = (
  res,
  statusCode,
  data = null,
  message = null,
  error = null
) => {
  const response = { success: statusCode >= 200 && statusCode < 400 };
  if (data !== null) {
    response.data = data;
  }
  if (message !== null) {
    response.message = message;
  }
  if (error !== null) {
    response.error = error;
  }
  response.timestamp = Date.now();
  return res.status(statusCode).send(response);
};

const configSyncOption = () => {
  const args = process.argv.slice(2);
  if (args.length >= 1) {
    const mode = args[0].replace(/--mode=/g, "");
    if (mode === "force") {
      return { force: true };
    }
  }
  return { alter: true };
};

const updateOrCreateOnModel = async (Model, where, data) => {
  const foundItem = await Model.findOne({ where });
  if (!foundItem) {
    await Model.create(data);
  } else {
    await Model.update(data, { where });
  }
};

const filteredData = (data, key, startDay, endDay) => {
  const startDate = new Date(
    new Date().getTime() + startDay * 24 * 60 * 60 * 1000
  );
  const endDate = new Date(new Date().getTime() + endDay * 24 * 60 * 60 * 1000);
  return data.filter((d) => {
    let time = new Date(d[key]).getTime();
    return startDate < time && time < endDate;
  });
};

module.exports = {
  sendResponse,
  configSyncOption,
  updateOrCreateOnModel,
  filteredData,
};
