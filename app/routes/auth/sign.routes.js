const controller = require("../../controllers/auth/auth.controller");
const { validateRequest } = require("../../utils/common/validator");
const checkUserStatus = require("../../middleware/auth");

module.exports = function (app) {
  /**
   * @openapi
   * '/api/auth/signup':
   *  post:
   *     tags:
   *     - Authentication
   *     summary: Create a user
   *     requestBody:
   *      required: true
   *      content:
   *        application/json:
   *           schema:
   *            type: object
   *            required:
   *              - firstName
   *              - lastName
   *              - dni
   *              - password
   *            properties:
   *              firstName:
   *                type: string
   *                default: Huateng
   *              lastName:
   *                type: string
   *                default: Fang
   *              dni:
   *                type: string
   *                default: "fang@wonderwave.io"
   *              password:
   *                type: string
   *                default: Fang123!@#
   *     responses:
   *      200:
   *        description: User was registered successfully!
   *      404:
   *        description: Not Found
   *      500:
   *        description: Server Error
   */
  app.post(
    "/api/auth/signup",
    [validateRequest, checkUserStatus],
    controller.signup
  );

  /**
   * @openapi
   * '/api/auth/signin':
   *  post:
   *     tags:
   *     - Authentication
   *     summary: Login as a user
   *     requestBody:
   *      required: true
   *      content:
   *        application/json:
   *           schema:
   *            type: object
   *            required:
   *              - dni
   *              - password
   *            properties:
   *              dni:
   *                type: string
   *                default: 'admin@timetracing.com'
   *              password:
   *                type: string
   *                default: 'timeTrace@2024'
   *     responses:
   *      200:
   *        description: Result Return by Json
   *      409:
   *        description: Conflict
   *      404:
   *        description: Not Found
   *      500:
   *        description: Server Error
   */

  app.post(
    "/api/auth/signin",
    [validateRequest, checkUserStatus],
    controller.signin
  );
};
