const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const path = require("path");

const app = express();

const tasksRoute = require("./api/routes/tasks.js");
app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

app.use("/tasks", tasksRoute);
async function start() {
  try {
    const data = await mongoose.connect("mongodb://localhost:27017/task_db");
    data && console.log("Successfully connected to the database");
    app.listen(5000, () => {
      console.log("Started server");
    });
  } catch (error) {
    if (error) console.log(error);
  }
}
start();

app.get("/", (req, res) => {
  console.log("Home route");
  res.sendFile(path.join(__dirname, "/public/index.html"));
  res.statusCode = 200;
  res.statusMessage = "Welcome to this api";
});
