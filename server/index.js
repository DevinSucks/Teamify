import express from "express"
import dotenv from "dotenv"
import mongoose from "mongoose"
import morgan from "morgan"
import connectToDatabase from "../server/utils/index.js"
import cors from "cors"
dotenv.config()

connectToDatabase()
