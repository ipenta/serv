const AuthStore = require('../database/index.js').AuthStore;
const Auth = require('../model/Auth');

const AuthRouter = {
  'GET /v1/api/auth':(req,resp) => {

  },
  'POST /v1/api/auth':(req,resp) => {
    const entity = new Auth(req.body);
    delete entity._id
    AuthStore.find(entity).then(result => {
      if (!result) {
        AuthStore.insert(entity).then(result => {
          resp.json(result)
        })
      }
    })


    // delete entity._id
    // AuthStore.insert(entity).then(result => {
    //   resp.json(result)
    // })
  },
  'GET /api/auth/:id':(req,resp) => {

  },
  'PATCH /api/auth/:id':(req,resp) => {

  },
  'DELETE /api/auth/:id':(req,resp) => {

  }
}

module.exports = AuthRouter;
