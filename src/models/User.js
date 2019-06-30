const Sequelize = require("sequelize");
const db = require("../config/db");

const User = db.define("user", {
	firstName: {
		type: Sequelize.STRING,
		allowNull: false,
		field: "f_name",
	},
	lastName: {
		type: Sequelize.STRING,
		allowNull: false,
		field: "l_name",
	},
	email: {
		type: Sequelize.STRING,
		allowNull: false,
		unique: true,
	},
	password: {
		type: Sequelize.STRING,
		allowNull: false,
	},
	avatar: {
		type: Sequelize.BLOB,
	},
});

module.exports = User;