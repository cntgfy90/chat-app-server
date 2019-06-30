const express = require("express");
const passport = require("passport");
const session = require("express-session");
const bodyParser = require("body-parser");
const db = require("./config/db");

const env = require("dotenv").config();

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(session({
	secret: "Tamir",
	resave: true,
	saveUninitialized: true,
}));
app.use(passport.initialize());
app.use(passport.session());

app.use("/", require("./routes"));

app.listen(5000, () => console.log("Server is up on port 5000"));