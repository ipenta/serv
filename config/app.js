const path = require('path');

const app = require('express')();
const bodyParser = require('body-parser');
const router = require('./router');
const port = process.env.PORT || 9527;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

router(app)

module.exports = app;
