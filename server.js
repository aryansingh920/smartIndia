"use strict";
//jshint esversion:7

require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const _ = require("lodash");
const mongoose = require("mongoose");
const {
  PassportLocalSchema
} = require('mongoose');
const session = require("express-session");
const passport = require("passport");
const passportLocalMongoose = require("passport-local-mongoose");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const findOrCreate = require("mongoose-findorcreate");
const fs = require("fs");
const path = require("path");
const app = express();



mongoose.connect(`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.xjjka.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`).then(() => {
  console.log('connected to cluster : ' + process.env.DB_NAME)
}).catch((err) => {
  console.log(err + ' : error connecting to cluster')
});


app.use(express.static(path.join(__dirname, 'public')))
app.set("view engine", "ejs");
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);




const Models = require('./database/models.js');

const def = async () => {

  const product = Models.productModel;
  const pro = await product.find().exec().then((data) => {
    console.log("product extracted")
    return (data);
  }).catch((err) => {
    console.log(err)
  });
  // console.log(pro)
  // app.locals.product = pro;

}

// def();





const routes = require("./routes/routes");



app.use("/app", routes)

app.use("/", (req, res) => {
  res.redirect("/app/home")
});


const port = process.env.PORT || 3001;
app.listen(port, async (req, res) => {
  console.log("server is running on port " + port);
});