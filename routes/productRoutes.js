const express = require("express");
const {
  loadAllProducts,
  getProductById,
} = require("../controller/productController");
const router = express.Router();

//Get all products on landing page
router.get("/", loadAllProducts);

//get individual product
router.get("/:id", getProductById);

module.exports = router;
