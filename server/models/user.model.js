import bcrypt from "bcryptjs";
import mongoose, { Schema } from "mongoose";


const userSchema = new Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    organisation: { type: String, required: false },
    role: { type: String, required: false },
    coins: { type: Number, default: 0 },
    streak: { type: Number, default: 1 },
    tasks: [{ type: Schema.Types.ObjectId, ref: "Task" }],
    teams:[{type:Schema.Types.ObjectId, ref: "Team"}]
  },
  { timestamps: true }
);

userSchema.pre("save", async function (next) {
    if (!this.isModified("password")) {
      next();
    }
  
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
});
  
userSchema.methods.matchPassword = async function (enteredPassword) {
    return await bcrypt.compare(enteredPassword, this.password);
};


const User = mongoose.model("User", userSchema);


export default User;
