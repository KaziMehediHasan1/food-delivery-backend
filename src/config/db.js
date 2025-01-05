const  mongoose = require("mongoose");
require("dotenv").config();
const ConnectDB = async () => {
  try {
    await mongoose.connect(process.env.SERVER_URI);
    console.log("Mogodb connection fun calling");
  } catch (error) {
    console.log("Mongodb connection failed", error);
  }
};
module.exports = ConnectDB;
