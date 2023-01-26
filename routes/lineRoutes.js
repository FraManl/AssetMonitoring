const express = require("express");
const router = express.Router();
const lineController = require("../controllers/lineController");

router.route("/").get(lineController.getAllLines);

module.exports = router;
