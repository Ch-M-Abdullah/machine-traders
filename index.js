const express = require('express');
const connectDB = require('./config/db');
const  getAllCategories = require('./controllers/categoryController');
const cors = require("cors");

const app = express();
const PORT = 3000;


connectDB();

// Middlewares
app.use(express.json());
app.use(cors({origin: "*"}))

// Route
app.get('/categories', getAllCategories);

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
