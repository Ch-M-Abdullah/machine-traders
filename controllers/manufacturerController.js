const Manufacturer = require("../models/manufacturerSchema");

const getAllManufacturers = async (req, res) => {
  try {
    const manufacturers = await Manufacturer.find().populate(
      "categories",
      "name"
    );

    const result = manufacturers.map((m) => ({
      ...m.toObject(),
      categories: m.categories.map((c) => c.name),
    }));

    res.status(200).json({
      success: true,
      data: result,
    });
  } catch (error) {
    console.error("Error fetching manufacturers:", error);
    res.status(500).json({
      success: false,
      message: "Server Error: Unable to fetch manufacturers",
    });
  }
};

module.exports = getAllManufacturers;
