import mongoose, { Schema } from "mongoose";

const taskSchema = new Schema(
  {
    title: { type: String, required: true },
    date: { type: Date, default: new Date() },
    priority: {
      type: String,
      default: "normal",
      enum: ["high", "medium", "normal", "low"],
    },
    coinsAlloted: {
        type:Number,
        default:50,
        enum:[100,75,50,25]
    },
    stage: {
      type: String,
      default: "todo",
      enum: ["todo", "in progress", "completed"],
    },
    activities: [
      {
        type: {
          type: String,
          default: "assigned",
          enum: [
            "assigned",
            "started",
            "in progress",
            "bug",
            "completed",
            "commented",
          ],
        },
        activity: String,
        date: { type: Date, default: new Date() },
        by: { type: Schema.Types.ObjectId, ref: "User" },
      },
    ],
    assets: [String],
    team: {type:Schema.Types.ObjectId , ref:"Team"},
    members:  [{ type: Schema.Types.ObjectId, ref: "User" }]
  },
  { timestamps: true }
);

const Task = mongoose.model("Task", taskSchema);

export default Task;