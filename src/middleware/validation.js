const schemas = require('../controllers/schemas');

/**
 * [schemaValidatorMiddleware Given a schema id validates the params of a request]
 * @param  schemaId [The schema id to be used to validate]
 * @return          [void]
 */
function schemaParamsValidator(schemaId) {
  return (req, res, next) => {
    if (req.query !== null && req.query !== undefined) {
      const validationResult = schemas.validateObject(req.query, schemaId);
      if (validationResult === true) {
        next();
      } else {
        res.status(400).json();
      }
    } else {
      res.status(400).json();
    }
  };
}

module.exports = {
  schemaParamsValidator,
};
