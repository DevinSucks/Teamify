import express from "express";
import {
  loginUser,
  logoutUser,
  registerUser,
  updateUserProfile,
  changeUserPassword,
  getTeamList,
} from "../controllers/user.controller.js";

import { createTeam, getUsers } from "../controllers/team. controller.js";
import  protectRoute from "../middlewares/auth.middleware.js";

const router = express.Router();

router.get("/",(req,res)=>{res.send("hello")})
router.post("/register", registerUser);
router.post("/login", loginUser);
router.post("/logout", logoutUser);

router.get("/get-user",protectRoute,getUsers)
router.get("/get-team", protectRoute, getTeamList);
router.post("/create-team", protectRoute, createTeam);

router.put("/profile", protectRoute, updateUserProfile);
//router.put("/read-noti", protectRoute, markNotificationRead);
router.put("/change-password", protectRoute, changeUserPassword);

export default router;