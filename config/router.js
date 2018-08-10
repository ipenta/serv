const path = require('path');
const router = require('express').Router();

const {routerFilter} = require('../support/utils/traversal');
const sysDir = path.resolve(__dirname,'../support')
const userDir = path.resolve(__dirname,'../server')

module.exports = function (app) {
  routerFilter(sysDir).map(router => app.use('/api', router));
  routerFilter(userDir).map(router => app.use('/api', router));
  app.use(function(err, req, res, next){
    res.status(400).json(err);
  });
}
