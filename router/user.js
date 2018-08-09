const UserStore = require('../database/index.js').UserStore;

const UserRouter = {
  'GET /api/user': (req,resp) => {
    console.log(req.query)
    resp.json({id:'2222'})
  },
  'POST /api/user': (req,resp) => {
    UserStore.insert(req.body)
    resp.json({id:'2222'})
  },
  'GET /api/user/:id': (req,resp) => {
    console.log(req.query)
    resp.json({id:'2222'})
  },
  'POST /api/user/:id': (req,resp) => {
    console.log(req.query)
    resp.json({id:'2222'})
  },
  'PATCH /api/user/:id': (req,resp) => {
    console.log(req.query)
    resp.json({id:'2222'})
  },
  'DELETE /api/user/:id': (req,resp) => {
    console.log(req.query)
    resp.json({id:'2222'})
  }
}

module.exports = UserRouter
