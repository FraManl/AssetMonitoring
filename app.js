const path = require("path");
const express = require("express");
const morgan = require("morgan");
const rateLimit = require("express-rate-limit");
const mongoSanitize = require("express-mongo-sanitize");
const xss = require("xss-clean");
const cookieParser = require("cookie-parser");
const compression = require("compression");

const app = express();

app.use(express.static(path.join(__dirname, "public"))); // serve all static files from this folder

// REST API mounting
const lineRouter = require("./routes/lineRoutes");
const transactionRouter = require("./routes/transactionRoutes");

// development log-in
if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

// set security parameters
const limiter = rateLimit({
  max: 100,
  windowMs: 60 * 60 * 1000, // 1 hour in milliseconds
  message: "Too many requests from this up, please try again",
});

app.use("/api", limiter); // apply limiter middleware to all routes
app.use(express.json({ limit: "10kb" }));
app.use(express.urlencoded({ extended: true, limit: "10kb" }));
app.use(cookieParser());
app.use(mongoSanitize());
app.use(xss());

// Mounting middleware routers (functions) on url paths
// app.use("/api/v1/tours", tourRouter);
app.use("/api/v1/lines", lineRouter);
app.use("/api/v1/transactions", transactionRouter);

app.use(compression()); // compress text for application lightness

module.exports = app;
