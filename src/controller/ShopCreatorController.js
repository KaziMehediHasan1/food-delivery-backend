const ShopCreator = require("../model/ShopCreatorSchema");

const createShop = async (req, res) => {
  try {
    const shopdata = req.body;
    const createShops = new ShopCreator(shopdata);
    const savedShop = await createShops.save();
    if (!savedShop) {
      return res.status(401).json({ message: "shop is not creating" });
    }
    res.status(200).json(savedShop);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
// get shop data

const getShop = async (req, res) => {
  try {
    const gettingShopData = await ShopCreator.find();
    res.status(200).json(gettingShopData);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


module.exports = {
  createShop,
  getShop,
};
