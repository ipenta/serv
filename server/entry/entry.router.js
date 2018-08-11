const router = require('express').Router();

router.route('/')
  .get(function (res,resp) {
    resp.json({"name":"entry----12"});
  });

router.route('/:id')
  .get(function (res,resp) {
    resp.json({"name":"entry","id":res.query});
  });

module.exports = router;
