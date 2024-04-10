import mongoose from "mongoose";

const { Schema } = mongoose;

const userSchema = new Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    organisation: { type: String, required: false },
    role: { type: String, required: true },
    coins: { type: Number, default: 0 },
    streak: { type: Number, default: 1 },
    tasks: [{ type: Schema.Types.ObjectId, ref: "Task" }],
  },
  { timestamps: true }
);

const User = mongoose.model("User", userSchema);

// const user1 = {
//   name: "harsh",
//   email: "harsh@gmail.com", // Corrected email address
//   password: "wcew",
//   organisation: "co",
//   role: "developer",
// };

// // Using async/await
// (async () => {
//   try {
//     await User.create(user1);
//     console.log("User created successfully");
//   } catch (error) {
//     console.error("Error creating user:", error);
//   }
// })();

export default User;
