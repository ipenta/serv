
const Auth = function (data) {
  this._id = data._id || '';
  this.identity_type = data.identity_type || '';
  this.identifier = data.identifier || '';
  this.credential = data.credential || '';
};

module.exports = Auth
