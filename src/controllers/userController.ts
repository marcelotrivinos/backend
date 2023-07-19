import { Request, Response } from "express";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

import User from "../models/user";

const UserController = {
  signup: async (req: Request, res: Response) => {
    try {
      const { username, email, password } = req.body;

      // Check if the user is already registered
      const existingUser = await User.findOne({ where: { email } });

      if (existingUser) {
        return res.status(400).json({ message: "User already registered." });
      }

      // Generate hash of the password
      const hashedPassword = await bcrypt.hash(password, 10);

      // Create the new user and save it to the database using Sequelize
      const newUser = await User.create({ username, email, password: hashedPassword });

      res.status(201).json({ message: "User registered successfully.", user: newUser });
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: "Error registering the user." });
    }
  },

  login: async (req: Request, res: Response) => {
    try {
      const { email, password } = req.body;

      // Find the user by their email in the database using Sequelize
      const user = await User.findOne({ where: { email } });
      if (!user) {
        return res.status(404).json({ message: "User not found." });
      }

      // Verify the password
      const isPasswordValid = await bcrypt.compare(password, user.password);
      if (!isPasswordValid) {
        return res.status(401).json({ message: "Incorrect password." });
      }

      // Generate and send the JWT token for authentication
      const token = jwt.sign({ userId: user.id, email: user.email }, "secretKey", {
        expiresIn: "1h",
      });
      res.json({ message: "Login successful.", token });
    } catch (error) {
      res.status(500).json({ message: "Error logging in." });
    }
  },

  signout: (req: Request, res: Response) => {
    res.json({ message: "Logout successful." });
  },
};

export default UserController;
