const Cases = require('../models/cases.model');

module.exports = {
  async create (req, res) {
    try {
      const {
        typePerson,
        typeService,
        name,
        email,
        phone,
        abstract,
        evidence,
        state,
        terms
      } = req.body;
      const cases = await Cases.create({
        typePerson,
        typeService,
        name,
        email,
        phone,
        abstract,
        evidence,
        state,
        terms
      });
      res.status(201).json({ message: 'Case successfully stored' });
    } catch ( error ) {
      res.status(400).json({ message: 'Case could not be stored' });
    }
  },

  async list(req, res) {
    try {
      const cases = await Cases.find();

      if( !cases ) {
        throw new Error( 'Cases list not found' );
      }
      res.status(200).json({ message: 'Cases list found', data: cases });
    } catch ( error ) {
      res.status(404).json({ message: 'Cases not found' });
    }
  },

  async Show(req, res) {
    try {
      const { caseId } = req.params;
      const _case = await Cases.findById(caseId);

      if(!_case) {
        throw new Error('Case not found');
      }
      res.status(200).json({ message: 'Case found', data: _case });
    } catch {
      res.status(404).json({ message: 'Case not found' });
    }
  },

  async update(req, res) {
    try{
      const { caseId } = req.params;
      const _case = await Cases.findByIdAndUpdate(caseId, req.body, {
        new: true,
        useFindAndModify: false,
      });
      res.status(200).json({ message: 'Case updated', data: _case });
    } catch {
      res.status(400).json({ message: 'Case could not be updated' });
    }
  },

  async destroy(req, res) {
    try {
      const { caseId } = req.params;
      const _case = await Cases.findByIdAndDelete(caseId);

      if(!_case) {
        throw new Error("Could not delete case");
      }
      res.status(200).json({ message: 'Case deleted', data: _case });
    } catch (error) {
      res.status(400).json({ message: 'Case could not be deleted' });
    }
  },
};