const foodSchema = require("../model/foodSchema");
const restaurantCreatorSchema = require("../model/restaurantCreatorSchema");

const createFood = async (req, res) => {
  console.log(req.body, "5no line");
  try {
    const {
      resName,
      foodName,
      foodPhoto,
      foodPrice,
      foodWeight,
      foodTags,
      foodIngrediants,
      foodDescriptions,
      foodOffer,
      foodType,
    } = req.body;

    const existingName = await restaurantCreatorSchema.findOne({
      resName: resName,
    });
    console.log(existingName, "18 no line");

    if (!existingName) {
      return res
        .status(404)
        .json({ message: "Not found your restaurant, please create first!" });
    }

    const createFoods = new foodSchema({
      resName,
      foodName,
      foodPhoto,
      foodPrice,
      foodWeight,
      foodTags,
      foodIngrediants,
      foodDescriptions,
      foodOffer,
      foodType,
    });
    const savedFoods = await createFoods.save();
    res.status(200).json(savedFoods);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// get food for all users
const getFoods = async (req, res) => {
  try {
    const findfoods = await foodSchema.find();
    res.status(200).json(findfoods);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// deleted product
const deleteFood = async (req, res) => {
  try {
    const { id } = req.params;

    const deleted = await foodSchema.findOneAndDelete({ _id: id });
    res.status(200).json(deleted);
  } catch (error) {
    res.status(500).json({ message: message.error });
  }
};

module.exports = {
  createFood,
  getFoods,
  deleteFood,
};
