const express = require("express");
const helmet = require("helmet");
const cors = require("cors");
const morgan = require("morgan");
const db = require("./db/db");
require("dotenv").config();

const app = express();
const port = process.env.PORT;
db();

// initial middleware
app.use(express.json({ extended: false }));
app.use(helmet());
app.use(morgan("tiny"));
app.use(
  cors({
    origin: process.env.CORS_ORIGIN
  })
);

app.use("/api/v1/user", require("./routes/apis/userRoute"));

// error handler
app.use((req, res, next) => {
  const error = new Error(`Page not found! - ${req.originalUrl}`);
  res.status(404);
  next(error);
});


app.listen(port, () => console.log(`the server is running on port ${port}`));
