const mongoose = require("mongoose");
require("dotenv").config();

const url = process.env.DATABASE_URL;

const db = () => {
  mongoose.connect(url, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false
  });
};

module.exports = db;
