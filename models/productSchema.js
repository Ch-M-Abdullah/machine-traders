const mongoose = require("mongoose")

const productSchema = new mongoose.Schema(
  {
    title: { type: String, required: true, trim: true },
    category: { type: String, required: true, index: true },
    manufacturer: { type: String, required: true, index: true },
    model: { type: String, required: true },
    year: { type: Number, required: true },
    hours: { type: Number, required: true },
    condition: {
      type: String,
      enum: ["New", "Like New", "Used", "Refurbished"],
      required: true,
    },
    price: { type: Number, required: true, index: true },
    location: { type: String, required: true },
    image: {
      type: String, // exactly ONE image
      required: true,
    },
    description: { type: String },
    features: { type: [String], default: [] },
    status: {
      type: String,
      enum: ["available", "sold", "pending"],
      default: "available",
      index: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Product", productSchema);
