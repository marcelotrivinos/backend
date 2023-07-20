import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";

import { User } from "../types/custom";

const isAuthenticated = (req: Request, res: Response, next: NextFunction) => {
  const token = req.headers.authorization;

  if (!token) {
    return res.status(401).json({ message: "Unauthorized" });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET || "your-secret-key");
    req.user = decoded as User; // Set the user data in the request object for use in other middleware/route handlers
    return next();
  } catch (err) {
    return res.status(401).json({ message: "Unauthorized" });
  }
};

export default isAuthenticated;
