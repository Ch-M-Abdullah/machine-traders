const Category = require('../models/categorySchema');

const getAllCategories = async (req, res) => {
  try {
    const categories = await Category.find();
    console.log("Response Sent Successfully");
    
    return res.status(200).json(categories);
    
  } catch (error) {
    console.error('Error fetching categories:', error);
    return res.status(500).json({
      message: 'Failed to fetch categories',
    });
  }
};

module.exports = getAllCategories