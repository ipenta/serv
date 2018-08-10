const path = require('path');

const app = require('express')();
const bodyParser = require('body-parser');

const cors = require('cors');
const helmet = require('helmet');

const router = require('./router');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(cors());
app.use(helmet());

router(app)

module.exports = app;
