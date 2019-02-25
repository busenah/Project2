const mongoose = require("../db/connection");

module.exports = {
  Item: mongoose.model("Item", require("./item")),
  User: mongoose.model("User1", require("./user1")),
  User: mongoose.model("User2", require("./user2"))
};
