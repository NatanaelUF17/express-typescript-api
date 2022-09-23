import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

export const databaseConnection = () => {
  try {
    mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/todos");
  } catch (error) {
    console.log(error);
    mongoose.connection.close();
  }
};
