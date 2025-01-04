import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();
export const ConnectDB = async () => {
  try {
    await mongoose.connect(process.env.SERVER_URI);
    console.log("Mogodb connection fun calling");
  } catch (error) {
    console.log("Mongodb connection failed", error);
  }
};
