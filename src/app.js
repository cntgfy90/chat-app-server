const express = require("express");
const passport = require("passport");
const session = require("express-session");
const bodyParser = require("body-parser");

// Db takes adavantage of env vars
require("dotenv").config();
require("./config/db");
// Passport config
require("./config/passport")(passport);

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(
  session({
    secret: "Tamir",
    resave: true,
    saveUninitialized: true
  })
);
app.use(passport.initialize());
app.use(passport.session());

app.use("/", require("./routes"));

app.listen(5000);
