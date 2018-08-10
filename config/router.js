const router = require('express').Router();
router.use('/auth', require('../support/auth/auth.router'));

const {routerFilter} = require('../support/utils/traversal');
const userDir = require('path').resolve(__dirname,'../server')

module.exports = function (app) {
  app.use('/api', router);
  routerFilter(userDir).map(router => app.use('/api', router));
  app.use(function(err, req, res, next){
    res.status(400).json(err);
  });
}
