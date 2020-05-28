const bodyParser = require('body-parser');
const cors = require('cors');
const express = require('express');
const { registerSchemas } = require('./controllers/schemas');
const routes = require('./routes');

registerSchemas();

const app = express();
app.use(bodyParser.json());
app.use(cors());
app.use('/', routes.router);

module.exports = app;
