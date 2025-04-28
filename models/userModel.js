
import mongoose from "mongoose";

// Creating user schema
const userSchema = mongoose.Schema({
    email:{
        type : String,
        required : true
    },
    password:{
        type : String,
        required : true
    }
},{timestamps:true});

export default mongoose.model('User', userSchema);