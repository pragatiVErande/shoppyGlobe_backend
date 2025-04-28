import { register, login } from '../controllers/authController.js';


export function userRoutes(app){
   
app.post('/register', register);

app.post('/login', login);
 
 };
