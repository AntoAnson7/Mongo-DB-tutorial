const taskModel = require("../models/taskModel");

module.exports.getTasks = async (req, res) => {
  const tasks = await taskModel.find();
  res.send(tasks);
};

module.exports.postTasks = (req, res) => {
  const { task } = req.body;
  taskModel
    .create({ task })
    .then((data) => {
      console.log("saved");
      res.status(201).send(data);
    })
    .catch((err) => {
      console.log(err);
      res.status(400).send({ status: false, error: err });
    });
};

module.exports.updateTask = (req, res) => {
  const { id } = req.params;
  const { task } = req.body;

  taskModel
    .findByIdAndUpdate(id, { task })
    .then((data) => {
      console.log("updated");
      res.status(200).send(data);
    })
    .catch((err) => {
      console.log(err);
      res.status(400).send({ status: false, error: err });
    });
};

module.exports.deleteTask = (req, res) => {
  const { id } = req.params;
  taskModel
    .findByIdAndDelete(id)
    .then((data) => {
      console.log("deleted");
      res.status(200).send(data);
    })
    .catch((err) => {
      console.log(err);
      res.status(400).send({ status: false, error: err });
    });
};
