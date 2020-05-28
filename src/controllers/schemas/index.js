/**
 * Schemas validation
 * can be used by routers.
 */

const Ajv = require('ajv');
const stocks = require('./stocks');

const ajvValidator = new Ajv({
  allErrors: true,
  coerceTypes: true,
  useDefaults: true,
});

// REGISTER SCHEMAS TO VALIDATE HERE
const SCHEMAS = [
  stocks.stocksParamsSchema,
];

/**
 * [addSchemas Add json schemas to AJV validator]
 * @param schemas [list of schemas to add]
 */
function registerSchemas() {
  SCHEMAS.forEach((schema) => {
    ajvValidator.addSchema(schema, schema.$id);
  });
}

/**
 * [isValid Returns true if a given json is valid for a given schema]
 * @param  json   [the json to validate]
 * @param  schema [the schema to validate it with]
 * @return        [true or fales]
 */
function validateObject(json, schemaId) {
  const valid = ajvValidator.validate(
    schemaId,
    json,
  );
  if (valid === true) {
    return true;
  }

  return false;
}


module.exports = {
  validateObject,
  registerSchemas,
  ajvValidator,
};
