const router = require('express').Router();

const validate = require('express-validation');

const validation = require('./validation');
const controller = require('./controller');

router.route('/')
  .get(controller.list)
  .post(validate(validation.model), controller.create)

router.route('/:id')
  .get(controller.findById)
  .patch(validate(validation.model), controller.patch)
  .delete(validate(validation.model), controller.remove)

module.exports = router;
