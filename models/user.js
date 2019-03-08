const mongoose = require("../db/connection");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  firstName: String,
  lastName: String,
  email: String
});

module.exports = mongoose.model("user", UserSchema);
