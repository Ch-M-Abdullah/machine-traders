import { useState } from "react";
import Dropdown from "./Dropdown";
import "./HeroButtons.css";
import { type Category } from "../context/CategoriesContext";
import { useNavigate } from "react-router-dom";
import type { Manufacturer } from "../api/manufacturers";

export default function HeroButtons({
  categories,
  manufacturers,
  selectedCategory,
  setSelectedCategory,
}: {
  categories: Category[];
  manufacturers: Manufacturer[];
  selectedCategory: string;
  setSelectedCategory: React.Dispatch<React.SetStateAction<string>>;
}) {
  const navigate = useNavigate();
  const [manufacturer, setManufacturer] = useState("");

  const gotoListing = async () => {
    const params = new URLSearchParams();

    if (selectedCategory) params.append("category", selectedCategory);
    if (manufacturer) params.append("manufacturer", manufacturer);

    const url = `/listing?${params.toString()}`;

    navigate(url);
  };

  return (
    <div
      className="hero-buttons-container"
      style={{
        backgroundColor: "rgba(0,0,0,0.05)",
      }}
    >
      <Dropdown
        options={categories}
        value={selectedCategory}
        setValue={setSelectedCategory}
      />
      <Dropdown
        options={manufacturers}
        value={manufacturer}
        setValue={setManufacturer}
      />
      <button
        className="search-btn"
        onClick={gotoListing}
        style={{
          backgroundColor: "rgb(103, 0, 1)",
          color: "white",
          borderWidth: 0,
        }}
      >
        Search
      </button>
    </div>
  );
}
