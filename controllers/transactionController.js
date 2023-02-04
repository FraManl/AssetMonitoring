const fs = require("fs");
const factory = require("./handlerFactory");
const Transaction = require("../models/transactionModel");
const catchAsync = require("../utils/catchAsync");
const AppError = require("../utils/appError");

exports.getAllTransactions = factory.getAll(Transaction);
exports.createTransaction = factory.createOne(Transaction);

exports.getTransaction = factory.getOne(Transaction);
exports.deleteTransaction = factory.deleteOne(Transaction);
exports.updateTransaction = factory.updateOne(Transaction);
