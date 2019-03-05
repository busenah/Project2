const mongoose = require("../db/connection");
const Post = new mongoose.Schema({
  title: String,
  content: String
});

module.exports = {
  Post: mongoose.model("Post", require("./item")),
  User: mongoose.model("User", require("./user"))
};
