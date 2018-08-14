const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');

const cors = require('cors');
const helmet = require('helmet');
const compression = require('compression');
const jwt = require('express-jwt');

const registerRouter = require('./router');

const config = require('./config');
const mongoose = require('./mongoose');

//初始化mongoose
mongoose.connect();

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(cors());
app.use(helmet());
app.use(compression());

registerRouter(app);

module.exports = app;
