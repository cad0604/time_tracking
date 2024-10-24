const CMSRoleModel = require("../models/cms/role.model");
const logger = require("../utils/common/logger");

const data = [
  {
    id: 1,
    name: "Admin",
  },
  {
    id: 2,
    name: "Customer",
  },
];

const RolesSeeder = async () => {
  console.log("RoleSeeder is running.");

  try {
    const role = await CMSRoleModel.findOne({
      where: { id: 1 },
    });
    if (!role) {
      await CMSRoleModel.bulkCreate(data);
    }
  } catch (error) {
    console.log(`In RoleSeeder: ${error.message}`);
  }
};

module.exports = RolesSeeder;
