const path = require('path')
const readDir = require('readdir');
const userDir = path.resolve(__dirname,'./server')

readDir.read(userDir , ['**/**.router.js'], function (err, filesArray) {
   console.log(require('path').join(userDir,filesArray[1]))
});


// function travel(dir, callback) {
//   fs.readdirSync(dir).forEach(function (file) {
//     var pathname = path.join(dir, file);
//
//     if (fs.statSync(pathname).isDirectory()) {
//         travel(pathname, callback);
//     } else {
//         callback(pathname);
//     }
//   });
// }
//
// travel(path.resolve(__dirname,'./server'),function (file) {
//   console.log(file)
// })




const routers = [require('./server/project/project.router')]

module.exports = (callback => callback(routers))
