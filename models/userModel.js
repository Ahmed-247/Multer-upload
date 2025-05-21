import mongoose from "mongoose";

const schema = mongoose.Schema({
    filename:String,
    path:String
    
})

const userModel = mongoose.model("task7", schema);

export default userModel;