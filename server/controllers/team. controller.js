import { query } from "express";
import Task from "../models/task.model.js";
import User from "../models/user.model.js";
import Team from "../models/team.model.js";
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
    
      let { name, dateCreated, members} = req.body;
  
      let text = "You are a part of"+ name + " team";
      members = [...members, userId] 
  
      const team = await Team.create({
        name,
        dateCreated,
        members,
      });


      async function updateMembers(teamId) {
            try {
                // Assuming members is an array of user objects
                await Promise.all(members.map(async (member) => {
                    // Assuming updateUserProfile updates the user profile with the new team ID
                    await updateUserProfile({user:member,  team: teamId });
                    // Return the updated member object
                }));
                console.log("All members updated successfully");
            } catch (error) {
                console.error("Error updating members", error);
            }
        }

        const teamId = team._id.toString(); // Assuming team._id contains the ID
        updateMembers(teamId);
    
    // Call updateMembers function with the team ID
   

    //   await Notice.create({
    //     team,
    //     text,
    //     task: task._id,
    //   });
    //   create SMTP for task creation
  
      res
        .status(200)
        .json({ status: true, team, message: "Task created successfully." });
    } catch (error) {
      console.log(error);
      return res.status(400).json({ status: false, message: error.message });
    }
  };