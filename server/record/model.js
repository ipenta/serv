const mongoose = require('mongoose');

const ModelSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  project: {
    type: String,
    required: true
  },
  entity: {
    type: String,
    required: true
  },
  principal: {
    type: String,
    required: true
  },
});

module.exports = mongoose.model('Record', ModelSchema);
