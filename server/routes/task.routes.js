import express from "express";
import {
  createTask,
  getTask,
  getTasks,
  postTaskActivity,
  dashboardStatistics,
  updateTask,
  deleteTask,
  getTaskByUser,
} from "../controllers/task.controller.js";
import  protectRoute  from "../middlewares/auth.middleware.js";

const router = express.Router();

router.post("/create", protectRoute, createTask);  //done
router.post("/activity/:id", protectRoute, postTaskActivity);


router.get("/dashboard", protectRoute, dashboardStatistics);
router.get("/all-tasks", protectRoute, getTaskByUser); //done
router.get("/:id", protectRoute, getTask);  



router.put("/update/:id", protectRoute, updateTask);


router.delete(
  "/delete/:id?",
  protectRoute,
  deleteTask
);

export default router;
