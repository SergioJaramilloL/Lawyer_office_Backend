const { Schema, model } = require('mongoose');

const casesSchema = new Schema ({
  typePerson: {
    type: String,
    require: true,
  },
  typeService: {
    type: String,
    require: true,
  },
  typeCase: {
    type: String,
  },
  name: {
    type: String,
    require: true,
  },
  email: {
    type: String,
    require: true,
  },
  phone: {
    type: String,
    require: true,
  },
  city: {
    type: String,
    require: true,
  },
  abstract: {
    type: String,
    require: true,
  },
  evidence: {
    type: String,
  },
  state: {
    type: String,
  },
  terms: {
    type: Boolean,
    require: true,
  }
}, {
  timestamps: true,
})

const Cases = model('Cases', casesSchema);

module.exports = Cases;