import { useSearchParams } from "react-router-dom";
import "./Listings.css";
import Card from "./Card";
// import { useCategories } from "../context/useCategories";
import { useEffect, useState } from "react";

type Product = {
  _id: string;
  title: string;
  image: string;
  price: number;
};

export default function Listings() {
  // const { categories: cat, loading, error } = useCategories();
  const [products, setProducts] = useState<Product[]>([]);
  const [searchParams, _] = useSearchParams();

  useEffect(() => {
    async function fetchProducts() {
      try {
        const url = `http://localhost:3000/products?${searchParams.toString()}`;

        const response = await fetch(url);

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();

        // controller returns { success, count, products }
        setProducts(data.products);
        console.log("Count of fetched products: ", data.count);
        console.log("fetched products: ", data.products);
      } catch (error) {
        console.error("Failed to fetch products:", error);
      }
    }
    fetchProducts();
  }, []);

  return (
    <>
      <p className="listing-heading">
        {searchParams.get("category")}{" "}
        {searchParams.get("manufacturer")
          ? ` > ${searchParams.get("manufacturer")}`
          : ""}
      </p>
      <div className="listings">
        {products.map((product) => {
          return (
            <Card key={product._id} img={product.image} name={product.title} />
          );
        })}
      </div>
    </>
  );
}
