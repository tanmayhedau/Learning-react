import "../App.css";
import { Link, NavLink } from "react-router-dom";


const Header = () => {
  const navLinkStyles = ({ isActive }) => {
    return {
      TextDecoration: isActive ? "none" : "underline",
      color: isActive ? "red" : "white",
      fontSize: "30px",
    };
  };
  return (
    <div className="header">
      <NavLink style={navLinkStyles} to={"/app"}>
        home
      </NavLink>
      <NavLink style={navLinkStyles} to={"/about"}>
        about
      </NavLink>
      <NavLink style={navLinkStyles} to={"/contact"}>
        contact
      </NavLink>
    </div>
  );
};

export default Header;
