const restaurantCreatorSchema = require("../model/restaurantCreatorSchema");

const createRestaurant = async (req, res) => {
  try {
    const restaurant = req.body;
    const restaurantSet = new restaurantCreatorSchema(restaurant);
    const savedRestaurants = await restaurantSet.save();
    res.status(200).json(savedRestaurants);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// get reastaurant for admin of all-users
const getRestaurant = async (req, res) => {
  try {
    const restaurant = await restaurantCreatorSchema.find();
    res.status(200).json(restaurant);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  createRestaurant,
  getRestaurant,
};
