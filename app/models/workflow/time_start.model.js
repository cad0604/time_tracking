const { DataTypes } = require("sequelize");
const { sequelize } = require("../../utils/db/connector");
const UserModel = require("../auth/user.model");

const TimeStartModel = sequelize.define(
  "time_start",
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
    latitude: {
      type: DataTypes.DOUBLE,
    },
    longitude: {
      type: DataTypes.DOUBLE,
    },
  },
  {
    timestamps: true,
  }
);

TimeStartModel.belongsTo(UserModel, {
  as: "creator",
  foreignKey: { name: "userId" },
});

module.exports = TimeStartModel;
