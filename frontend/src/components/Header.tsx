import "./Header.css";

export default function Header() {
  return (
    <div
      className="header-outer"
      style={{ backgroundColor: "#670001", width: "100%" }}
    >
      <span className="header-inner">
        <span
          className={"auth-container"}
          style={{ display: "flex", flexDirection: "row" }}
        >
          <a href="/">Login</a>
          <p style={{ display: "inline", color: "white", marginBlock: 0 }}>/</p>
          <a href="/">Dealer Portal</a>
          <p style={{ display: "inline", color: "white", marginBlock: 0 }}>/</p>
          <a href="/">VIP Portal</a>
          <a href="/" className="header-register-btn">
            Register
          </a>
        </span>
        <span className="additional-header-links">
            <a href="/">Advertising</a>
            <a href="/">Contact Us</a>
            <a href="/">EN</a>
            <a href="/">Global Brands</a>
        </span>
      </span>
    </div>
  );
}
