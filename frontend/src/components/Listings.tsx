import { useParams } from "react-router-dom";
import "./Listings.css";
import Card from "./Card";
import { useCategories } from "../context/useCategories";

export default function Listings() {
  const { categories: cat, loading, error } = useCategories();
  const { category } = useParams();

  if (error) return <p>{error}</p>;
  if (loading) return <p>loading data...</p>;
  return (
    <>
      {/* Mock Data */}
      <p className="listing-heading">
        {"listings > "} {category}
      </p>
      <div className="listings">
        {cat.map((category) => {
          return <Card key={category._id} img={category.img} name={category.name} />;
        })}
      </div>
    </>
  );
}
