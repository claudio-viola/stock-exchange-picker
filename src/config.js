/**
 * @file this file should contain all the configuration used across the service
 */

const assert = require('assert');
const dotenv = require('dotenv');

dotenv.config();

const SERVER_PORT = Number(process.env.SERVER_PORT);

assert(!Number.isNaN(SERVER_PORT) && SERVER_PORT > 0,
  'SERVER_PORT env var must be a valid port number');


module.exports = {
  SERVER_PORT,
};
