
import { addToCart, deleteCartItem, updateCartItem } from '../controllers/cartController.js';
import {verifyToken} from '../middlewares/authMiddleware.js';


export function cartRoutes(app){

app.post('/cart', verifyToken, addToCart);
app.put('/cart/:id', verifyToken, updateCartItem);
app.delete('/cart/:id', verifyToken, deleteCartItem);
};