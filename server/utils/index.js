import mongoose from "mongoose";

const connectToDatabase = async () => {
   
    try {
        await mongoose.connect(process.env.MONGO);
        console.log("Connected to the database");
    } catch (error) {
        console.log(process.env.MONGO)
        console.error("Error connecting to the database:", error);
    }
};

export default connectToDatabase;
