const router = require('express').Router();
const shopController = require('../controllers/shop.controller');

router.route('/').post(shopController.create);
router.route('/').get(shopController.list);
router.route('/:productId').get(shopController.show);
router.route('/:productId').put(shopController.update);
router.route('/:productId').delete(shopController.destroy);


module.exports = router;