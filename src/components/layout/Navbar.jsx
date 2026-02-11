import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <header className="navbar">
      <div className="nav-container">
        {/* Logo / Name */}
        <NavLink to="/" className="logo">
          Nishant<span>.</span>
        </NavLink>

        {/* Links */}
        <nav className="nav-links">
          <NavLink to="/" end>
            Home
          </NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/skills">Skills</NavLink>
          <NavLink to="/projects">Projects</NavLink>
          <NavLink to="/contact">Contact</NavLink>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
