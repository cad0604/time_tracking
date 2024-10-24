module.exports = function (app) {
  require("./auth/sign.routes")(app);

  require("./workflow/time.start.routes")(app);
  require("./workflow/time.trace.routes")(app);

  require("./crm/customer.routes")(app);

  require("./utils/file.routes")(app);
};
