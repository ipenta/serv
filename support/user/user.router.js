const router = require('express').Router();

const userController = require('./user.controller');

const validate = require('express-validation');
const paramValidation = require('./user.validation');

router.route('/:identifier')
  .get(validate(paramValidation.findOneById), userController.findOneById);

module.exports = router;
