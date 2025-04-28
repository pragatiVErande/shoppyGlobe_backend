import express from 'express';
import mongoose from 'mongoose';
import {productRoutes} from './routes/productRoutes.js';
import {cartRoutes} from './routes/cartRoutes.js';
import {userRoutes} from './routes/authRoutes.js';

// MongoDB Connection
mongoose.connect("mongodb://localhost:27017/ShoppyGlobe")
.then(()=>{
    console.log("Successfully connected to MongoDB..!");
})
.catch(()=>{
    console.log("Enable to Connect MongoDB, Please try Again..!");
});

const app = express();

app.use(express.json());

app.use((req,res,next)=>{
  console.log(`${req.method} , http://localhost:5000${req.url}`);
  next();
})


app.use(express.json());

userRoutes(app);
productRoutes(app);
cartRoutes(app);

// Creating the Server
app.listen(5000,()=>{
    console.log("Server is runing on port number 5000..!");
});