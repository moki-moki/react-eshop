require("dotenv").config();

const mongoose = require("mongoose");

const mongoDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Mongodb connected yay");
  } catch (error) {
    console.error("MongoDb fAil to connect :( ");
  }
};

module.exports = mongoDB;
