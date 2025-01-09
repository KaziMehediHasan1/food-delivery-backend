const ShopCreatorSchema = require("../model/ShopCreatorSchema");
const ShopProductSchema = require("../model/ShopProductSchema");

const createShopProduct = async (req, res) => {
  try {
    const {
      shopName,
      productCatalog,
      prodiscount,
      proOffer,
      proPhoto,
      prodeliveryTime,
      protags,
      prodescription,
      proWeight,
      proPrice,
      proName,
    } = req.body;

    if (
      !shopName ||
      !productCatalog ||
      !proPhoto ||
      !proName ||
      proPrice === undefined ||
      !prodeliveryTime
    ) {
      return res
        .status(400)
        .json({ message: "All required fields must be provided." });
    }

    // Check if the shop exists
    const existingShop = await ShopCreatorSchema.findOne({ shopName });
    if (!existingShop) {
      return res
        .status(404)
        .json({ message: "Shop not found. Please create the shop first!" });
    }

    // Create a new product
    const newProduct = new ShopProductSchema({
      shopName,
      productCatalog,
      prodiscount,
      proOffer,
      proPhoto,
      prodeliveryTime,
      protags,
      prodescription,
      proWeight,
      proPrice,
      proName,
    });

    // Save the product
    const savedProduct = await newProduct.save();
    res.status(200).json({
      message: "Product created successfully!",
      product: savedProduct,
    });
  } catch (error) {
    console.error("Error in createShopProduct:", error);
    res.status(500).json({
      message: "An error occurred while creating the product.",
      error: error.message,
    });
  }
};

// get shopProducts for admin or show owner
const getShopProducts = async (req, res) => {
  try {
    const gettingProducts = await ShopProductSchema.find();
    res.status(200).json(gettingProducts);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// deleted product
const deletedProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await ShopProductSchema.findOneAndDelete({ _id: id });
    res.status(200).json(deleted);
  } catch (error) {
    res.status(500).json({ message: message.error });
  }
};
// get specfific shopproducts for user searching

module.exports = {
  createShopProduct,
  getShopProducts,
  deletedProduct,
};
