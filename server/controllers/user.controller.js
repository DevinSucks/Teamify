
import Team from "../models/team.model.js";
import User from "../models/user.model.js";
import { createJWT } from "../utils/index.js";
import { mailer } from "../utils/index.js";


export const registerUser = async (req, res) => {
    try {
      const { name, email, password, organisation, position} = req.body;
  
      const userExist = await User.findOne({ email });
  
      if (userExist) {
        return res.status(400).json({
          status: false,
          message: "User already exists",
        });
      }
  
      const user = await User.create({
        name,
        email,
        password,
        organisation,
        position
      });
  
      if (user) {
        createJWT(res, user._id) 
        user.password = undefined;
        console.log("User registered successfully")
        res.status(201).json(user);
      } else {
        return res
          .status(400)
          .json({ status: false, message: "Invalid user data" });
      }
    } catch (error) {
      console.log(error);
      return res.status(400).json({ status: false, message: error.message });
    }
  };

  export const loginUser = async (req, res,next) => {
    try {
      const { email, password } = req.body;
      console.log(email)
  
      const user = await User.findOne({ email });
  
      if (!user) {
        return res
          .status(401)
          .json({ status: false, message: "Invalid email or password." });
      }
  
      const isMatch = await user.matchPassword(password);
  
      if (user && isMatch) {
        console.log("User logged in successfully")
        const text = "You have been logged in to teamify"
        await mailer(email,text)
        createJWT(res, user._id);
        user.password = undefined;
        res.status(200).json(user);

        next()
      } else {
        return res
          .status(401)
          .json({ status: false, message: "Invalid email or password" });
      }
    } catch (error) {
      console.log(error);
      return res.status(400).json({ status: false, message: error.message });
    }

  };
  
  export const logoutUser = async (req, res) => {
    try {
      res.cookie("token", "", {
        htttpOnly: true,
        expires: new Date(0),
      });
      res.status(200).json({ message: "Logout successful" });
    } catch (error) {
      console.log(error);
      return res.status(400).json({ status: false, message: error.message });
    }
  };

  export const getTeamList = async (req, res) => {
    try {
        const { userId} = req.user;
        const { _id } = req.body;
        const id= userId !== _id ? _id : userId;
          const user = await User.findById(userId).populate('teams');
          let teams = user.teams;
          res.status(200).json(teams);
          console.log('Teams belonging to the user:', teams);
          console.log(user);
      } catch (error) {
          console.error(error);
          return res.status(400).json({ status: false, message: error.message });
      }
  };
  
  
  export const updateUserProfile = async (req, res) => {
    try {
        let Id= ""
        if(req.user) { 
          let { userId } = req.user
          Id=userId}
        else { 
          let { userId } = req.body.id
          Id=userId}
        console.log(Id);

        const user = await User.findById(Id);

        if (user) {
            user.name = req.body.name || user.name;
            user.title = req.body.title || user.title;
            user.role = req.body.role || user.role;
            
            // Check if user has teams property defined and not empty
            if (!user.teams || user.teams.length === 0) {
                user.teams = req.body.team;
            } else {
                // Append new team to existing teams
                user.teams.push(req.body.team);
            }

            const updatedUser = await user.save();

            user.password = undefined;

            return res.status(201).json({
                status: true,
                message: "Profile Updated Successfully.",
                user: updatedUser,
            });
        } else {
            return res.status(404).json({ status: false, message: "User not found" });
        }
    } catch (error) {
        console.error(error); // Use console.error for logging errors
        return res.status(400).json({ status: false, message: error.message });
    }
  };
  
  export const changeUserPassword = async (req, res) => {
    try {
      const { userId } = req.user;
  
      const user = await User.findById(userId);
      if (user) {
        user.password = req.body.password;
  
        await user.save();
  
        user.password = undefined;
  
        res.status(201).json({
          status: true,
          message: `Password chnaged successfully.`,
        });
      } else {
        res.status(404).json({ status: false, message: "User not found" });
      }
    } catch (error) {
      console.log(error);
      return res.status(400).json({ status: false, message: error.message });
    }
  };
  
  
