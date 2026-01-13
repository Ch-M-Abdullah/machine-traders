import HeaderButtons from "./HeaderButtons";
import "./MainHeader.css";
// import { type Categories, categories } from "../../dummy-data.ts";
import { useNavigate } from "react-router-dom";
import { useCategories } from "../context/useCategories.ts";

export default function MainHeader() {
  // const categories = ["Skid Stears", "Trenchers / Cable Plows", "Dozers", "Lifts", "Forklifts", "Excavators", "Mini Excavators", "Skid Steers", "Cranes", "Loader Backhoes", "Wheel Loaders", "Forestry Equipment", "Drills", "Motor Graders", "Sweepers / Broom Equipment", "Aggregate Equipment", "Telehandlers", "Off-Highway Trucks", "Asphalt / Pavers / Concrete Equipment", "Construction Attachments", "Dismantled Machines", "Parts"]
  // const cat = useRef<Categories[]>(categories as Categories[]);
  const { categories: cat, loading, error } = useCategories();
  const navigate = useNavigate();

  if (error) return <p>{error}</p>;
  if (loading) return <p>loading data...</p>;


  const gotoListing = (category: string) => {
    if (!category || category === "") {
      return;
    }
    category = encodeURIComponent(category);

    navigate(`/listing/${category}`);
  };
  return (
    <div className="main-header-container">
      <div className="main-header-block">
        <p
          className="main-header-block-text"
          style={{
            width: "100%",
            textAlign: "center",
            color: "#670001",
            fontWeight: "700",
          }}
        >
          New & Used Construction Equipment For Sale
        </p>
        <span className="categories">
          {cat.map((category) => {
            return (
              <span
              key={category._id}
                style={{ maxHeight: "auto" }}
                onClick={() => gotoListing(category.name)}
              >
                <img
                  src={category.img}
                  alt="img"
                  style={{
                    maxHeight: "100%",
                    objectFit: "contain",
                    maxWidth: "100%",
                  }}
                />
                <p style={{ maxWidth: "90%", textAlign: "center" }}>
                  {category.name}
                </p>
              </span>
            );
          })}
        </span>
        <HeaderButtons categories={cat} />
      </div>
    </div>
  );
}
