const express = require("express");
const { createShop, getShop } = require("../controller/ShopCreatorController");
const route = express.Router();

route.post("/shopcreate", createShop);
route.get("/getShopDetails", getShop);

module.exports = route;
