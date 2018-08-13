const router = require('express').Router();

router.route('/')
  .get(function (req,resp) {
    resp.json({"name":"list inspection"});
  })
  .post(function (req,resp) {
    resp.json({"name":"create inspection"})
  })

router.route('/:id')
  .get(function (req,resp) {
    resp.json({"name":"show inspection"});
  })
  .patch(function (req,resp) {
    resp.json({"name":"update inspection"})
  })
  .delete(function (req,resp) {
    resp.json({"name":"delete inspection"})
  })

module.exports = router;
