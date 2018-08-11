const router = require('express').Router();

router.route('/')
  .get(function (res,resp) {
    resp.json({"name":"entryd1"});
  });

router.route('/:id')
  .get(function (res,resp) {
    resp.json({"name":"entry","id":res.query});
  });

module.exports = router;
