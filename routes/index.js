const express = require("express");
const router = express.Router();
const { Post } = require("../models/index");
const postController = require("../controllers/item");

router.get("/", (req, res) => {
  console.log(Post);
  Post.find({}).then(items => {
    res.render("index", {
      items
    });
  });
});

router.get("/new", postController.new);
router.post("/", postController.create);

module.exports = router;

// {{!-- followed tips from WDI-28-To-Do Example --}}
