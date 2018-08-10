const router = require('express').Router();
const customRouterHandler = require('../index.router');
router.use('/auth', require('../support/auth/auth.router'));

module.exports = function (app) {
  app.use('/api', router);
  customRouterHandler(function (_routers) {
    _routers.map(router => app.use('/api', router))
  })
  app.use(function(err, req, res, next){
    res.status(400).json(err);
  });
}
