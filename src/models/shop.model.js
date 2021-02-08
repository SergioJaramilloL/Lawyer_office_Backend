const { Schema, model } = require('mongoose');

const shopSchema = new Schema({
  image: {
    type: String,
  },
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  price: {
    type: String,
    required: true,
  },
  linkTo: {
    type: String,
    required: true,
  },
});

const Shop = model('Shop', shopSchema);
module.exports = Shop;