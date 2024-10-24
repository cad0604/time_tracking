const express = require("express");
const cors = require("cors");
const app = express();
const path = require("path");
const swaggerUI = require("swagger-ui-express");
require("dotenv").config();
const { SwaggerSpecs, SwaggerOptions } = require("./app/utils/common/swagger");
const { createDatabase } = require("./app/utils/db/connector");
// const cron = require('./app/cron/cron');
app.set("trust proxy", true);
app.use(express.static(path.join(__dirname, "/public")));
app.use(cors());
app.use(express.json({ limit: "50mb", extended: true }));
app.use(
  express.urlencoded({ limit: "50mb", extended: true, parameterLimit: 50000 })
);
app.use(cors({ origin: "*", credentials: true }));
app.all("*", (req, res, next) => {
  res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE,OPTIONS");
  res.header("Access-Control-Allow-Credentials", "true");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Key, Authorization"
  );
  next();
});

require("./app/routes/index")(app);

createDatabase();

app.use(
  "/api-docs",
  swaggerUI.serve,
  swaggerUI.setup(SwaggerSpecs, SwaggerOptions)
);
app.get("/", (req, res) => {
  res.json({ message: "Welcome to bezkoder application." });
});

const PORT = process.env.SERVER_PORT || 8090;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
