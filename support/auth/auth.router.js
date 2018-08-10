const router = require('express').Router();

const authController = require('./auth.controller');

const validate = require('express-validation');
const paramValidation = require('./auth.validation');

/** POST /api/auth/login - Returns token if correct username and password is provided */
router.route('/login')
  .post(validate(paramValidation.login), authController.login);

router.route('/register')
  .post(validate(paramValidation.register), authController.register);


module.exports = router;
