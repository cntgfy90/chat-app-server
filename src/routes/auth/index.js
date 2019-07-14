const router = require("express").Router();

const signup = require("./signup");
const signin = require("./signin");
const logout = require("./logout");

router.post("/signup", signup);
router.post("/signin", signin);
router.post("/logout", logout);

module.exports = router;
