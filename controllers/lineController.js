const fs = require("fs");
const factory = require("./handlerFactory");
const Line = require("../models/lineModel");
const catchAsync = require("../utils/catchAsync");
const AppError = require("../utils/appError");

exports.getAllLines = factory.getAll(Line);
