const router = require('express').Router();
const suscriberController = require('../controllers/suscriber.controller');

router.route('/').post(suscriberController.create);
router.route('/').get(suscriberController.list);
router.route('/:suscriberId').delete(suscriberController.destroy);


module.exports = router;