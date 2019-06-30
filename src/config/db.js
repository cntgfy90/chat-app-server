const Sequelize = require("sequelize");

const db = new Sequelize("chat_app", "root", "kozak210699", {
	host: "localhost",
	dialect: "mysql",
	pool: {
		max: 5,
		min: 0,
		idle: 10000,
		acquire: 30000,
	},
});

module.exports = db;
