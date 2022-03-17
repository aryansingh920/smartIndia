const user = require('../schemas/user.js');
const product = require('../schemas/products.js');


const database = {
    userModel: user,
    productModel:product,
}

module.exports = database;
