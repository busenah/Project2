const mongoose = require("mongoose");
mongoose.connect("mongod://localhost/blog");
module.exports = mongoose;
