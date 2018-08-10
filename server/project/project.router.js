const router = require('express').Router();

router.route('/project')
  .get(function (res,resp) {
    resp.json({"name":"project"});
  });

module.exports = router;
