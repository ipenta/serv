const router = require('express').Router();

const validate = require('express-validation');

const validation = require('./validation');
const controller = require('./controller');

router.route('/')
  .get(controller.list)
  .post(controller.create)

router.route('/:id')
  .get(controller.findById)
  .patch(validate(validation.patch), controller.update)
  .delete(controller.remove)

module.exports = router;
