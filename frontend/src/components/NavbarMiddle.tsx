import MenuIcon from "@mui/icons-material/Menu";
import "./NavbarMiddle.css";
import logo from "../../public/machine-trader-nav-logo.svg";
import SearchBar from "./SearchBar";
import { useState } from "react";
import Sidebar from "./SideBar";

export default function NavbarMiddle() {
  const [isSideBarOpen, setIsSideBarOpen] = useState(false);

  async function openSideBar() {
    setIsSideBarOpen((state) => !state);
  }

  return (
    <div className="navbar-middle-container">
      <Sidebar isOpen={isSideBarOpen} setIsOpen={setIsSideBarOpen} />
      <div
        className="middle-row-content"
        style={{ display: "flex", justifyContent: "center", gap: "1%" }}
      >
        <div className="navbar-logo-and-hamburger" style={{ flex: 1 }}>
          <span className="navbar-logo" style={{ flex: 1 }}>
            <img src={logo} alt="logo" style={{ height: "55px" }} />
          </span>
          <span onClick={openSideBar} className="hamburger">
            <MenuIcon style={{ fontSize: 40, color: "blue" }} />
          </span>
        </div>
        <span className="navbar-search" style={{ flex: 3 }}>
          <SearchBar />
        </span>
      </div>
    </div>
  );
}
