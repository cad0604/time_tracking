const fs = require("fs");
const path = require("path");
const { configSyncOption } = require("../common/helper");
const { sequelize } = require("./connector");
const Sequelize = require("sequelize");
require("dotenv").config();

const syncOption = configSyncOption();
const modelsFolderPaths = ["../../models/auth", "../../models/workflow"];

const db = { sequelize, Sequelize, models: {} };

const doMigration = () => {
  try {
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
    db.sequelize.sync(syncOption);
  } catch (err) {
    console.log(`Error in migration: ${err.message}`);
  }
};

doMigration();
