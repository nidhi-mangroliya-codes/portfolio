import { Link, NavLink } from "react-router-dom";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { useState } from "react";
import "./Navbar.css";
export default function Navbar() {
  const [open, setOpen] = useState(false);

  function closeMenu() {
    setOpen(false);
  }

  return (
    <header className="site-header">
      <div className="container nav-wrap">
        <div className="brand-professional">
          <span className="brand-logo">N</span>
          <span className="brand-name">
            Nidhi<span className="brand-dot">.</span>
          </span>
        </div>

        <button
          className="mobile-menu"
          onClick={() => setOpen(!open)}
          aria-label="Toggle navigation"
          aria-expanded={open}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>

        <nav className={open ? "nav-links nav-open" : "nav-links"}>
          <NavLink to="/" end onClick={closeMenu}>
            Home
          </NavLink>

          <NavLink to="/about" onClick={closeMenu}>
            About
          </NavLink>

          <NavLink to="/projects" onClick={closeMenu}>
            Projects
          </NavLink>

          <NavLink to="/resume" onClick={closeMenu}>
            Resume
          </NavLink>

          <Link
            to="/contact"
            className="nav-cta"
            onClick={closeMenu}
          >
            Let's talk <ArrowUpRight size={15} />
          </Link>
        </nav>
      </div>
    </header>
  );
}
