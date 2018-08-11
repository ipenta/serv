const config = require('./config/config');
const app = require('./config/app');
const mongoose = require('./config/mongoose');

mongoose.connect()
app.listen(config.port, () => {
  console.info(`server started on port ${config.port} (${config.env})`); // eslint-disable-line no-console
});
