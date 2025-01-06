const express = require("express");
const {
  createRestaurant,
  getRestaurant,
} = require("../controller/restaurantController");
const route = express.Router();

route.post("/restaurantName", createRestaurant);
route.get("/getreataurant", getRestaurant);

module.exports = route;
