const checkUserStatus = require("../../middleware/auth");
const controller = require("../../controllers/crm/customer.controller");
const { validateRequest } = require("../../utils/common/validator");

module.exports = function (app) {
  /**
   * @openapi
   * '/api/crm/customer':
   *  get:
   *     tags:
   *     - CRM
   *      - Customer
   *     summary: Get all customers.
   *     parameters:
   *      - name: id
   *        in: query
   *        schema:
   *          type: integer
   *        description: The User ID
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
    "/api/crm/customer",
    [validateRequest, checkUserStatus],
    controller.getCustomers
  );
};
