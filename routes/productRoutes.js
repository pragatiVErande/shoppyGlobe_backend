import {addProduct,getAllProducts, getProductById} from '../controllers/productController.js'


export function productRoutes(app){

app.get('/products', getAllProducts);

app.get('/products/:id', getProductById);

app.post('/addproduct', addProduct);

}
