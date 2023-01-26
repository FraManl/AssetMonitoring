const fs = require("fs");

const mongoose = require("mongoose");
const dotenv = require("dotenv");

const Line = require("../models/lineModel");
const Order = require("../models/transactionModel");

dotenv.config({ path: "./config.env" });

console.log(process.env);
const DB = process.env.DATABASE.replace(
  "<PASSWORD>",
  process.env.DATABASE_PASSWORD
);

mongoose
  .connect(DB, {
    useNewUrlParser: true,
    // useCreateIndex: true,
    // useFindAndModify: true,
  })
  .then(() => console.log("DB Connection successful"));

const transactions = JSON.parse(
  fs.readFileSync(`${__dirname}/transactionOrders.json`, "utf-8")
);
const lines = JSON.parse(
  fs.readFileSync(`${__dirname}/lineAsset.json`, "utf-8")
);

const importData = async () => {
  try {
    await Line.create(lines, { validateBeforeSave: false });
    await Order.create(transactions);

    console.log("Data successfully loaded");
    process.exit();
  } catch (err) {
    console.log(err);
  }
};

// delete data from DB
const deleteData = async () => {
  try {
    await Line.deleteMany();
    await Order.deleteMany();

    console.log("Data successfully deleted");
    process.exit();
  } catch (err) {
    console.log(err);
  }
};

if (process.argv[2] === "--import") {
  importData();
} else if (process.argv[2] === "--delete") {
  deleteData();
}
