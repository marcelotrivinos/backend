import dotenv from "dotenv";
import { Sequelize, Dialect } from "sequelize";

dotenv.config();

const dialectString = process.env.DB_DIALECT;
const dialect: Dialect = dialectString as Dialect;

const sequelize = new Sequelize(
  process.env.DB_DATABASE || "",
  process.env.DB_USERNAME || "",
  process.env.DB_PASSWORD || "",
  {
    host: process.env.DB_HOST,
    port: parseInt(process.env.DB_PORT || ""),
    dialect: dialect,
    logging: process.env.NODE_ENV === "development",
  },
);

sequelize
  .authenticate()
  .then(() => {
    console.log("Database connection has been established successfully.");
  })
  .catch((error) => {
    console.error("Unable to connect to the database:", error);
  });

export default sequelize;
