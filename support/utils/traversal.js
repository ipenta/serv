const fs = require('fs');
const path = require('path');
const regexp = new RegExp(/^.*(.router.js)$/);

const traversal = function (dir, callback) {
  fs.readdirSync(dir).forEach(function (file) {
    var pathname = path.join(dir, file);

    if(fs.statSync(pathname).isDirectory()) {
      traversal(pathname, callback);
    } else {
      callback(pathname);
    }
  });
}

const routerFilter = function (userDir) {
  const routers = [];
  traversal(userDir,function (file) {
    regexp.test(file) ? routers.push(require(file)) : ''
  })

  return routers;
}

module.exports = {traversal,routerFilter};
