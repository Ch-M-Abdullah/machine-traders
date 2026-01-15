const Product = require("../models/productSchema");

// GET /products?category=&manufacturer=
const getAllProducts = async (req, res) => {
  try {
    const { category, manufacturer } = req.query;

    // Build query object
    const query = {};
    if (category) query.category = category;
    if (manufacturer) query.manufacturer = manufacturer;

    // Fetch products matching query
    const products = await Product.find(query).sort({ createdAt: -1 });

    res.json({
      success: true,
      count: products.length,
      products,
    });
  } catch (error) {
    console.error("GET /api/products error:", error);
    res.status(500).json({
      success: false,
      message: "Server Error",
    });
  }
};

module.exports = getAllProducts;
