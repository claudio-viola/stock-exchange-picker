const algotrader = require('algotrader');

/**
 * [getQuotes controller for GET /api/stocks]
 * @param  {[Express.request]} req [Express req]
 * @param  {[Express.response]} res [Express.response]
 * @return {[type]}     [description]
 */
async function getQuotes(req, res) {
  try {
    const quotes = await algotrader.Data.Yahoo.getQuotes(req.query.symbol, '1d', '1d');
    return res.json(quotes);
  } catch (err) {
    if (err.message && err.message.includes('Not Found')) {
      res.sendStatus(404);
    } else {
      res.sendStatus(500);
    }
  }

  return null;
}


module.exports = {
  getQuotes,
};
