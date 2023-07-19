import { DataTypes, Model, Optional } from "sequelize";
import sequelize from "../config/database";

// Interface representing the attributes of the User model
interface UserAttributes {
  id: number;
  username: string;
  email: string;
  password: string;
}

// Interface representing the User instance with optional attributes
interface UserInstance
  extends Model<UserAttributes, Optional<UserAttributes, "id">>,
    UserAttributes {}

const User = sequelize.define<UserInstance>(
  "User",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    tableName: "userdb", // The table name is defined
    timestamps: true, // Add timestamps (createdAt and updatedAt)
  },
);

export default User;
