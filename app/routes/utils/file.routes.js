const checkUserStatus = require("../../middleware/auth");
const { sendResponse } = require("../../utils/common/helper");
const { COMMON_STRINGS } = require("../../consts/response/common");

module.exports = function (app) {
  /**
   * @openapi
   * '/api/utils/file/download':
   *  get:
   *     tags:
   *     - Utils
   *      - File
   *     summary: Download a file
   *     parameters:
   *      - name: path
   *        in: query
   *        description: The path of file
   *        required: true
   *     security:
   *      - Authorization: []
   *     responses:
   *      200:
   *        description: Fetched Successfully
   *      404:
   *        description: Not Found
   *      500:
   *        description: Server Error
   */
  app.get("/api/utils/file/download", [checkUserStatus], (req, res) => {
    const path = req.query.path;

    res.download(path, (err) => {
      if (err) {
        sendResponse(res, 404, null, COMMON_STRINGS.NOT_FOUND);
      }
    });
  });
};
