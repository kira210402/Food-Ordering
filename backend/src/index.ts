import express, { Request, Response } from "express";
import cors from "cors";
import "dotenv/config";
import mongoose from "mongoose";
import myUserRoutes from "./routes/MyUserRoute"

mongoose
  .connect(process.env.MONGODB_URI as string)
  .then(() => console.log("Connected to database!"));

const app = express();
app.use(express.json());
app.use(cors());

app.use("/api/my/user", myUserRoutes);

app.listen(8000, () => console.log("Server running on localhost:8000"));