const { Post } = require("../models/index");

Post.remove({}).then(function() {
  Post.create({
    name: "Post Comment",
    description: " ",
    status: "You have completed posting your comment"
  });
});
