const router = require('express').Router();

router.route('/entry')
  .get(function (res,resp) {
    resp.json({"name":"entry"});
  });

router.route('/entry/:id')
  .get(function (res,resp) {
    resp.json({"name":"entry","id":res.query});
  });

module.exports = router;
