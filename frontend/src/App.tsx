import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import MainHeader from "./components/MainHeader";
import Navbar from "./components/Navbar";
import Listings from "./components/Listings";

function App() {

  return (
    <>
    <BrowserRouter>
      <Header />
      <Navbar />
      <Routes>
        <Route path="/" element={<MainHeader />} />
        <Route path="/listing/:category" element={<Listings />} />
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
