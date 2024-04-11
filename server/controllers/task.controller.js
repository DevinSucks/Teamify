import { query } from "express";
import Task from "../models/task.model.js";
import User from "../models/user.model.js";

const priorities = ["high","medium","normal","low"]
const coins = [100,75,50,25]
export const createTask = async (req, res) => {
    try {
      const { userId } = req.user;
  
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

      priority = priority?priority.toLowerCase():"normal"
  
      const task = await Task.create({
        title,
        team,
        stage: stage?stage.toLowerCase():"todo",
        date,
        priority: priority,
        coinsAlloted: coins[priorities.indexOf(priority)],
        assets,
        activities: activity,
        members
      });
  
    //   await Notice.create({
    //     team,
    //     text,
    //     task: task._id,
    //   });
    //   create SMTP for task creation
  
      res
        .status(200)
        .json({ status: true, task, message: "Task created successfully." });
    } catch (error) {
      console.log(error);
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

  export const getTasks = async (req, res) => {
    console.log(req.params)
  
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

  export const getTask = async (req, res) => {
    try {
      const { id } = req.params;

      if(stage) query.stage = stage
  
      const task = await Task.findById(id)
        .populate({
          path: "team",
          select: "name title role email",
        })
        .populate({
          path: "activities.by",
          select: "name",
        });
  
      res.status(200).json({
        status: true,
        task,
      });
    } catch (error) {
      console.log(error);
      return res.status(400).json({ status: false, message: error.message });
    }
  };

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
      const { title, date, team, stage, priority, assets } = req.body;
  
      const task = await Task.findById(id);
  
      task.title = title;
      task.date = date;
      task.priority = priority.toLowerCase();
      task.assets = assets;
      task.stage = stage.toLowerCase();
      task.team = team;
  
      await task.save();
  
      res
        .status(200)
        .json({ status: true, message: "Task duplicated successfully." });
    } catch (error) {
      console.log(error);
      return res.status(400).json({ status: false, message: error.message });
    }
  };

  export const deleteRestoreTask = async (req, res) => {
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