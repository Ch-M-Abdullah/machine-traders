import { useState } from "react";
import Dropdown from "./Dropdown";
import "./HeaderButtons.css";
import { type Categories } from "../../dummy-data";
import { useNavigate } from "react-router-dom";

export default function HeaderButtons({
  categories,
}: {
  categories: Categories[];
}) {
  const navigate = useNavigate();
  const [category, setCategory] = useState("");

  const gotoListing = () => {
    if (!category || category === "") {
      return;
    }

    setCategory((category) => {
      let cat = encodeURIComponent(category)
      navigate(`/listing/${cat}`);
      return category;
    });
  };
  return (
    <div
      className="header-buttons-container"
      style={{
        backgroundColor: "rgba(0,0,0,0.05)",
      }}
    >
      <Dropdown
        options={categories}
        value={category}
        setCategory={setCategory}
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
