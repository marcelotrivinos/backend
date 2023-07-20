import express from "express";
import ProductController from "../controllers/productController";
import isAuthenticated from "../middleware/authMiddleware";

const router = express.Router();

// Route to get all products.
router.get("/products", isAuthenticated, ProductController.getAllProducts);

// Route to get a product.
router.get("/products/:id", isAuthenticated, ProductController.getProductById);

// Route to add a product.
router.post("/products", isAuthenticated, ProductController.createProduct);

// Route to update a product.
router.put("/products/:id", isAuthenticated, ProductController.updateProduct);

// Route to delete a product.
router.delete("/products/:id", isAuthenticated, ProductController.deleteProduct);

export default router;
