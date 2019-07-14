const Sequelize = require("sequelize");
const bcrypt = require("bcrypt");
const db = require("../config/db");

module.exports = db.define(
  "user",
  {
    firstName: {
      type: Sequelize.STRING,
      allowNull: false
    },
    lastName: {
      type: Sequelize.STRING,
      allowNull: false
    },
    email: {
      type: Sequelize.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: {
          msg: "Email format is incorrect."
        }
      }
    },
    password: {
      type: Sequelize.STRING,
      allowNull: false,
      validate: {
        min: {
          args: 6,
          msg: "The password should be at least 6 characters long."
        }
      }
    },
    avatar: {
      type: Sequelize.BLOB
    }
  },
  {
    hooks: {
      afterValidate: user => {
        user.password = bcrypt.hashSync(user.password, 10);
      }
    }
  }
);
