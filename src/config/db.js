const Sequelize = require("sequelize");

const { DB_NAME, DB_USER, DB_PASS, DB_HOST } = process.env;
const db = new Sequelize(DB_NAME, DB_USER, DB_PASS, {
	host: DB_HOST,
	dialect: "mysql",
	pool: {
		max: 5,
		min: 0,
		idle: 10000,
		acquire: 30000,
	},
});

module.exports = db;
