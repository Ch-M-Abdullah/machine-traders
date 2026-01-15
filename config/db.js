const mongoose = require('mongoose');
const {seedCategoriesIfEmpty, seedManufacturersIfEmpty, seedProducts} = require('./seedDB');

const connectDB = async () => {
  try {
    await mongoose.connect('mongodb://127.0.0.1:27017/machines');

    console.log('MongoDB connected');
    await seedCategoriesIfEmpty();
    await seedManufacturersIfEmpty();
    await seedProducts();
  } catch (error) {
    console.error('MongoDB connection failed:', error.message);
    process.exit(1);
  }
};

module.exports = connectDB;
