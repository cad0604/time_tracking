const bcrypt = require("bcryptjs");
const logger = require("../utils/common/logger");
const UserModel = require("../models/auth/user.model");

const userData = [
  {
    firstName: "Nohman",
    lastName: "Janja",
    dni: "admin@timetracing.com",
    password: bcrypt.hashSync(
      "timeTrace@2024",
      Number(process.env.BCRYPT_SALT)
    ),
    roleId: 1, // roleId: 1 should be "SuperAdmin"
  },
];

const UsersSeeder = async () => {
  logger.info("UserSeeder is running.");

  try {
    const user = await UserModel.findOne({
      where: { dni: "admin@timetracing.com" },
    });
    if (!user) {
      await UserModel.bulkCreate(userData);
    }
  } catch (error) {
    logger.error(`In UserSeeder: ${error.message}`);
  }
};

module.exports = UsersSeeder;
