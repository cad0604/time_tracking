const { DataTypes } = require("sequelize");
const { sequelize } = require("../../utils/db/connector");
const UserModel = require("../auth/user.model");

const TimeTraceModel = sequelize.define(
  "time_trace",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    startTime: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    endTime: {
      type: DataTypes.DATE,
      allowNull: false,
    },

    startLatitude: {
      type: DataTypes.DOUBLE,
    },
    startLongitude: {
      type: DataTypes.DOUBLE,
    },
    endLatitude: {
      type: DataTypes.DOUBLE,
    },
    endLongitude: {
      type: DataTypes.DOUBLE,
    },
  },
  {
    timestamps: true,
  }
);

TimeTraceModel.belongsTo(UserModel, {
  as: "creator",
  foreignKey: { name: "userId" },
});

module.exports = TimeTraceModel;
