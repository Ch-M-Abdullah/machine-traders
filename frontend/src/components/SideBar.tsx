import "./SideBar.css";

const Sidebar = ({
  isOpen,
  setIsOpen,
}: {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  return (
    <div className={`sidebar ${isOpen ? "open" : ""}`}>
      <button className="close-btn" onClick={() => setIsOpen(false)}>
        &times;
      </button>

      <nav className="sidebar-links">
        <a href="/">Categories</a>
        <a href="/">Find Dealers</a>
        <a href="/">Email Signup</a>
        <a href="/">Get Market Reports</a>
        <a href="/">Sell Online With eCommerce</a>
        <a href="/">Post A Free Want To Buy</a>
        <a href="/">More</a>
      </nav>
    </div>
  );
};

export default Sidebar;
