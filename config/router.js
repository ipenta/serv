const path = require('path');
const router = require('express').Router();

const {routerFilter} = require('../support/utils/traversal');

const supportDir = path.resolve(__dirname,'../support');
const serverDir = path.resolve(__dirname,'../server');

module.exports = {
  supportRouter : routerFilter(supportDir),
  serverRouter: routerFilter(serverDir)
}
