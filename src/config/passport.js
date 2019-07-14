const LocalStrategy = require("passport-local").Strategy;
const bcrypt = require("bcrypt");
const User = require("../models/User");

module.exports = passport => {
  passport.use(
    new LocalStrategy({ username: "email" }, (username, password, done) => {
      User.findOne({ where: { email: username } })
        .then(user => {
          if (!user) {
            return done(null, false, { message: "Email is not registered" });
          }
          return bcrypt.compare(password, user.password, (err, didMatch) => {
            if (err) {
              throw err;
            }

            if (didMatch) {
              return done(null, user);
            }
            return done(null, false, { message: "Password is incorrect" });
          });
        })
        .catch(err => done(err));
    })
  );

  passport.serializeUser((user, done) => {
    done(null, user.id);
  });

  passport.deserializeUser((id, done) => {
    User.findByPk(id)
      .then(user => {
        done(null, user.id);
      })
      .catch(err => {
        done(err);
      });
  });
};
