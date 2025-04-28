
import mongoose from "mongoose"

// products schema
const productSchema = new mongoose.Schema({
     title:{
        type : String,
        required : true
     },
     price : {
        type : Number,
        required : true
     },
     description : String,
     stock : {
        type : Number,
        required : true
     }
},{timestamps:true});

export const Product = mongoose.model("products",productSchema);