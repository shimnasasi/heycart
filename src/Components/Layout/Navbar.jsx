import React, { useState } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { Link, NavLink } from "react-router-dom";

import logo from "../Images/logo5png.png";
import "./Navbar.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const links = [
    ["Home", "/"],
    ["About", "/about"],
    ["Services", "/services"],
    ["Contact", "/contact"],
  ];

  return (
    <header className="hc-navbar">
      <div className="hc-navbar-container">

        {/* LOGO */}
        <Link
          to="/"
          className="hc-navbar-logo"
          onClick={() => setMenuOpen(false)}
        >
          <img src={logo} alt="Hey!Carts" />
        </Link>

        {/* NAV LINKS */}
        <nav
          className={`hc-nav-links ${
            menuOpen ? "active" : ""
          }`}
        >
          {links.map(([name, url]) => (
            <NavLink
              key={name}
              to={url}
              end={url === "/"}
              onClick={() => setMenuOpen(false)}
              className={({ isActive }) =>
                isActive ? "active-link" : ""
              }
            >
              {name}
            </NavLink>
          ))}
        </nav>

        {/* GET STARTED BUTTON */}
        <Link
          to="/contact"
          className="hc-navbar-btn"
          onClick={() => setMenuOpen(false)}
        >
          Get Started
          <ArrowUpRight size={17} />
        </Link>

        {/* MOBILE MENU BUTTON */}
        <button
          type="button"
          className="hc-menu-btn"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation"
          aria-expanded={menuOpen}
        >
          {menuOpen ? (
            <X size={25} />
          ) : (
            <Menu size={25} />
          )}
        </button>

      </div>
    </header>
  );
};

export default Navbar;