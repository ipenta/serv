const jwt = require('jsonwebtoken');
const config = require('../../config/config');

const login = function (req, resp) {
  const token = jwt.sign({
    username: req.body.username
  }, config.jwtSecret, { expiresIn: '1h' })
  resp.json({
    status: 200,
    body: {
      id: "jsdjjf",
      token: token
    }
  });
}

const register = function (req, resp) {
  resp.json({
    "status": 200,
    "body": {
      "id": "jsdjjf"
    }
  });
}


function getRandomNumber() {
}

module.exports = { login, register, getRandomNumber };
