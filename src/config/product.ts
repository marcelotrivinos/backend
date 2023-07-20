import dotenv from "dotenv";
import { Sequelize, Dialect } from "sequelize";

dotenv.config();

const dialectString = process.env.DB2_DIALECT;
const dialect: Dialect = dialectString as Dialect;

const sequelize = new Sequelize(
  process.env.DB2_DATABASE || "",
  process.env.DB2_USERNAME || "",
  process.env.DB2_PASSWORD || "",
  {
    host: process.env.DB2_HOST,
    port: parseInt(process.env.DB2_PORT || ""),
    dialect: dialect,
    logging: process.env.NODE_ENV === "development",
  },
);

sequelize
  .authenticate()
  .then(() => {
    console.log("The connection to the products database has been successful.");
  })
  .catch((error) => {
    console.error("The connection to the products database has been unsuccessful:", error);
  });

export default sequelize;
