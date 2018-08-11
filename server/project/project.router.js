const router = require('express').Router();

router.route('/main')
  .get(function (res,resp) {
    resp.json({"name":"project"});
  });

module.exports = router;
