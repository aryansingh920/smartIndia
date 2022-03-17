const mongoose = require('mongoose')
const Product = require("../database/models").productModel;

const addProduct = async (req, res) => {

    console.log(req.body);

    const obj = new Product({
        name: req.body.name,
        description: req.body.description,
        image: req.body.image,
        price:req.body.price,
    });

    obj.save().then(() => console.log("Added")).catch(() => console.log("error"));
    res.send("added");
}

module.exports.addProduct = addProduct;
