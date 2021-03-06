const fs = require('fs');
const path = require('path');
const regexp = new RegExp(/^.*(\/\w+)\/(router.js)$/);

/**
* 遍历查找出含有 **.router.js 的文件
*/
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

/**
* `/user.router.js`，将路径中的`/usr`截取出来作为router路径，然后读取文件中的方法遍历加载出来
*/
const routerFilter = function (router, sourceDir) {
  traversal(sourceDir,function (file) {
    if(regexp.test(file)){
      const result = regexp.exec(file)
      router.use(result[1],require(result[0]));
    }
  })
}

module.exports = {traversal,routerFilter};
