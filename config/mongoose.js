const config = require('./config');
const bluebird = require('bluebird');
const mongoose = require('mongoose');

// Set mongoose Promise to Bluebird
mongoose.Promise = bluebird

async function connect(){
  try {
    await mongoose.connect(config.mongo.host,{ useNewUrlParser: true })
  } catch (e) {
    setTimeout(connect, 1000);
  }
}

module.exports = {connect};
