const mongoose = require('mongoose');

const ModelSchema = new mongoose.Schema({
  recordId: {
    type: String,
    required: true
  },
  number: {
    type: Number,
    required: true
  },
  manufacturer: {
    type: String,
    required: true
  },
  inspection: {
    text: {
      type: String,
      required: true
    },
    type:{
      type: String,
      required: true
    },
    price:{
      type: Number,
      required: true
    },
    methods: [{
      type: String,
      required: true
    }]
  }
},{
  versionKey: false
});

module.exports = mongoose.model('Entry', ModelSchema);
