const passport = require("passport");
const { User } = require("../models/index");

module.exports = {
  getSignup: function(req, res) {
    res.render("user/signup", { error: req.flash("error") });
  },
  