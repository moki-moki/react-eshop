const Product = require("../model/Product");

const loadAllProducts = async (req, res) => {
  try {
    const products = await Product.find({});

    res.json(products);
  } catch (error) {
    console.error(error);
    res.status(500).json({ Message: "there was a server error" });
  }
};

const getProductById = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);

    res.json(product);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server side error :( Product by id" });
  }
};

module.exports = {
  loadAllProducts,
  getProductById,
};
