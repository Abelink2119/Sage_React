import { Link } from "react-router-dom";
function Header() {
  return (
    <header>
      <Link to="/">Home</Link>
      <br />
      <br />
      <Link to="/about">About</Link>
      <br />
      <br />
      <Link to="/contact">Contact</Link>
    </header>
  );
}
export default Header;
