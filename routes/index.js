const express = require("express");
const router = express.Router();
const { Post } = require("../models/index");
// const authenticatedUser = require("../utils/authenticatedUser");

router.get("/", (req, res) => {
  Post.find({}).then(posts => {
    res.render("index", {
      posts
      // success: req.flash("success")
    });
  });
});

// router.use(require("./new"));
// router.use("/post", authenticatedUser, require("./item.js"));

module.exports = router;

// {{!-- followed tips from WDI-28-To-Do Example --}}
