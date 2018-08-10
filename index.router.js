const traversal = require('./support/utils/traversal');
const userDir = require('path').resolve(__dirname,'./server')
const routers = []

const regexp = new RegExp(/^.*(.router.js)$/)

traversal(userDir,function (file) {
  regexp.test(file) ? routers.push(require(file)) : ''
})

module.exports = (callback => callback(routers))
