const mongoose = require("../db/connection");
const Post = new mongoose.Schema({
  title: String,
  content: String
});

const ItemSchema = require("./item");

module.exports = {
  Post: mongoose.model("Post", ItemSchema)
  // User: mongoose.model("User", require("./user"))
};
