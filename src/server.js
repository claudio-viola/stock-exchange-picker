const config = require('./config');

const app = require('./app');

app.listen(config.SERVER_PORT, () => {
  /* eslint-disable no-console */
  console.log('Server running on', config.SERVER_PORT);
});
