const { Validator } = require("node-input-validator");
const { validationConf } = require("../../consts/validation");
const logger = require("./logger");
const { COMMON_STRINGS } = require("../../consts/response/common");
const { sendResponse } = require("./helper");

exports.validateRequest = (req, res, next) => {
  // Determine whether to validate req.body (POST or PUT) or req.query (GET)
  const data =
    req.method === "POST" || req.method === "PUT"
      ? { ...req.body, ...req.query }
      : req.query;
  const inputs = validationConf[req.originalUrl.split("?")[0]][req.method];

  // Check for unknown fields in the request
  const unknownFields = Object.keys(data).filter(
    (key) => !inputs.hasOwnProperty(key)
  );

  if (unknownFields.length > 0) {
    return sendResponse(
      res,
      422,
      null,
      " '" + unknownFields + "' " + COMMON_STRINGS.VALIDATION_UNKNOWFIELD
    );
  }

  // Perform validation using node-input-validator

  const validation = new Validator(data, inputs);

  validation
    .check()
    .then((matched) => {
      if (matched) {
        // If validation succeeds, proceed to the next middleware
        next();
      } else {
        // If validation fails, construct error response
        const errorMessages = Object.values(validation.errors).map((error) => {
          const errorMessage = error.message || "Validation error";
          logger.error(`Error in form validation: ${errorMessage}`);
          return errorMessage;
        });

        return sendResponse(
          res,
          422,
          null,
          COMMON_STRINGS.VALIDATION_FAILED,
          errorMessages
        );
      }
    })
    .catch((error) => {
      // Handle unexpected validation errors
      logger.error(`Error during form validation: ${error.message}`);
      return sendResponse(
        res,
        500,
        null,
        COMMON_STRINGS.SERVER_ERROR,
        error.message
      );
    });
};
