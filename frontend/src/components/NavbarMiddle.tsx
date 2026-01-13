import "./NavbarMiddle.css";
import logo from "../../public/machine-trader-nav-logo.svg";
import SearchBar from "./SearchBar";

export default function NavbarMiddle() {
  return (
    <div className="navbar-middle-container">
      <div className="middle-row-content" style={{display: "flex", justifyContent: "center", gap: "1%"}}>
        <span className="navbar-logo" style={{flex: 1}}>
          <img src={logo} alt="logo" style={{ height: "55px" }} />
        </span>
        <span className="navbar-search" style={{flex: 3}}>
          <SearchBar />
        </span>
      </div>
    </div>
  );
}
