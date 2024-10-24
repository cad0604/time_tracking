const Sequelize = require("sequelize");
require("dotenv").config();
const mysql2 = require("mysql2");
const mysql = require("mysql2/promise");

const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    dialect: process.env.DB_CONNECTION,
    dialectModule: mysql2,
    pool: {
      max: 300,
      min: 0,
      acquire: 30000,
      idle: 10000,
    },
  }
);

const createDatabase = async () => {
  await mysql
    .createConnection({
      host: process.env.DB_HOST,
      port: process.env.DB_PORT,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
    })
    .then((connection) => {
      connection.query(`CREATE DATABASE IF NOT EXISTS ${process.env.DB_NAME}`);
    })
    .catch((error) => {
      console.log(error);
    });
};

module.exports = { sequelize, createDatabase };
