const checkUserStatus = require("../../middleware/auth");
const controller = require("../../controllers/workflow/time.trace.controller");
const { validateRequest } = require("../../utils/common/validator");

module.exports = function (app) {
  /**
   * @openapi
   * '/api/workflow/time-trace':
   *  get:
   *     tags:
   *     - Workflow
   *      - Time Trace
   *     summary: Get all tasks or specific task with id or mainThemeId or limit
   *     parameters:
   *      - name: startDate
   *        in: query
   *        schema:
   *          type: date
   *        description: Start time
   *      - name: endDate
   *        in: query
   *        schema:
   *          type: date
   *        description: End Time
   *      - name: userId
   *        in: query
   *        schema:
   *          type: integer
   *        description: User Id
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
    "/api/workflow/time-trace",
    [checkUserStatus],
    controller.getTimeTracking
  );

  /**
   * @openapi
   * '/api/workflow/time-trace':
   *  post:
   *     tags:
   *     - Workflow
   *      - Time Trace
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
   *              - endTime
   *            properties:
   *              startTime:
   *                type: date
   *                default: '2024.01.01 00:00:00'
   *              endTime:
   *                type: date
   *                default: '2024.01.01 12:00:00'
   *              startLatitude:
   *                type: double
   *                default: 0.00021
   *              startLongitude:
   *                type: double
   *                default: 0.01021
   *              endLatitude:
   *                type: double
   *                default: 0.00021
   *              endLongitude:
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
    "/api/workflow/time-trace",
    [checkUserStatus],
    controller.addTimeTrace
  );

  /**
   * @openapi
   * '/api/workflow/time-trace/make-file':
   *  get:
   *     tags:
   *     - Workflow
   *      - Time Trace
   *     summary: Make the XLS file for special user
   *     parameters:
   *      - name: startDate
   *        in: query
   *        schema:
   *          type: date
   *        description: Start time
   *      - name: endDate
   *        in: query
   *        schema:
   *          type: date
   *        description: End Time
   *      - name: userId
   *        in: query
   *        schema:
   *          type: integer
   *        description: User Id
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
    "/api/workflow/time-trace/make-file",
    [checkUserStatus],
    // controller.makeFile
    controller.testMakeFile
  );
};
