import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Listings from "./components/Listings";

function App() {

  return (
    <>
    <BrowserRouter>
      <Header />
      <Navbar />
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/listing" element={<Listings />} />
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
