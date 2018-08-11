const config = require('./config');
const bluebird = require('bluebird');
const mongoose = require('mongoose');

// Set mongoose Promise to Bluebird
mongoose.Promise = bluebird

// Retry connection
// const connectWithRetry = () => {
//   console.log('MongoDB connection with retry')
//   return mongoose.connect(config.mongo.host,{ useNewUrlParser: true,useMongoClient: true })
// }
async function connect(){
  try {
    await mongoose.connect(config.mongo.host,{ useNewUrlParser: true })
    // logger.info({
    //   at: 'db#connectWithRetry',
    //   message: 'Connected to mongo'
    // });
  } catch (e) {
    // logger.error({
    //   at: 'db#connectWithRetry',
    //   message: 'Failed to connect to mongo on startup - retrying in 1 sec',
    //   error: e
    // });
    setTimeout(connect, 1000);
  }
}

module.exports = {connect};
