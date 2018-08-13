const router = require('express').Router();

router.route('/')
  .get(function (res,resp) {
    resp.json({"name":"list project"});
  });
  .post(function (res,resp) {
    resp.json({"name":"create project"})
  })

router.route('/:id')
  .get(function (res,resp) {
    resp.json({"name":"show project"});
  });
  .patch(function (res,resp) {
    resp.json({"name":"update project"})
  })
  .delete(function (res,resp) {
    resp.json({"name":"delete project"})
  })

module.exports = router;
