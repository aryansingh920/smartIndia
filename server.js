"use strict";
//jshint esversion:7

require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const _ = require("lodash");
const mongoose = require("mongoose");
const session = require("express-session");
const passport = require("passport");
const passportLocalMongoose = require("passport-local-mongoose");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const findOrCreate = require("mongoose-findorcreate");
const fs = require("fs");
const path = require("path");

const app = express();

app.use(express.static(path.join(__dirname, 'public')))
app.set("view engine", "ejs");
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

const routes = require("./routes/routes");

// app.use((req, res, next) => {
//   console.log(req.protocol);
//   console.log(req.get('host'));
//   console.log(req.query);
//   const url = `${req.protocol}://${req.get('host')}${req.url}/`;
//   console.log(url);
//   next();
// })

app.get("/", (req, res) => {
  res.redirect("/app/home");
});


app.use("/app", routes)


const port = 3000 || process.env.PORT;
app.listen(port, async (req, res) => {
  console.log("server is running on port " + port);
});