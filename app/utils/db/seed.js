const UsersSeeder = require("../../seeders/users.seeder");
const RolesSeeder = require("../../seeders/roles.seeder");

exports.seedDatabase = async () => {
  try {
    console.log("Database seeding...");

    await RolesSeeder();
    await UsersSeeder();
    console.log("Database sync successfully.");
  } catch (error) {
    console.log(`In Database sync: ${error.message}`);
  }
};

// seedDatabase()
//For vercel deploymnet
