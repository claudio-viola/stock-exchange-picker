const stocksParamsSchema = {
  $id: '/api/stocks/params',
  additionalProperties: false,
  properties: {
    symbol: {
      type: 'string',
    },
  },
  required: ['symbol'],
  type: 'object',
};


module.exports = {
  stocksParamsSchema,
};
