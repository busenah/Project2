const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const CommentSchema = new Schema({
  title: String,
  comment: String
});

module.exports = CommentSchema;
