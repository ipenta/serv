const router = require('express').Router();

router.route('/')
  .get(function (req,resp) {
    resp.json({"name":"list record"});
  })
  .post(function (req,resp) {
    resp.json({"name":"create record"})
  })

router.route('/:id')
  .get(function (req,resp) {
    resp.json({"name":"show record"});
  })
  .patch(function (req,resp) {
    resp.json({"name":"update record"})
  })
  .delete(function (req,resp) {
    resp.json({"name":"delete record"})
  })

module.exports = router;
