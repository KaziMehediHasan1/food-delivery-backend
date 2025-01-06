const ShopProductSchema = require("../model/ShopProductSchema");

const createShopProduct = async (req, res) => {
  try {
    const shopProducts = req.body;
    const showProducts = new ShopProductSchema(shopProducts);
    const savedProducts = await showProducts.save();
    if (!savedProducts) {
      return res.status(401).json({ message: "product are not saved" });
    }
    res.status(201).json(savedProducts);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// get shopProducts for admin or show owner
const getShopProducts = async (req, res) => {
  try {
    const gettingProducts =await ShopProductSchema.find();
    res.status(200).json(gettingProducts);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// get specfific shopproducts for user searching 



module.exports = {
  createShopProduct,
  getShopProducts
}