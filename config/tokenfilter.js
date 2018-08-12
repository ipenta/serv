const jwt = require('jsonwebtoken');
const config = require('./config');

const tokenfilter = function (req, resp, next) {
  const token = req.headers['authorization'];

  console.log('================',req.path)

  if(token) {
    jwt.verify(token, config.jwtSecret, function (err, decoded) {
      if(err) {
        return res.json({
          success: false,
          message: 'Failed to authenticate token.'
        });
      } else {
        // if everything is good, save to request for use in other routes
        req.decoded = decoded;
        next();
      }
    })
  } else {
    return res.status(403).send({
      success: false,
      message: 'No token provided.'
    });
  }
}

module.exports = tokenfilter;
