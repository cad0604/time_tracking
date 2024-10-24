const express = require("express");
const cors = require("cors");
const app = express();
const path = require("path");
const swaggerUI = require("swagger-ui-express");
require("dotenv").config();
const { SwaggerSpecs, SwaggerOptions } = require("../app/utils/common/swagger");

const { createDatabase } = require("../app/utils/db/connector");
app.set("trust proxy", true);
app.use(express.static(path.join(process.cwd(), "/public")));
app.use(express.static(path.join(process.cwd(), "frontend", "build")));

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

const fs = require("fs");
const { sequelize } = require("../app/utils/db/connector");
const Sequelize = require("sequelize");
require("dotenv").config();

const modelsFolderPaths = [
  "../app/models/auth",
  "../app/models/cms",
  "../app/models/workflow",
];

const db = { sequelize, Sequelize, models: {} };
const { seedDatabase } = require("../app/utils/db/seed");

createDatabase();
require("../app/routes/index")(app);

app.use((req, res, next) => {
  res.sendFile(path.resolve(process.cwd(), "frontend", "build", "index.html"));
});

app.use(
  "/api-docs",
  swaggerUI.serve,
  swaggerUI.setup(SwaggerSpecs, SwaggerOptions)
);
// app.get("/", (req, res) => {
//   res.json({ message: "Welcome to bezkoder application." });
// });

const PORT = process.env.SERVER_PORT || 8080;

const syncOptions = {
  // alter: true, // Only update schema changes without dropping data
  force: false, // Drop and re-create tables
};
// app.listen(PORT, () => {
//   console.log(`Server is running on port ${PORT}.`);
// });

modelsFolderPaths.map((modelsFolderPath) => {
  const dir = path.join(__dirname, modelsFolderPath);
  fs.readdirSync(dir).forEach((file) => {
    const modelPath = path.join(dir, file);
    const model = require(modelPath);
    db.models[model.name] = model;
  });
});
Object.keys(db.models).forEach((key) => {
  if (db.models[key].hasOwnProperty("associate")) {
    db.models[key].associate(db.models);
  }
});

db.sequelize
  .sync(syncOptions)
  .then(async () => seedDatabase())
  .then(() => {
    app.listen(PORT, () => {
      console.log("servier is running on 8080");
    });
  })
  .catch((error) => {
    console.log("Initializing a server:", error);
  });
