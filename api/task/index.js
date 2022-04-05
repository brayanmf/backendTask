const { Router } = require("express");
const {
  getAllTask,
  createTask,
  updateTask,
  deleteTask,
} = require("./task.controller");
const router = Router();

router.get("/all", getAllTask);
router.post("/create", createTask);
router.put("/update/:id", updateTask).delete("/delete/:id", deleteTask);

module.exports = router;
