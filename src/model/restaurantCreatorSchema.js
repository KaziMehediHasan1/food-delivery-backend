const { default: mongoose } = require("mongoose");

const restaurantCreator = new mongoose.Schema({
  resName: {
    type: String,
    required: true,
  },
  resPhoto: {
    type: String,
    required: true,
  },
  resLocation: {
    type: String,
    required: true,
  },
  resLogo: {
    type: String,
  },
  resDeliveryTime: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("restaurant", restaurantCreator);
