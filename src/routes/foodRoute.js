const express = require("express");
const {
  createFood,
  getFoods,
  deleteFood,
  getSearchFoods,
} = require("../controller/foodController");
const route = express.Router();

route.post("/createfood", createFood);
route.get("/getfoods", getFoods);
route.get("/getSearch/:search", getSearchFoods);
route.delete("/deletefood/:id", deleteFood);

module.exports = route;
