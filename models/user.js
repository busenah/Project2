const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const passportLocalMongoose = require("passport-local-mongoose");

const UserSchema = new Schema({
  // allows a user to log into the system with a unique username
  username: String,
  //   allows a user to have a unique password in order to log into the system
  password: String
});

UserSchema.plugin(passportLocalMongoose);

module.exports = UserSchema;
