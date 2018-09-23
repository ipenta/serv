const router = require('express').Router();

const authController = require('./controller');

const validate = require('express-validation');
const paramValidation = require('./validation');

/** POST /api/auth/login - Returns token if correct username and password is provided */
router.route('/login')
  .post(validate(paramValidation.login), authController.login);

router.route('/register')
  .post(validate(paramValidation.register), authController.register);

router.route('/info')
  .get(authController.getAuthInfo);


module.exports = router;
