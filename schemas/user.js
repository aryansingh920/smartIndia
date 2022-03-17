const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    username: String,
    password: String,
    googleId: String,
    facebookId: String,
    email: String,
    avatar: String,
    avatar_url: String,
    name: String,
    phone: String,
    cart:[]
});

const userModel = new mongoose.model("userModel", userSchema);
module.exports = userModel;