const path = require('path');
const config = require('./config');
const router = require('express').Router();

const jwt = require('express-jwt');

const {routerFilter} = require('../support/utils/traversal');

const supportDir = path.resolve(__dirname,'../support');
const serverDir = path.resolve(__dirname,'../server');

// 系统级别API
router.use(jwt({ secret: config.jwtSecret }).unless({path:config.whitelist}), routerFilter(supportDir));
// 用户级别API
router.use(jwt({ secret: config.jwtSecret }),routerFilter(serverDir));

module.exports = router
