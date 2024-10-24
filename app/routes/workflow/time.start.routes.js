const checkUserStatus = require("../../middleware/auth");
const controller = require("../../controllers/workflow/time.start.controller");
const { validateRequest } = require("../../utils/common/validator");

module.exports = function (app) {
  /**
   * @openapi
   * '/api/workflow/time-start':
   *  get:
   *     tags:
   *     - Workflow
   *      - Time Start
   *     summary: Get all timer start
   *     security:
   *      - Authorization: []
   *     responses:
   *      200:
   *        description: Fetched Successfully
   *      400:
   *        description: Bad Request
   *      404:
   *        description: Not Found
   *      500:
   *        description: Server Error
   */
  app.get(
    "/api/workflow/time-start",
    [checkUserStatus],
    controller.getTimeStart
  );

  /**
   * @openapi
   * '/api/workflow/time-start':
   *  post:
   *     tags:
   *     - Workflow
   *      - Time Start
   *     summary: Create a time start
   *     security:
   *      - Authorization: []
   *     requestBody:
   *      required: true
   *      content:
   *        application/json:
   *           schema:
   *            type: object
   *            required:
   *              - startTime
   *            properties:
   *              startTime:
   *                type: date
   *                default: '2024.01.01 00:00:00'
   *              latitude:
   *                type: double
   *                default: 0.00021
   *              longitude:
   *                type: double
   *                default: 0.01021
   *     responses:
   *      201:
   *        description: Created
   *      409:
   *        description: Conflict
   *      404:
   *        description: Not Found
   *      500:
   *        description: Server Error
   */
  app.post(
    "/api/workflow/time-start",
    [checkUserStatus],
    controller.addTimeStart
  );
};
