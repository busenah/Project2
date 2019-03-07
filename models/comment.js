const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  title: String,
  comment: String
});

module.exports = UserSchema;
