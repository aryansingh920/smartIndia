const home = require('./home.js');
const list = require('./list.js');
const productlist = require('./productlist.js');
const dedicateproduct = require('./dedicatedproduct.js');
const cart = require('./cart.js');
const checkout = require('./checkout.js');

const middleware = {
    home_get: home.home_get,
    list_get: list.list_get,
    productlist_get: productlist.productlist_get,
    dedicatedproduct_get: dedicateproduct.dedicatedproduct_get,
    cart_get: cart.cart_get,
    checkout_get: checkout.checkout_get
}

module.exports = middleware;