const mongoDB = require("./config/db");
const Product = require("./model/Product");
const productData = require("./data/productData");

mongoDB();

//cleans data then inserts data
const inserData = async () => {
  try {
    await Product.deleteMany({});

    await Product.insertMany(productData);

    console.log("Data was imported");

    process.exit();
  } catch (error) {
    console.error("There was an error while importing data");
    process.exit(1);
  }
};

inserData();
