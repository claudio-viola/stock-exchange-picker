const express = require('express');
const stockController = require('../controllers/stocks');
const validationMiddleware = require('../middleware/validation');

const router = express.Router();
router.get('/api/stocks',
  validationMiddleware.schemaParamsValidator('/api/stocks/params'),
  stockController.getQuotes);

module.exports = {
  router,
};
