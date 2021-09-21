require("dotenv").config();
const productRouters = require("./routes/productRoutes");
const express = require("express");
const mongoDB = require("./config/db");

mongoDB();

const app = express();

app.use(express.json());

app.use("/api/products", productRouters);

const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`server is up on ${PORT} port`));
