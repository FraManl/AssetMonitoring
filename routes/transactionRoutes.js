const express = require("express");
const router = express.Router();
const transactionController = require("../controllers/transactionController");

router
  .route("/")
  .get(transactionController.getAllTransactions)
  .post(transactionController.createTransaction);

router
  .route("/:id")
  .get(transactionController.getTransaction)
  .patch(transactionController.updateTransaction)
  .delete(transactionController.deleteTransaction);

module.exports = router;
