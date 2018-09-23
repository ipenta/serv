const mongoose = require('mongoose');

const ModelSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  }
},{
  versionKey: false
});

module.exports = mongoose.model('Entity', ModelSchema);
