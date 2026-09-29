import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav-container">
        <Link to="/" className="logo">
          OpenPages
        </Link>

        <div className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/blogs">Blogs</Link>
          <Link to="/add-blog" className="add-btn">
            + Add Blog
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
