const express = require("express");
const connectDB = require("./config/db");
const getAllCategories = require("./controllers/categoryController");
const getAllManufacturers = require("./controllers/manufacturerController");
const cors = require("cors");
const getAllProducts = require("./controllers/productController");

const app = express();
const PORT = 3000;

connectDB();

// Middlewares
app.use(express.json());
app.use(cors({ origin: "*" }));

// Route
app.get("/categories", getAllCategories);
app.get("/manufacturers", getAllManufacturers);
app.get("/products", getAllProducts);

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
