const router = require('express').Router();
const mongoose = require('mongoose');

const Cat = mongoose.model('Cat', {
  name: String
});

router.route('/')
  .get(function (res, resp) {
    const kitty = new Cat({ name: 'Zildjian' });
    kitty.save((err, cat) => resp.json({"name":cat}));
    // Cat.find((err, cat) => {
    //   resp.json({
    //     "name": cat
    //   });
    // });
  });

router.route('/:id')
  .get(function (res, resp) {
    resp.json({
      "name": "entry",
      "id": res.params
    });
  });

module.exports = router;
