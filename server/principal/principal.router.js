const router = require('express').Router();

router.route('/')
  .get(function (req,resp) {
    resp.json({"name":"list principal"});
  })
  .post(function (req,resp) {
    resp.json({"name":"create principal"})
  })

router.route('/:id')
  .get(function (req,resp) {
    resp.json({"name":"show principal"});
  })
  .patch(function (req,resp) {
    resp.json({"name":"update principal"})
  })
  .delete(function (req,resp) {
    resp.json({"name":"delete principal"})
  })

module.exports = router;
