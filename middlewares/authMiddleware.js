import jwt from "jsonwebtoken";


// Middleware to verify token
export function verifyToken(req,res,next){

    if(req.headers.authorization !== undefined){

     // const token = req.headers.authorization.split(" ")[1];
     const token = req.header('Authorization').replace('Bearer ', '');

     try {
      const decoded = jwt.verify(token, 'secret');
      req.user = decoded;
      next();
    } catch (error) {
      res.status(400).json({ error: "Invalid token" });
    }
    }else{
        res.status(404).json({Message: "Please Enter a Token"});
    }
};