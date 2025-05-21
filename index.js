import express from "express";
import mongoose from "mongoose";
import router from "./routes/userRoute.js"

const app = express();
app.use(express.json());
app.use("/uploads", express.static("uploads"))

mongoose.connect("mongodb://localhost:27017/task7");

mongoose.connection.once("connected", ()=> console.log("database connected"));
mongoose.connection.on("error", ()=> console.log("database connection faile"));

app.use("/", router);

app.listen(2700);
