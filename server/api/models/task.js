const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema({
  title: { type: String, required: [true, "Your task must have a title"] },
  description: { type: String, default: "No Description for this task" },
  time: { type: String, required: [true, "Your task must have a title"] },
  reminder: { type: Boolean, default: false },
});

const Task = mongoose.model("Task", taskSchema);
module.exports = Task;
