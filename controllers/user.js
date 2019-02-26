const passport = require("passport");
const { User } = require("../models/index");

module.exports = {
  getSignup: function(req, res) {
    res.render("user/signup", { error: req.flash("error") });
  },
  //   setting up signup for new users
  postSignup: function(req, res) {
    const { username, password } = req.body;
    User.register(new User({ username }), password)
      .then(user => {
        //   allowing new users to get a new account and indicate
        // to them the success of the new account creation
        const authenticate = passport.authenticate("local");
        authenticate(req, res, function() {
          req.flash("Congratulations", "You now have an account!");
          res.redirect("/");
        });
      })
      .catch(err => {
        req.flash("error", err.message);
        res.redirect("/signup");
      });
  },
  //   setting up login for returning users
  getLogin: function(req, res) {
    res.render("user/login", {
      error: req.flash("error"),
      info: req.flash("info")
    });
  },
  postLogin: function(req, res, next) {
    const authenticate = passport.authenticate("local", function(
      err,
      user,
      info
    ) {
      //  if a new user logs in without having signed up, an error message is generated
      if (err || !user) {
        req.flash("error", info.message);
        res.redirect("/login");
      }

      //  if a returning user logs in without the correct credentials, they are returned to login
      req.logIn(user, function(err) {
        if (err) {
          req.flash("error", err.message);
          return res.redirect("/login");
        }
        //  allow a successful login
        req.flash("Your login has been successful", "You are logged in");
        return res.redirect("/");
      });
    });

    authenticate(req, res, next);
  },

  getlogout: function(req, res) {
    req.logout();
    res.redirect("/");
  }
};
