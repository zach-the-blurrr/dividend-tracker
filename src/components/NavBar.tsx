import { Link } from "react-router-dom";
import "./NavBar.css";

export default function NavBar() {
  return (
    <nav className="navbar">
      <div className="nav-left">
        <Link to="/" className="nav-logo">
          Dividend Tracker
        </Link>
      </div>
      <div className="nav-right">
        <Link to="/" className="nav-link">
          Sample
        </Link>
        <Link to="/home" className="nav-link">
          Home
        </Link>
      </div>
    </nav>
  );
}
