const router = require('express').Router();

router.route('/')
  .get(function (res,resp) {
    resp.json({"name":"list principal"});
  })
  .post(function (res,resp) {
    resp.json({"name":"create principal"})
  })

router.route('/:id')
  .get(function (res,resp) {
    resp.json({"name":"show principal"});
  })
  .patch(function (res,resp) {
    resp.json({"name":"update principal"})
  })
  .delete(function (res,resp) {
    resp.json({"name":"delete principal"})
  })

module.exports = router;
