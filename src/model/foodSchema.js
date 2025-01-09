const { default: mongoose } = require("mongoose");

const foodSchema = new mongoose.Schema({
  resName: {
    type: String,
    required: true,
  },
  foodName: {
    type: String,
    required: true,
  },
  foodPhoto: {
    type: String,
    required: true,
  },
  foodPrice: {
    type: Number,
    required: true,
  },
  foodWeight: {
    type: String,
    required: true,
  },
  foodType: {
    type: String,
    required: true,
  },
  foodOffer: {
    type: Number,
    required: true,
  },
  foodTags: {
    type: [String],
    required: true,
  },
  foodIngrediants: {
    type: [String],
    required: true,
  },
  foodDescriptions: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("food", foodSchema);
