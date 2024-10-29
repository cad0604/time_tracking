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

  /**
   * @openapi
   * '/api/crm/customer':
   *  delete:
   *     tags:
   *     - CRM
   *      - Customer
   *     summary: Delete a customer by ID
   *     parameters:
   *      - name: id
   *        in: query
   *        description: The unique Id of the customer
   *        required: true
   *     security:
   *      - Authorization: []
   *     responses:
   *      200:
   *        description: Removed
   *      400:
   *        description: Bad request
   *      404:
   *        description: Not Found
   *      500:
   *        description: Server Error
   */
  app.delete(
    "/api/crm/customer",
    [validateRequest, checkUserStatus],
    controller.deleteCustomerById
  );
};
