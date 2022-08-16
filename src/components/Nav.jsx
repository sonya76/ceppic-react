import { Link } from "react-router-dom";
import "../components/Nav.css";
export default function Nav() {
  return (
    <>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/page">myPage</Link>
      </nav>
    </>
  );
}
