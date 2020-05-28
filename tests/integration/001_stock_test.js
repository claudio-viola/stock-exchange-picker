/* eslint-disable no-undef */
const chai = require('chai');
const algotrader = require('algotrader');
const sinon = require('sinon');
const supertest = require('supertest');
const app = require('../../src/app');

const { expect } = chai;
const SANDBOX = sinon.createSandbox();

describe('/api/stock Tests', () => {
  afterEach(() => {
    SANDBOX.restore();
  });

  describe('GET /api/stocks', () => {
    it('should return 200 and return the stock price', async () => {
      const stubbedYahooResponse = [{
        symbol: 'googl',
        date: '2020-05-27T18:00:22.000Z',
        source: 'Yahoo/NMS',
        price: {
          open: 1420,
          high: 1420.449951171875,
          low: 1394.5999755859375,
          close: 1411.56494140625,
          volume: 962708,
        },
      },
      ];
      const getQuotesStub = SANDBOX.stub(algotrader.Data.Yahoo, 'getQuotes');
      getQuotesStub.resolves(stubbedYahooResponse);
      return supertest(app)
        .get('/api/stocks?symbol=GOOGL')
        .set('Content-Type', 'application/json')
        .set('Accept', 'application/json')
        .then(async (res) => {
          expect(res.status).to.equal(200);
          expect(res.body).to.deep.equal(stubbedYahooResponse);
        });
    });


    it('should return 404 when the stock is not found', async () => {
      const getQuotesStub = SANDBOX.stub(algotrader.Data.Yahoo, 'getQuotes');
      getQuotesStub.rejects(new Error('Not Found'));
      return supertest(app)
        .get('/api/stocks?symbol=GOOGL')
        .set('Content-Type', 'application/json')
        .set('Accept', 'application/json')
        .then(async (res) => {
          expect(res.status).to.equal(404);
        });
    });

    it('should return 500 in case of internal error', async () => {
      const getQuotesStub = SANDBOX.stub(algotrader.Data.Yahoo, 'getQuotes');
      getQuotesStub.rejects(new Error());
      return supertest(app)
        .get('/api/stocks?symbol=GOOGL')
        .set('Content-Type', 'application/json')
        .set('Accept', 'application/json')
        .then(async (res) => {
          expect(res.status).to.equal(500);
        });
    });
  });
});
