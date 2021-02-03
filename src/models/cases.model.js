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
  typeService: {
    type: String,
    require: true,
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
  abstract: {
    type: String,
    require: true,
  },
  evidence: {
    type: String,
  },
}, {
  timestamps: true,
})

const Cases = model('Cases', casesSchema);

module.exports = Cases;