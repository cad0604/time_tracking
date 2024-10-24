const { DataTypes } = require("sequelize");
const { sequelize } = require("../../utils/db/connector");

const CMSRoleModel = sequelize.define("cms_roles", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

module.exports = CMSRoleModel;
