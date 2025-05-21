import express from "express";
import mongoose from "mongoose";
import multer from "multer";
import userModel from "../models/userModel.js"
import upload from "../middleware/multermiddleware.js";



const router = express.Router();



router.post("/upload", upload.single("file"), async(req, res) =>{
    // console.log(file)
    console.log(req.file)
   // res.send("file uploaded")
    res.json(await userModel.create(req.file))

})

router.get("/upload", async (req, res) =>{
    res.json(await userModel.find())
})

export default router;