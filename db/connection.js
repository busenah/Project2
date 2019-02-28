const mongoose = require("mongoose");
mongoose.connect("mongod://localhost/post");

module.exports = mongoose;
