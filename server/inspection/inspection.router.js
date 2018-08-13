const router = require('express').Router();

router.route('/')
  .get(function (res,resp) {
    resp.json({"name":"list inspection"});
  });
  .post(function (res,resp) {
    resp.json({"name":"create inspection"})
  })

router.route('/:id')
  .get(function (res,resp) {
    resp.json({"name":"show inspection"});
  });
  .patch(function (res,resp) {
    resp.json({"name":"update inspection"})
  })
  .delete(function (res,resp) {
    resp.json({"name":"delete inspection"})
  })

module.exports = router;
