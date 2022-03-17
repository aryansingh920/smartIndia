const express = require("express");
const router = express.Router();
const middleware = require("../middleware/middlewares");

router
    .get("/home", (middleware.home_get))
    .get("/productlist", (middleware.productlist_get))
    .get("/dedicatedproduct", (middleware.dedicatedproduct_get))
    .get("/cart",(middleware.cart_get))
    .get("/checkout",(middleware.checkout_get))
    .get("/list", (middleware.list_get));

module.exports = router;