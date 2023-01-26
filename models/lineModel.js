const mongoose = require("mongoose");

const lineSchema = new mongoose.Schema({
  code: {
    type: String,
    unique: true,
    required: [true, "Line must have a company code"],
  },
  isin: {
    type: String,
    unique: true,
    ref: "User",
    required: [true, "Line must have a code isin"],
  },
  company: {
    type: String,
    unique: true,
    required: [true, "Line must have a company name"],
  },
  volume: {
    type: Number,
  },
  unitPrice: {
    type: Number,
  },
  fees: {
    type: Number,
  },
  tax: {
    type: Number,
  },
  valoT0: {
    type: Number,
  },
  valoToDate: {
    type: Number,
  },
  lastUpdate: Date,
  createdAt: {
    type: Date,
    default: Date.now(),
    select: false,
  },
  transactionOrders: [
    { type: mongoose.Schema.ObjectId, ref: "TransactionOrder" },
  ],
});

// lineSchema.pre(/^find/, function (next) {
//   this.populate("transactions").populate({
//     path: "",
//     select: "",
//   });
//   next();
// });

const LineAsset = mongoose.model("LineAsset", lineSchema);
module.exports = LineAsset;
