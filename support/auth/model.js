const mongoose = require('mongoose');

const ModelSchema = new mongoose.Schema({
  identity_type: {
    type: String,
    required: true
  },
  identifier: {
    type: String,
    required: true
  },
  credential: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model('Auth', ModelSchema);
