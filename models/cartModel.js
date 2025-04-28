
import mongoose from "mongoose"

const cartSchema = new mongoose.Schema({
    productId : {
        type : mongoose.Schema.Types.ObjectId,
        ref : 'Product',
        required : true
    },
    quantity : {
        type : Number,
        required : true
    },
    userId: { 
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'User' }
},{timestamps:true});

export default mongoose.model('Cart', cartSchema);