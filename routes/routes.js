const express = require("express");
const router = express.Router();
const middleware = require("../middleware/middlewares");

router
    .get("/home", (middleware.home_get))
    .get("/list", (middleware.list_get));

module.exports = router;