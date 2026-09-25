import React, { useState } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";
import logo from "../Images/logo.jpeg";
import "./Navbar.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const links = [
    ["Home", "#home"],
    ["Products", "#products"],
    ["For Retailers", "#retailers"],
    ["Technology", "#technology"],
    ["About", "#about"],
  ];

  return (
    <header className="hc-navbar">
      <div className="hc-navbar-container">

        <a href="#home" className="hc-navbar-logo">
          <img src={logo} alt="Hey!Carts" />
        </a>

        <nav className={`hc-nav-links ${menuOpen ? "active" : ""}`}>
          {links.map(([name, url]) => (
            <a
              key={name}
              href={url}
              onClick={() => setMenuOpen(false)}
            >
              {name}
            </a>
          ))}
        </nav>

        <a href="#contact" className="hc-navbar-btn">
          Get Started <ArrowUpRight size={17} />
        </a>

        <button
          className="hc-menu-btn"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation"
          aria-expanded={menuOpen}
        >
          {menuOpen ? <X /> : <Menu />}
        </button>

      </div>
    </header>
  );
};

export default Navbar;