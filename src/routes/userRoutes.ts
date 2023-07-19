import express from "express";
import UserController from "../controllers/userController";

const router = express.Router();

// Route for user signup
router.post("/signup", UserController.signup);

// Route for user login
router.post("/login", UserController.login);

// Route for user signout
router.get("/signout", UserController.signout);

export default router;
