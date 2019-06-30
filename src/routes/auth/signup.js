const router = require("express").Router();
const emailValidator = require("email-validator");
const User = require("../../models/User");

router.post("/signup", (req, res) => {
	const { firstName, lastName, email, password, confirmPassword } = req.body;
	const errors = [];

	if (!firstName || !lastName || !email || !password || !confirmPassword) {
		errors.push({ msg: "Some fields are empty." });
	}

	if (!emailValidator.validate(email)) {
		errors.push({ msg: "Provided email's format is not correct." });
	}

	if (password !== confirmPassword) {
		errors.push({ msg: "Passwords do not match." });
	}

	if (password.length > 6) {
		errors.push({ msg: "Password must be at least 6 characters length." });
	}

	if (errors.length) {
		res.send(errors);
	} else {
		User.findOrCreate({ where: { email } })
			.then(user => {
				res.send(`Email ${user.email} is already taken.`);
			});
	}

});

module.exports = router;