const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ItemSchema = new Schema({
  name: String,
  description: String,
  status: {
    type: String,
    enum: ["Posted Successfully", "Not Posted Successfully"]
  },
  priority: {
    type: Number,
    min: 0,
    max: 10
  }
});

module.exports = ItemSchema;

