import express from "express";
import {
  createTask,
  getTask,
  getTasks,
  postTaskActivity,
  dashboardStatistics,
  updateTask,
  deleteTask,
} from "../controllers/task.controller.js";
import  protectRoute  from "../middlewares/auth.middleware.js";

const router = express.Router();

router.post("/create", protectRoute, createTask);
router.post("/activity/:id", protectRoute, postTaskActivity);


router.get("/dashboard", protectRoute, dashboardStatistics);
router.get("/", protectRoute, getTasks);
router.get("/:id", protectRoute, getTask);



router.put("/update/:id", protectRoute, updateTask);


router.delete(
  "/delete-restore/:id?",
  protectRoute,
  deleteTask
);

export default router;
