const mongoose = require("mongoose");

const transactionSchema = new mongoose.Schema({
  type: {
    type: String,
    required: [true, "Transaction must have a type"],
  },
  date: {
    type: Date,
    required: [true, "Transactrion must have a date"],
  },
  volume: {
    type: Number,
    required: [true, "Transaction must have a number"],
  },
  price: {
    type: Number,
    required: [true, "Transaction must have a price"],
  },
  fee: {
    type: Number,
  },
  rawInvest: {
    type: Number,
  },
  netInvestexclT: {
    type: Number,
  },
  taxFee: {
    type: Number,
  },
  netInvest: {
    type: Number,
  },
  createdAt: {
    type: Date,
    default: Date.now(),
    select: false,
  },
});

// lineSchema.pre(/^find/, function (next) {
//   this.populate("transactions").populate({
//     path: "",
//     select: "",
//   });
//   next();
// });

const TransactionOrder = mongoose.model("TransactionOrder", transactionSchema);
module.exports = TransactionOrder;
