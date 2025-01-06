const mongoose = require("mongoose");

const shopProducts = new mongoose.Schema({
  shopName: {
    type: String,
    required: true,
  },
  productCatalog: {
    type: String,
    requied: true,
  },
  prodiscount: {
    type: Number,
  },
  proOffer: {
    type: String,
  },
  proName: {
    type: String,
    required: true,
  },
  proPhoto: {
    type: String,
    required: true,
  },
  proPrice: {
    type: Number,
    required: true,
  },
  proWeight: {
    type: String,
    required: true,
  },
  prodescription: {
    type: String,
    required: true,
  },
  protags: {
    type: [String],
    required: true,
  },
  
  proratting: {
    type: [String],
  },
  prodeliveryTime: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("shopProduct", shopProducts);
