const proxy = {
  'GET /api/user/:name/:ss/:sd/:ss': (req,resp) => {
    console.log(req.query)
    resp.json({id:'2222'})
  }
}

module.exports = proxy
