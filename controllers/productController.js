import {Product} from '../models/productModel.js';

export const getAllProducts = async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch products" });
  }
};

export const getProductById = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) return res.status(404).json({ error: "Product not found" });
    res.json(product);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch product" });
  }
};

export const addProduct = async (req, res) => {
  const {title, price, stock, description} = req.body;

   if (!title || !price || !stock   || !description) {
     return res.status(400).json({ error: "All fields are required" });
   }

  const product = new Product({ title, price, stock, description });

  try {
    //const newProduct = await Product.create(product);
     // res.status(201).json({newProduct})
     await product.save();
     res.status(201).json(product);
  } catch (error) {
    res.status(500).json({ error: "Failed to add product" });
  }
};
