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
router.post("/register", registerUser); //done
router.post("/login", loginUser); //done
router.post("/logout", logoutUser); //done
router.post("/create-team", protectRoute, createTeam);

router.get("/get-user",protectRoute,getUsers) //done
router.get("/get-team", protectRoute, getTeamList);

router.put("/profile", protectRoute, updateUserProfile);  //done via updatesection //remainng:add to team
router.put("/change-password", protectRoute, changeUserPassword);

export default router;