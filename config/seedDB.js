const Category = require("../models/categorySchema");
const Manufacturer = require("../models/manufacturerSchema");
const { categories, manufacturers } = require("../dummy-data");

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
    if (count > 0){
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

module.exports = {seedCategoriesIfEmpty, seedManufacturersIfEmpty};
