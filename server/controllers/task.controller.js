import { query } from "express";
import Task from "../models/task.model.js";
import User from "../models/user.model.js";
import mongoose from "mongoose";
import { updateUserProfile } from "./user.controller.js";
import { mailer } from "../utils/index.js";

const priorities = ["high","medium","normal","low"]
const coins = [100,75,50,25]


export const createTask = async (req, res) => {
  try {
      const { userId } = req.user;
      
      // Destructure req.body and provide default values
      let { title, team, stage, date, priority, assets, members } = req.body;
      let text = "New task has been assigned to you";
      if (team?.length > 1) {
          text = text + ` and ${team?.length - 1} others.`;
      }

      text =
          text +
          ` The task priority is set a ${priority} priority, so check and act accordingly. The task date is ${new Date(
              date
          ).toDateString()}. Thank you!!!`;

      const activity = {
          type: "assigned",
          activity: text,
          by: userId,
      };

      // Convert priority to lowercase if provided
      priority = priority ? priority.toLowerCase() : "normal";

      // Create the task
      const task = await Task.create({
          title,
          team,
          stage: stage ? stage.toLowerCase() : "todo",
          date,
          priority,
          coinsAlloted: coins[priorities.indexOf(priority)],
          assets,
          activities: activity,
          members
      });


      // Update user profiles
      await Promise.all(members.map(async (member) => {
          try {
              // Retrieve user profile
              const user = await User.findById(member);
              console.log(user);

              // Update user profile data for the task
              const updatedUser = await User.findByIdAndUpdate(member, {
                  $addToSet: { tasks: task._id }
              }, { new: true });

              console.log("User updated:", updatedUser);
              mailer(user.email,text)
          } catch (error) {
              console.error("Error updating user profile:", error);
          }
      }));

      res.status(200).json({ status: true, task, message: "Task created successfully." });
  } catch (error) {
      console.error("Error creating task:", error);
      return res.status(400).json({ status: false, message: error.message });
  }
};

  export const postTaskActivity = async (req, res) => {
    try {
      const { id } = req.params;
      const { userId } = req.user;
      const { type, activity } = req.body;
  
      const task = await Task.findById(id);
  
      const data = {
        type,
        activity,
        by: userId,
      };
  
      task.activities.push(data);
  
      await task.save();
  
      res
        .status(200)
        .json({ status: true, message: "Activity posted successfully." });
    } catch (error) {
      console.log(error);
      return res.status(400).json({ status: false, message: error.message });
    }
  };


  //this func is getTasks by stage
  export const getTasks = async (req, res) => {

  
    try {
      const { stage } = req.query;
      let queryResult = stage
        .populate({
          path: "team",
          select: "name title email",
        })
        .sort({ _id: -1 });
  
      const tasks = await queryResult;
  
      res.status(200).json({
        status: true,
        tasks,
      });
    } catch (error) {
      console.log(error);
      return res.status(400).json({ status: false, message: error.message });
    }
  };
  
  //dashobard statistics


  export const getTaskByUser = async (req, res) => {
    try {
        const { userId} = req.user;
        const { _id } = req.body;
        const id= userId !== _id ? _id : userId;
          const user = await User.findById(userId).populate('tasks');
          let tasks = user.tasks;
          res.status(200).json(tasks);
          console.log('Tasks belonging to the user:', tasks);
          console.log(user);
      } catch (error) {
          console.error(error);
          return res.status(400).json({ status: false, message: error.message });
      }
  };

  
  export const getPersonalTasks = async (req, res) => {
    try {
      const { userId } = req.user;
      const { _id } = req.query;
      const id = userId !== _id ? _id : userId;
  
      const user = await User.findById(userId).populate('tasks');
      const tasks = user.tasks;
  
      // Perform additional tasks manipulation before sending the response
      const filteredTasks = tasks.filter(task => {
        let members = Task.findById(task).members
        return members.length === 1 && members[0]===userId;
      });
  
      console.log('Tasks belonging to the user:', filteredTasks);
      console.log(user);
  
      res.status(200).json(filteredTasks);
    } catch (error) {
      console.error(error);
      return res.status(400).json({ status: false, message: error.message });
    }
  };

  //by id
  export const getTask = async (req, res) => {
    console.log(req.params);
    try {
        let { id } = req.params; // Declare id variable using let to allow reassignment
        const objectId = new mongoose.Types.ObjectId(id); // Convert id to ObjectId

        const task = await Task.findById(id)
            .populate({
                path: "team",
                select: "name title role email", // Include only these fields from the 'team' document
            })
            .populate({
                path: "activities.by",
                select: "name", // Include only the 'name' field from the referenced document
            });

        res.status(200).json({
            status: true,
            task,
        });
    } catch (error) {
        console.log(error);
        return res.status(400).json({ status: false, message: error.message });
    }
  }; //schema data type issue



  export const dashboardStatistics = async (req, res) => {
    try {
      const { userId, isAdmin } = req.user;
  
      const allTasks = isAdmin
        ? await Task.find({
            isTrashed: false,
          })
            .populate({
              path: "team",
              select: "name role title email",
            })
            .sort({ _id: -1 })
        : await Task.find({
            isTrashed: false,
            team: { $all: [userId] },
          })
            .populate({
              path: "team",
              select: "name role title email",
            })
            .sort({ _id: -1 });
  
      const users = await User.find({ isActive: true })
        .select("name title role isAdmin createdAt")
        .limit(10)
        .sort({ _id: -1 });
  
      //   group task by stage and calculate counts
      const groupTaskks = allTasks.reduce((result, task) => {
        const stage = task.stage;
  
        if (!result[stage]) {
          result[stage] = 1;
        } else {
          result[stage] += 1;
        }
  
        return result;
      }, {});
  
      // Group tasks by priority
      const groupData = Object.entries(
        allTasks.reduce((result, task) => {
          const { priority } = task;
  
          result[priority] = (result[priority] || 0) + 1;
          return result;
        }, {})
      ).map(([name, total]) => ({ name, total }));
  
      // calculate total tasks
      const totalTasks = allTasks?.length;
      const last10Task = allTasks?.slice(0, 10);
  
      const summary = {
        totalTasks,
        last10Task,
        users: isAdmin ? users : [],
        tasks: groupTaskks,
        graphData: groupData,
      };
  
      res.status(200).json({
        status: true,
        message: "Successfully",
        ...summary,
      });
    } catch (error) {
      console.log(error);
      return res.status(400).json({ status: false, message: error.message });
    }
  };

  
export const updateTask = async (req, res) => {
    try {
      const { id } = req.params;
      let { title, date, team, stage, priority, assets, members } = req.body;
  
      const task = await Task.findById(id);
      members = [...task.members,members]
      task.title = title;
      task.date = date;
      task.priority = priority.toLowerCase();
      task.assets = assets;
      task.stage = stage.toLowerCase();
      task.team = team;
      task.members = members
      await task.save();
  
      res
        .status(200)
        .json({ status: true, message: "Task duplicated successfully." });
    } catch (error) {
      console.log(error);
      return res.status(400).json({ status: false, message: error.message });
    }
  };

  export const deleteTask = async (req, res) => {
    try {
      const { id } = req.params;
      const { actionType } = req.query;
  
      if (actionType === "delete") {
        await Task.findByIdAndDelete(id);
      } else if (actionType === "deleteAll") {
        await Task.deleteMany({ isTrashed: true });
      }
      res.status(200).json({
        status: true,
        message: `Operation performed successfully.`,
      });
    } catch (error) {
      console.log(error);
      return res.status(400).json({ status: false, message: error.message });
    }
  };