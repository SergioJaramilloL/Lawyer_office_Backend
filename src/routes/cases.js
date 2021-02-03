const router = require('express').Router();
const casesController = require('../controllers/cases.controller');

router.route('/').post(casesController.create)

module.exports = router;