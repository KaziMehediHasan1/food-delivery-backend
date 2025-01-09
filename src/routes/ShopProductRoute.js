const express = require("express");
const {
  createShopProduct,
  getShopProducts,
  deletedProduct,
} = require("../controller/shopProductController");
const route = express.Router();

route.post("/shopproduct", createShopProduct);
route.get("/shopallproducts", getShopProducts);
route.delete("/productdeleted/:id", deletedProduct);

module.exports = route;
