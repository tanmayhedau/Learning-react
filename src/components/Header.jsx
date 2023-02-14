import "../App.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header">
      <Link to={"/"}>
        <h1>HOME </h1>
      </Link>
      <Link to={"/about"}>
        <h1>ABOUT </h1>
      </Link>
      <Link to={"/contact"}>
        <h1>CONTACT </h1>
      </Link>
    </div>
  );
};

export default Header;
