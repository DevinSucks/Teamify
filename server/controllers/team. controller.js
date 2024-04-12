import { query } from "express";
import Task from "../models/task.model.js";
import User from "../models/user.model.js";
import Team from "../models/team.model.js";
import { mailer } from "../utils/index.js";
import { updateUserProfile } from "./user.controller.js";

export const getUsers = async (req, res) => {
    try {
   
        const allUsers = await User.find();

       
        res.send(allUsers);
    } catch (error) {
        // Handle any errors that occur during the query execution
        console.log(error);
        return res.status(400).json({ status: false, message: error.message });
    }
};

export const createTeam = async (req, res) => {
  try {
      const { userId } = req.user;
     
      // Destructure req.body and provide default values
      let { name, date, members } = req.body;
      let text = `You have been added to ${name} team`;
      if (members?.length > 1) {
          text = text + ` with ${members?.length - 1} others.`;
      }

      // Create the team
      const team = await Team.create({
          name,
          date,
          members
      });

      // Update user profiles
      await Promise.all(members.map(async (member) => {
          try {
              // Retrieve user profile
              const user = await User.findById(member);
            

              // Update user profile data for the team
              const updatedTeam = await User.findByIdAndUpdate(member, {
                  $addToSet: { teams: team._id }
              }, { new: true });

              // mailer(member,text)

              console.log("Team updated:", updatedTeam);
              mailer(user.email,text)



          } catch (error) {
              console.error("Error updating user profile:", error);
          }
      }));

      res.status(200).json({ status: true, team, message: "team created successfully." });
  } catch (error) {
      console.error("Error creating team:", error);
      return res.status(400).json({ status: false, message: error.message });
  }
};

