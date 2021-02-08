const router = require('express').Router();
const casesController = require('../controllers/cases.controller');

router.route('/').post(casesController.create);
router.route('/').get(casesController.list);
router.route('/:caseId').get(casesController.show);
router.route('/:caseId').put(casesController.update);
router.route('/:caseId').delete(casesController.destroy);


module.exports = router;