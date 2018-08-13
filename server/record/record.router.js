const router = require('express').Router();

router.route('/')
  .get(function (res,resp) {
    resp.json({"name":"list record"});
  });
  .post(function (res,resp) {
    resp.json({"name":"create record"})
  })

router.route('/:id')
  .get(function (res,resp) {
    resp.json({"name":"show record"});
  });
  .patch(function (res,resp) {
    resp.json({"name":"update record"})
  })
  .delete(function (res,resp) {
    resp.json({"name":"delete record"})
  })

module.exports = router;
