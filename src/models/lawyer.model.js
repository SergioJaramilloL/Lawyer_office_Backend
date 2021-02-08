const { Schema, model } = require('mongoose');

const lawyerSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  lastname: {
    type: String,
    required: true,
  },
  password: {
    type: String,
  },
  email: {
    type: String,
  },
});

const Lawyer = model('Lawyer', lawyerSchema);
module.exports = Lawyer;