const { Schema, model } = require('mongoose');

const suscriberSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
});

const Suscriber = model('Suscriber', suscriberSchema);
module.exports = Suscriber;