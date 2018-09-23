const mongoose = require('mongoose');

const ModelSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  owner: {
    _id :{
      type: String,
      required: true
    },
    name: {
      type: String,
      required: true
    }
  },
  builder: {
    _id :{
      type: String,
      required: true
    },
    name: {
      type: String,
      required: true
    }
  },
  designer: {
    _id :{
      type: String,
      required: true
    },
    name: {
      type: String,
      required: true
    }
  },
  supervisor: {
    _id :{
      type: String,
      required: true
    },
    name: {
      type: String,
      required: true
    }
  }
}, {
  versionKey: false
});

module.exports = mongoose.model('Project', ModelSchema);
