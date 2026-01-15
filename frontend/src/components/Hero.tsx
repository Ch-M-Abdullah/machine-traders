import HeroButtons from "./HeroButtons.tsx";
import "./Hero.css";
// import { type Categories, categories } from "../../dummy-data.ts";
import { useNavigate } from "react-router-dom";
import { useCategories } from "../context/useCategories.ts";
import { useEffect, useState } from "react";
import getAllManufacturers, {
  type Manufacturer,
} from "../api/manufacturers.ts";

export default function Hero() {
  // const categories = ["Skid Stears", "Trenchers / Cable Plows", "Dozers", "Lifts", "Forklifts", "Excavators", "Mini Excavators", "Skid Steers", "Cranes", "Loader Backhoes", "Wheel Loaders", "Forestry Equipment", "Drills", "Motor Graders", "Sweepers / Broom Equipment", "Aggregate Equipment", "Telehandlers", "Off-Highway Trucks", "Asphalt / Pavers / Concrete Equipment", "Construction Attachments", "Dismantled Machines", "Parts"]
  // const cat = useRef<Categories[]>(categories as Categories[]);
  const { categories: cat, loading, error } = useCategories();
  const [manufacturers, setManufacturers] = useState<Manufacturer[]>([]);
  const [selectedCategory, setSelectedCategory] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchManufacturers() {
      const man = await getAllManufacturers();
      setManufacturers(man.data);
    }
    fetchManufacturers();
  }, []);

  useEffect(() => {
    console.log("Selected Category: ", selectedCategory);
    console.log(
      "Man: ",
      manufacturers.filter((manufacturer) =>
        manufacturer.categories?.includes(selectedCategory)
      )
    );

    console.log(manufacturers.map((man) => man.categories))
    
  }, [selectedCategory]);

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
    <div className="main-hero-container">
      <div className="main-hero-block">
        <p
          className="main-hero-block-text"
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
        <HeroButtons
          categories={cat}
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
          manufacturers={manufacturers.filter((manufacturer) =>
            manufacturer.categories?.includes(selectedCategory)
          )}
        />
      </div>
    </div>
  );
}
