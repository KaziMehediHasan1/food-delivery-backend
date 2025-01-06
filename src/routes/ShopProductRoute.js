const express = require("express");
const {
  createShopProduct,
  getShopProducts,
} = require("../controller/shopProductController");
const route = express.Router();

route.post("/shopproduct", createShopProduct);
route.get("/shopallproducts", getShopProducts);

module.exports = route;
