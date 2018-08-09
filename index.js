const path = require('path');

const app = require('express')();
const router = require('./commons/router');
const port = process.env.PORT || 9527;

router(app,path.resolve('router/index.js'))

app.listen(port)
console.log('todo list RESTful API server started on: ' + port);
