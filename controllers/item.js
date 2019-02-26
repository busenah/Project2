const { Item } = require("../models/index");

module.exports = {
  new: function(req, res) {
    res.render("item/new");
  },
  //   allows users to create new photos
  create: function(req, res) {
    const { name, description, priority, status } = req.body;
    Item.create({
      name,
      description,
      priority,
      status
    }).then(item => {
      res.redirect(`/item/${item._id}`);
    });
  },

  //   allows users to show photos

  show: function(req, res) {
    Item.findById(req.params.id).then(item => {
      res.render("item/show", { item });
    });
  },

  //   allows users to edit their photo albums

  edit: function(req, res) {
    Item.findById(req.params.id).then(item => {
      res.render("item/edit", { item });
    });
  },

  //   allows users to update their photo inventories

  update: function(req, res) {
    console.log(req.body);
    const { name, description, status, priority } = req.body;

    Item.findOneAndUpdate(
      req.params.id,
      {
        name,
        description,
        status,
        priority
      },
      {
        runValidators: true
      }
    )
      .then(item => {
        res.redirect(`/item/${item._id}`);
      })
      .catch(err => {
        console.log(err);
      });
  },

  //   allows users to delete their photos

  delete: function(req, res) {
    Item.remove({ _id: req.params.id }).then(item => {
      console.log(item);
      res.redirect("/");
    });
  }
};
