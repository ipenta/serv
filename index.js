const app = require('express')();
const port = process.env.PORT || 9527;

app.listen(port)
console.log('todo list RESTful API server started on: ' + port);
