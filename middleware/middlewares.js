const home = require('./home.js');
const list = require('./list.js');

const middleware = {
    home_get: home.home_get,
    list_get: list.list_get
}

module.exports = middleware;