const Category = require('../models/categorySchema');
const dummyCategories = require('../dummy-data');

const seedCategoriesIfEmpty = async () => {
  try {
    const count = await Category.countDocuments();

    if (count > 0) {
      console.log('Categories already exist. Skipping seed.');
      return;
    }

    await Category.insertMany(dummyCategories);
    console.log('Categories seeded successfully.');
  } catch (error) {
    console.error('Error seeding categories:', error);
  }
};

module.exports = seedCategoriesIfEmpty;
