const mongoose = require('mongoose');

const ModelSchema = new mongoose.Schema({
  type: {
    type: String,
    required: true
  },
  text: {
    type: String,
    required: true
  },
  price: {
    type: String,
    required: true
  },
  unit: {
    type: String,
    required: true
  },
  methods: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model('Inspection', ModelSchema);
