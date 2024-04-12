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
router.post("/create-team", protectRoute, createTeam); //done

router.get("/get-user",protectRoute,getUsers) //done
router.get("/get-team", protectRoute, getTeamList); //done

router.put("/profile", protectRoute, updateUserProfile);  //done 
router.put("/change-password", protectRoute, changeUserPassword); //done

export default router;