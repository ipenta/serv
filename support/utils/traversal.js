const fs = require('fs');
const path = require('path');

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

module.exports = traversal;
