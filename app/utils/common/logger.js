const { createLogger, format, transports } = require("winston");
require("winston-daily-rotate-file");
const { combine, timestamp, label } = format;

// Define your custom format
const logFormat = format.printf((info) => {
  return `${info.timestamp} [${info.label}] ${info.level.toUpperCase()}: ${
    info.message
  }`;
});

// Create a daily rotate file transport for 'info' level
const dailyRotateFileTransport = new transports.DailyRotateFile({
  filename: "./logs/firehub-%DATE%.log",
  datePattern: "YYYY-MM-DD",
  zippedArchive: true,
  maxSize: "20m",
  level: "info", 
});

// Create a file transport for 'error' level logs
const errorFileTransport = new transports.File({
  filename: "./logs/error.log",
  level: "error",
});

const logger = createLogger({
  levels: {
    error: 0,
    info: 2,
  },
  format: combine(label({ label: "FireHub" }), timestamp(), logFormat),
  transports: [
    new transports.Console(),
    dailyRotateFileTransport,
    errorFileTransport,
  ],
});

module.exports = logger;
