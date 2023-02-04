const express = require("express");
const router = express.Router();
const lineController = require("../controllers/lineController");

router
  .route("/")
  .get(lineController.getAllLines)
  .post(lineController.createLine);

router
  .route("/:id")
  .get(lineController.getLine)
  .patch(lineController.updateLine)
  .delete(lineController.deleteLine);

module.exports = router;
