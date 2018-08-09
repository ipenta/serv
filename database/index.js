const path = require('path');
const datastore = require('nedb-promise');

const _import = function (file) {
  return path.resolve(__dirname,file)
}

const UserStore = datastore({filename: _import('./store/user.json'),autoload: true})
const AuthStore = datastore({filename: _import('./store/auth.json'),autoload: true})

module.exports = {
  UserStore: UserStore,
  AuthStore: AuthStore
}
