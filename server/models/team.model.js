import mongoose, { Schema } from "mongoose";

const teamSchema = new Schema({

    name:{type:String, required:true, unique:true},
    dateCreated: {type:Date, default:new Date()},
    members : [{type:Schema.Types.ObjectId, ref:"User"}],
    tasks : [{type:Schema.Types.ObjectId , ref:"task"}]

})

const Team = mongoose.model("Team", teamSchema)

export default Team
