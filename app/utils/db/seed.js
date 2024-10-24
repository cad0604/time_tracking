const logger = require("../common/logger");
const UsersSeeder = require("../../seeders/users.seeder");
const RolesSeeder = require("../../seeders/roles.seeder");

exports.seedDatabase = async () => {
  try {
    logger.info("Database seeding...");

    await RolesSeeder();
    await UsersSeeder();
    logger.info("Database sync successfully.");
  } catch (error) {
    logger.error(`In Database sync: ${error.message}`);
  }
};

// seedDatabase()
//For vercel deploymnet
