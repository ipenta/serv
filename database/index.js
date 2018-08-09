const path = require('path');
const datastore = require('nedb-promise');

const UserStore = datastore({filename: path.resolve(__dirname,'./store/user.json'),autoload: true})

module.exports = {
  UserStore: UserStore
}
