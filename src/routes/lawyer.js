const router = require('express').Router();
const lawyerController = require('../controllers/lawyer.controller');

router.route('/').post(lawyerController.create);
router.route('/:lawyerId').get(lawyerController.show);

module.exports = router;