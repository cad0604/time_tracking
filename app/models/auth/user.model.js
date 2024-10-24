const { DataTypes } = require("sequelize");
const { sequelize } = require("../../utils/db/connector");
const CMSRoleModel = require("../cms/role.model");

const UserModel = sequelize.define(
  "users",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    firstName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    dni: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    roleId: {
      type: DataTypes.INTEGER,
      defaultValue: null,
    },
  },
  {
    timestamps: true,
  }
);

UserModel.belongsTo(CMSRoleModel, {
  as: "role",
  foreignKey: { name: "roleId" },
  onDelete: "SET NULL",
});

CMSRoleModel.hasMany(UserModel, { foreignKey: "roleId", onDelete: "SET NULL" });

module.exports = UserModel;
