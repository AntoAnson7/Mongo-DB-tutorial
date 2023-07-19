const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
const cors = require("cors");
const app = express();

const routes = require("./routes/taskroute");

const PORT = process.env.PORT | 5000;

app.use(express.json());
app.use(cors());
app.use("/api", routes);

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("connected"))
  .catch((err) => console.log(err));

app.get("/", (req, res) => {
  res.json({ status: true, msg: "started" });
});

app.listen(PORT, () => {
  console.log(`Server started at ${PORT}`);
});
