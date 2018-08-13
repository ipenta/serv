const router = require('express').Router();

const validate = require('express-validation');

const validation = require('./entity.validation');
const controller = require('./entity.controller');

router.route('/')
  .get(controller.list)
  .post(validate(validation.entity), controller.create)

router.route('/:id')
  .get(controller.findById)
  .patch(validate(validation.entity), controller.patch)
  .delete(validate(validation.entity), controller.remove)

module.exports = router;
