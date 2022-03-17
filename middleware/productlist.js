const mongoose = require("mongoose");
const Models = require("../database/models.js");
const productlist_get = async (req, res) => {
    const product = Models.productModel;
    const pro = await product.find().exec().then((data) => {
        console.log("product extracted")
        return (data);
    }).catch((err) => {
        console.log(err)
    });
    // console.log(pro);
    res.render("productlisting", {
        products: pro
    });
}

module.exports.productlist_get = productlist_get;