// import { type Category } from "../context/CategoriesContext";

export type Manufacturer = {
  _id: string;
  name: string;
  categories: string[];
  createdAt?: string;
  updatedAt?: string;
};

async function getAllManufacturers() {
  try {
    const response = await fetch("http://localhost:3000/manufacturers");
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching manufacturers:", error);
  }
}

export default getAllManufacturers;
