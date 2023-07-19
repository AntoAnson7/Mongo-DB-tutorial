const express = require("express");
const router = express.Router();

const {
  getTasks,
  postTasks,
  updateTask,
  deleteTask,
} = require("../controllers/taskController");

router.get("/get", getTasks);
router.post("/post", postTasks);
router.put("/update/:id", updateTask);
router.delete("/delete/:id", deleteTask);

module.exports = router;
