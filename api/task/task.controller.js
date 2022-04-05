const Task = require("./task.model");

exports.getAllTask = async (req, res) => {
  try {
    const task = await Task.find();
    res.status(200).json(task);
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
};
exports.createTask = async (req, res) => {
  const task1 = {
    title: req.body.title,
  };
  try {
    const newTask = await Task.create(task1);
    res.status(201).json({ newTask });
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
};
exports.updateTask = async (req, res) => {
  try {
    const editTask = await Task.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.status(200).json({ editTask });
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
};
exports.deleteTask = async (req, res) => {
  try {
    const deleteTask = await Task.findByIdAndDelete(req.params.id);
    res.status(200).json({ deleteTask });
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
};
