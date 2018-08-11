const router = require('express').Router();

/** POST /api/auth/login - Returns token if correct username and password is provided */
router.route('/info')
  .get((req,resp)=>{resp.json({id:'dddd'})});


module.exports = router;
