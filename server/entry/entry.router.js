const router = require('express').Router();

router.route('/entry')
  .get(function (res,resp) {
    resp.json({"name":"entry"});
  });

module.exports = router;
