const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
    name: String,
    image: String,
    description: String,
    price:String

});

const productModel = new mongoose.model("productModel", productSchema);
module.exports = productModel;

