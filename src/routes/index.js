const router = require("express").Router();

router.use(require("./auth/signup"));

module.exports = router;