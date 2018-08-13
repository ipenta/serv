const config = require('./config/config');
const app = require('./config/app');

app.listen(config.port, () => {
  console.info(`server started on port ${config.port} (${config.env})`); // eslint-disable-line no-console
});
