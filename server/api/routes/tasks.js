const express = require("express");
const router = express.Router();

const Task = require("../models/task.js");

router.get("/", async (req, res) => {
  try {
    const tasks = await Task.find({})
      .select("title description time reminder")
      .exec();
    res.status(200).json(tasks);
  } catch (error) {
    res.status(400).json(error);
  }
});
router.delete("/:id", async (req, res) => {
  try {
    const data = await Task.findByIdAndDelete(req.params.id).exec();
    const tasks = await Task.find({})
      .select("title description time reminder")
      .exec();
    res.status(200).json(tasks);
  } catch (error) {
    console.log(error);
    res.status(400).json(error);
  }
});
router.post("/", async (req, res) => {
  const newTask = new Task({
    ...req.body,
  });
  try {
    await newTask.save();
    const tasks = await Task.find({})
      .select("title description time reminder")
      .exec();
    res.status(200).json(tasks);
    // console.log(tasks);
  } catch (error) {
    res.status(400).json(error);
  }
});

router.patch("/:id", async (req, res) => {
  try {
    await Task.findByIdAndUpdate(req.params.id, {
      $set: {
        ...req.body,
      },
    }).exec();
    const tasks = await Task.find({})
      .select("title description time reminder")
      .exec();
    res.status(200).json(tasks);
  } catch (error) {
    res.status(400).json(error);
  }
});
module.exports = router;
