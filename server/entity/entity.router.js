const router = require('express').Router();

router.route('/')
  .get(function (res,resp) {
    resp.json({"name":"list entity"});
  });
  .post(function (res,resp) {
    resp.json({"name":"create entity"})
  })

router.route('/:id')
  .get(function (res,resp) {
    resp.json({"name":"show entity"});
  });
  .patch(function (res,resp) {
    resp.json({"name":"update entity"})
  })
  .delete(function (res,resp) {
    resp.json({"name":"delete entity"})
  })

module.exports = router;
