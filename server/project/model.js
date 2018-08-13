const mongoose = require('mongoose');

const ModelSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  entities: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model('Project', ModelSchema);
