const express = require("express");
const router = express.Router();
const Post = require("../models/index");
const postController = require("../controller/post");

router.get("/", (req, res) => {
  Post.find({}).then(items => {
    res.render("index", {
      items
    });
  });
});

router.get("/new", postController.new);
router.post("/", postController.create);
