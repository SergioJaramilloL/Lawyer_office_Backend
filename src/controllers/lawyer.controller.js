const Lawyer = require('../models/lawyer.model');

module.exports = {
  async create (req, res) {
    try {
      const {
        name,
        lastname,
        password,
        email
      } = req.body;
      const lawyer = await Lawyer.create({
        name,
        lastname,
        password,
        email
      });
      res.status(201).json({ message: 'Lawyer successfully stored', data: lawyer });
    } catch ( error ) {
      res.status(400).json({ message: 'Lawyer could not be stored' });
      console.log(error);
    }
  },

  async show(req, res) {
    try {
      const { lawyerId } = req.params;
      const lawyer = await Lawyer.findById( lawyerId );

      if(!lawyer) {
        throw new Error('Lawyer not found');
      }
      res.status(200).json({ message: 'Lawyer found', data: lawyer });
    } catch {
      res.status(404).json({ message: 'Lawyer not found' });
    }
  },

};