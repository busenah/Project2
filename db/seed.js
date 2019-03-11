const { Post } = require("../models/index");

Post.remove({}).then(function() {
  Post.create({
    name: "Post Comment",
    description: " ",
    status: "Posted Successfully", "Not Posted Successfully"
  });
});
