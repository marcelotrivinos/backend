import { Request, Response } from "express";

import Product from "../models/product";

const ProductController = {
  // Create a new product
  createProduct: async (req: Request, res: Response): Promise<Response> => {
    try {
      const { name, price, description } = req.body;
      const product = await Product.create({ name, price, description });
      return res.status(201).json(product);
    } catch (error) {
      return res.status(500).json({ error: "Unable to create product." });
    }
  },

  // Get all products
  getAllProducts: async (req: Request, res: Response): Promise<Response> => {
    try {
      const products = await Product.findAll();
      return res.json(products);
    } catch (error) {
      return res.status(500).json({ error: "Unable to fetch products." });
    }
  },

  // Get a single product by ID
  getProductById: async (req: Request, res: Response): Promise<Response> => {
    try {
      const productId = parseInt(req.params.id, 10);
      const product = await Product.findByPk(productId);
      if (!product) {
        return res.status(404).json({ error: "Product not found." });
      }
      return res.json(product);
    } catch (error) {
      return res.status(500).json({ error: "Unable to fetch product." });
    }
  },

  // Update a product by ID
  updateProduct: async (req: Request, res: Response): Promise<Response> => {
    try {
      const productId = parseInt(req.params.id, 10);
      const { name, price, description } = req.body;
      const product = await Product.findByPk(productId);
      if (!product) {
        return res.status(404).json({ error: "Product not found." });
      }
      product.name = name;
      product.price = price;
      product.description = description;
      await product.save();
      return res.json(product);
    } catch (error) {
      return res.status(500).json({ error: "Unable to update product." });
    }
  },

  // Delete a product by ID
  deleteProduct: async (req: Request, res: Response): Promise<Response> => {
    try {
      const productId = parseInt(req.params.id, 10);
      const product = await Product.findByPk(productId);
      if (!product) {
        return res.status(404).json({ error: "Product not found." });
      }
      await product.destroy();
      return res.json({ message: "Product deleted successfully." });
    } catch (error) {
      return res.status(500).json({ error: "Unable to delete product." });
    }
  },
};

export default ProductController;
