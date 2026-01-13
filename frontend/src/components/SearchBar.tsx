import { useState } from "react";
import "./SearchBar.css";

export default function SearchBar() {
  const [placeholder, setPlaceholder] = useState("");
  return (
    <span
    className="navbar-search-container"
      style={{
        backgroundColor: "#f2f2f2",
        display: "flex",
        flexDirection: "row",
        padding: "1%",
        borderRadius: "3%",
      }}
    >
      <input
        className="search-bar-input"
        style={{
          backgroundColor: "inherit",
          borderWidth: "0",
          fontSize: "1rem",
          flex: 1,
        }}
        type="search"
        placeholder={placeholder}
      />
      <span className="magnifier">🔍</span>
    </span>
  );
}
