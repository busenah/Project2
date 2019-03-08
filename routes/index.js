const express = require("express");
const router = express.Router();
const mongoose = require("../models/user");
const User = mongoose.model("user");

router.get("/", (req, res) => {
  res.render("user/index");
});

router.post("/user/", (req, res) => {
  User.create({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email
  }).then(newUser => {
    res.render("index");
  });
});

router.get("/user/", (req, res) => {
  res.render("user/userform");
});
// // const authenticatedUser = require("../utils/authenticatedUser");

// router.get("/", (req, res) => {
//   Post.find({}).then(posts => {
//     res.render("index", {
//       posts
//       // success: req.flash("success")
//     });
//   });
// });

// // router.use(require("./new"));
// // router.use("/post", authenticatedUser, require("./item.js"));

module.exports = router;

// {{!-- followed tips from WDI-28-To-Do Example --}}
