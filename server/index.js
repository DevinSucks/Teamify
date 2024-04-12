import express from "express"
import dotenv from "dotenv"
import mongoose from "mongoose"
import morgan from "morgan"
import cookieParser from "cookie-parser"
import {dbConnection} from "../server/utils/index.js"
import Userroutes from "./routes/user.routes.js"
import Taskroutes from "./routes/task.routes.js"
import cors from "cors"
dotenv.config()

dbConnection()

let PORT = process.env.PORT || 3001

const app = express()


app.use(express.json())
app.use(express.urlencoded())

app.use(cors())

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser())
app.use("/api/user", Userroutes);
app.use("/api/task", Taskroutes);


app.listen(PORT++,()=>{
    console.log("Listening at port",PORT-1)
})