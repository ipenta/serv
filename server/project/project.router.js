const router = require('express').Router();

router.route('/')
  .get(function (req,resp) {
    resp.json({"name":"list project"});
  })
  .post(function (req,resp) {
    resp.json({"name":"create project"})
  })

router.route('/:id')
  .get(function (req,resp) {
    resp.json({"name":"show project"});
  })
  .patch(function (req,resp) {
    resp.json({"name":"update project"})
  })
  .delete(function (req,resp) {
    resp.json({"name":"delete project"})
  })

module.exports = router;
