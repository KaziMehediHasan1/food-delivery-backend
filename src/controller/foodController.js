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
    });
    const savedFoods = await createFoods.save();

    console.log(savedFoods, "41 no line");
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

module.exports = {
  createFood,
  getFoods,
};
