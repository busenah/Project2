const mongoose = require("../db/connection");
const Post = new mongoose.Schema({
  title: String,
  content: String
});

module.exports = mongoose.model("Post", Post);
