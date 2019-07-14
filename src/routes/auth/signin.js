const passport = require("passport");

module.exports = (req, res, next) => {
  passport.authenticate("local")(req, res, next);
};
