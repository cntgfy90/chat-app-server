const User = require("../../models/User");

module.exports = (req, res) => {
  const { email, password, confirmPassword } = req.body;

  if (password === confirmPassword) {
    User.findOne({ where: { email } }).then(user => {
      if (!user) {
        User.create(req.body, [
          "firstName",
          "lastName",
          "email",
          "password"
        ]).then(createdUser => {
          res.send(createdUser);
        });
      }
    });
  } else {
    res.send({ msg: "Passwords do not match." });
  }
};
