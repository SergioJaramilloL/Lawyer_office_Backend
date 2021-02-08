const router = require('express').Router();
const blogController = require('../controllers/blog.controller');

router.route('/').post(blogController.create);
router.route('/').get(blogController.list);
router.route('/:blogId').get(blogController.show);
router.route('/:blogId').put(blogController.update);
router.route('/:blogId').delete(blogController.destroy);


module.exports = router;