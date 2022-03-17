const express = require("express");
const router = express.Router();
const middleware = require("../middleware/middlewares");

router
    .get("/home", (middleware.home_get))
    .get("/productlist", (middleware.productlist_get))
    .get("/dedicatedproduct",(middleware.dedicatedproduct_get))
    .get("/list", (middleware.list_get));

module.exports = router;