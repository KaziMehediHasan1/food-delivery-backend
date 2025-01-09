const express = require("express");
const {
  createFood,
  getFoods,
  deleteFood,
} = require("../controller/foodController");
const route = express.Router();

route.post("/createfood", createFood);
route.get("/getfoods", getFoods);
route.delete("/deletefood/:id", deleteFood);

module.exports = route;
