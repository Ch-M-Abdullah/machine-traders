const Category = require("../models/categorySchema");
const Manufacturer = require("../models/manufacturerSchema");
const Product = require("../models/productSchema");
const {
  categories,
  manufacturers,
  generateProducts,
} = require("../dummy-data");

const seedCategoriesIfEmpty = async () => {
  try {
    const count = await Category.countDocuments();

    if (count > 0) {
      console.log("Categories already exist. Skipping seed.");
      return;
    }

    await Category.insertMany(dummyCategories);
    console.log("Categories seeded successfully.");
  } catch (error) {
    console.error("Error seeding categories:", error);
  }
};

const seedManufacturersIfEmpty = async () => {
  try {
    // Do notjing if already seeded
    const count = await Manufacturer.countDocuments();
    if (count > 0) {
      console.log("Skipping Manufacturer Seeding");
      return;
    }

    const categoriesFromDB = await Category.find();

    // Map category names to their IDs
    const categoryMap = {};
    categoriesFromDB.forEach((cat) => {
      categoryMap[cat.name] = cat._id;
    });

    const manufacturersToInsert = manufacturers.map((manufacturer) => {
      // Replace category names with category IDs
      const categoryIds = manufacturer.categories
        .map((catName) => categoryMap[catName])
        .filter(Boolean); // remove unmatched categories

      return {
        name: manufacturer.name,
        categories: categoryIds,
      };
    });

    // Insert manufacturers
    const inserted = await Manufacturer.insertMany(manufacturersToInsert);

    console.log(`Seeded ${inserted.length} manufacturers successfully.`);
  } catch (error) {
    console.error("Error seeding manufacturers:", error);
  }
};

async function seedProducts(count = 100) {
  try {
    const existing = await Product.countDocuments();

    if (existing > 0) {
      console.log("Products already exist. Skipping seed.");
      return;
    }

    // USE your existing generator
    const generatedProducts = generateProducts(count);

    // Normalize for MongoDB schema
    const productsForDb = generatedProducts.map((p) => ({
      title: p.title,
      category: p.category,
      manufacturer: p.manufacturer,
      model: p.model,
      year: p.year,
      hours: p.hours,
      condition: p.condition,
      price: p.price || 1000,
      location: p.location,

      //  FIRST IMAGE ONLY
      image: Array.isArray(p.images) ? p.images[0] : "img",

      description: p.description,
      features: Array.isArray(p.features) ? p.features : [],
      status: "available",
    }));

    await Product.insertMany(productsForDb);

    console.log(`Seeded ${productsForDb.length} products`);
  } catch (error) {
    console.error("Seeding failed:", error);
    throw error;
  }
}

module.exports = {
  seedCategoriesIfEmpty,
  seedManufacturersIfEmpty,
  seedProducts,
};
