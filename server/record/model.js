const mongoose = require('mongoose');

const ModelSchema = new mongoose.Schema({
  uid: {
    type: String,
    required: true
  },
  title: {
    type: String,
    required: true
  },
  project: {
    _id: {
      type: String,
      required: true
    },
    name: {
      type: String,
      required: true
    },
    owner: {
      _id: {
        type: String,
        required: true
      },
      name: {
        type: String,
        required: true
      }
    },
    builder: {
      _id: {
        type: String,
        required: true
      },
      name: {
        type: String,
        required: true
      }
    },
    designer: {
      _id: {
        type: String,
        required: true
      },
      name: {
        type: String,
        required: true
      }
    },
    supervisor: {
      _id: {
        type: String,
        required: true
      },
      name: {
        type: String,
        required: true
      }
    }
  },
  entity: {
    _id: {
      type: String,
      required: true
    },
    name: {
      type: String,
      required: true
    }
  },
  principal: {
    _id: {
      type: String,
      required: true
    },
    name: {
      type: String,
      required: true
    },
    phonenum: {
      type: String,
      required: true
    }
  },
},{
  versionKey: false
});

module.exports = mongoose.model('Record', ModelSchema);
