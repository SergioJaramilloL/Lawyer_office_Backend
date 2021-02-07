const Suscriber = require('../models/suscriber.model');

module.exports = {
  async create (req, res) {
    try {
      const {
        name,
        email
      } = req.body;
      const suscriber = await Suscriber.create({
        name,
        email
      });
      res.status(201).json({ message: 'Suscriber successfully stored', data: suscriber });
    } catch ( error ) {
      res.status(400).json({ message: 'Suscriber could not be stored' });
    }
  },

  async list(req, res) {
    try {
      const suscriber = await Suscriber.find();

      if( !suscriber ) {
        throw new Error( 'Suscriber list not found' );
      }
      res.status(200).json({ message: 'Suscriber list found', data: suscriber });
    } catch ( error ) {
      res.status(404).json({ message: 'Suscriber not found' });
    }
  },

  async destroy(req, res) {
    try {
      const { suscriberId } = req.params;
      const suscriber = await Suscriber.findByIdAndDelete(suscriberId);

      if(!suscriber) {
        throw new Error("Could not delete suscriber");
      }
      res.status(200).json({ message: 'Suscriber deleted', data: suscriber });
    } catch (error) {
      res.status(400).json({ message: 'Suscriber could not be deleted' });
    }
  },
};