import express from "express"
import dotenv from "dotenv"
import mongoose from "mongoose"
import morgan from "morgan"
import connectToDatabase from "../server/utils/index.js"
import userRoutes from "./routes/user.routes.js"
import cors from "cors"
dotenv.config()


connectToDatabase()

const PORT = process.env.PORT || 3000

const app = express()

app.use(express.json())
app.use(express.urlencoded())

app.use(cors({
    origin:["http://localhost:3000","http://localhost:3001"],
    methods:["GET","PUT","POST","PATCH","DELETE"],
    credentials:true
}))

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/api/user", userRoutes);


app.listen(PORT,()=>{
    console.log("Listening at port",PORT)
})

