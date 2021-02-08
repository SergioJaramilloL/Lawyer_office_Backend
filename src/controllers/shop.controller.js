const Shop = require('../models/shop.model');

module.exports = {
  async create (req, res) {
    try {
      const {
        image,
        name,
        description,
        price,
        linkTo
      } = req.body;
      const product = await Shop.create({
        image,
        name,
        description,
        price,
        linkTo
      });
      res.status(201).json({ message: 'Product successfully stored', data: product });
    } catch ( error ) {
      res.status(400).json({ message: 'Product could not be stored' });
    }
  },

  async list(req, res) {
    try {
      const product = await Shop.find();

      if( !product ) {
        throw new Error( 'Products list not found' );
      }
      res.status(200).json({ message: 'Products list found', data: product });
    } catch ( error ) {
      res.status(404).json({ message: 'Products not found' });
    }
  },

  async show(req, res) {
    try {
      const { productId } = req.params;
      const product = await Shop.findById(productId);

      if(!product) {
        throw new Error('Product not found');
      }
      res.status(200).json({ message: 'Product found', data: product });
    } catch {
      res.status(404).json({ message: 'Product not found' });
    }
  },

  async update(req, res) {
    try{
      const { productId } = req.params;
      const product = await Shop.findByIdAndUpdate(productId, req.body, {
        new: true,
        useFindAndModify: false,
      });
      res.status(200).json({ message: 'Product updated', data: product });
    } catch {
      res.status(400).json({ message: 'Product could not be updated' });
    }
  },

  async destroy(req, res) {
    try {
      const { productId } = req.params;
      const product = await Shop.findByIdAndDelete(productId);

      if(!product) {
        throw new Error("Could not delete product");
      }
      res.status(200).json({ message: 'Product deleted', data: product });
    } catch (error) {
      res.status(400).json({ message: 'Product could not be deleted' });
    }
  },
};