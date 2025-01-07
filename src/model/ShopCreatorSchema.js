const mongoose = require("mongoose");

const ShopCreatorSchema = new mongoose.Schema({
  shopName: {
    type: String,
    required: true,
  },
  shopImage: {
    type: String,
    required: true,
  },
  shopLogo: {
    type: String,
  },
  shopLocation: {
    type: String,
    required: true,
  },
  deliveryTime: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("ShopCreate", ShopCreatorSchema);
