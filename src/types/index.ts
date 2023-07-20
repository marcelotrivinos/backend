import { User } from "./custom";

export {}; // Ensure this file is treated as a module

declare global {
  namespace Express {
    export interface Request {
      user?: User; // Add the 'user' property to the Request object
    }
  }
}
