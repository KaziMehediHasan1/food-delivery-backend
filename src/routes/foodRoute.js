const express = require("express");
const { createFood, getFoods } = require("../controller/foodController");
const route = express.Router();

route.post("/createfood", createFood);
route.get("/getfoods", getFoods);

module.exports = route;
