import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <h2>Cybersecurity Awareness</h2>
      <ul>
        <li>
          <Link to="/blog">Blog</Link>
        </li>
        <li>
          <Link to="/tutorial">Tutorials</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
