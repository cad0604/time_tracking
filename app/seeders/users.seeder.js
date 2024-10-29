const bcrypt = require("bcryptjs");
const UserModel = require("../models/auth/user.model");

const userData = [
  {
    firstName: "Andres",
    lastName: "Gonzalez",
    dni: "44275462W",
    password: bcrypt.hashSync("2062", Number(process.env.BCRYPT_SALT)),
    roleId: 1, // roleId: 1 should be "SuperAdmin"
  },
];

const UsersSeeder = async () => {
  console.log("UserSeeder is running.");

  try {
    const user = await UserModel.findOne({
      where: { dni: "admin@timetracing.com" },
    });
    if (!user) {
      await UserModel.bulkCreate(userData);
    }
  } catch (error) {
    console.log(`In UserSeeder: ${error.message}`);
  }
};

module.exports = UsersSeeder;
