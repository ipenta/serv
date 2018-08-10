const path = require('path');

const app = require('express')();
const bodyParser = require('body-parser');
const router = require('./config/router');
const port = process.env.PORT || 9527;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

router(app)

app.listen(port)
console.log('todo list RESTful API server started on: ' + port);
