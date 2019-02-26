const { Item } = require("../models/index");

module.exports = {
  new: function(req, res) {
    res.render("item/new");
  },
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
  show: function(req, res) {
    Item.findById(req.params.id).then(item => {
      res.render("item/show", { item });
    });
  },
  edit: function(req, res) {
    Item.findById(req.params.id).then(item => {
      res.render("item/edit", { item });
    });
  },
  