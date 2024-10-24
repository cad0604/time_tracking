const mysql = require("mysql2/promise");
require("dotenv").config();

const dropAllTables = async () => {
  const connection = await mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
  });

  const QUERY = `select TABLE_NAME from information_schema.tables where table_schema = '${process.env.DB_NAME}'`;
  try {
    const [results] = await connection.query(QUERY);

    const fdSQL = "SET foreign_key_checks = 0;";
    await connection.query(fdSQL);
    results.map(async (res) => {
      const SQL = `drop table ${res.TABLE_NAME};`;
      await connection.query(SQL);
    });

    const feSQL = "SET foreign_key_checks = 1;";
    await connection.query(feSQL);
  } catch (err) {
    console.log(err.message);
  } finally {
    process.exit();
  }
};

dropAllTables();
