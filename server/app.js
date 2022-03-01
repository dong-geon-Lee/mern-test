const express = require("express");
const dotenv = require("dotenv").config();
const cors = require("cors");
const { errorHandler } = require("./middleware/errorMiddleware");
const { connectedDB } = require("./config/db");

const port = process.env.PORT;
const app = express();

connectedDB();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api/goals", require("./routes/goalRoutes"));
app.use(errorHandler);

app.listen(port, () =>
  console.log(`Server Running... http://localhost:${port}`)
);
