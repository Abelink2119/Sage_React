import { Outlet, Link } from "react-router-dom";

export default function Layout() {
  return (
    <div>
      <nav>
        <Link to="/">Home</Link> <br />
        <Link to="/about">About</Link> <br /> <Link to="/contact">Contact</Link>{" "}
        <br />
        <Link to="/category">Category</Link> <br />{" "}
        <Link to="/category/electronics">Electronics</Link> <br />{" "}
        <Link to="/category/users">Users</Link>
      </nav>

      <main style={{ padding: "1rem" }}>
        <Outlet />
      </main>
    </div>
  );
}
