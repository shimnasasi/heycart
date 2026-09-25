
import React, { useState } from "react";
import { ArrowRight } from "lucide-react";
import {
  FaLinkedinIn,
  FaInstagram,
  FaYoutube
} from "react-icons/fa";
import {
  motion,
  useReducedMotion
} from "framer-motion";

import logo from "../Images/logo.jpeg";
import "./Footer.css";

const Footer = () => {
  const [email, setEmail] = useState("");
  const reduceMotion = useReducedMotion();

  const reveal = (delay = 0) => ({
    initial: reduceMotion
      ? false
      : { opacity: 0, y: 25 },

    whileInView: {
      opacity: 1,
      y: 0
    },

    viewport: {
      once: true,
      amount: 0.15
    },

    transition: {
      duration: 0.65,
      delay: reduceMotion ? 0 : delay,
      ease: [0.22, 1, 0.36, 1]
    }
  });

  const handleSubscribe = (e) => {
    e.preventDefault();
    alert("Newsletter signup is coming soon!");
  };

  return (
    <footer className="hc-footer">
      <div className="hc-footer-container">

        <div className="hc-footer-main">

          {/* BRAND */}

          <motion.div
            className="hc-footer-brand"
            {...reveal(0)}
          >
            <a
              href="#home"
              className="hc-footer-logo"
            >
              <img
                src={logo}
                alt="Hey!Carts"
                className="hc-footer-logo-img"
              />
            </a>

            <p className="hc-footer-tagline">
              Shop Smarter. Live Better.
            </p>

            <p className="hc-footer-description">
              Transforming everyday shopping
              with intelligent technology and
              seamless retail experiences.
            </p>

            <div className="hc-footer-socials">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <FaLinkedinIn />
              </a>

              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
              >
                <FaInstagram />
              </a>

              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
              >
                <FaYoutube />
              </a>
            </div>
          </motion.div>

          {/* PRODUCTS */}

          <motion.div
            className="hc-footer-links"
            {...reveal(0.1)}
          >
            <h4>Products</h4>

            <a href="#products">Smart Carts</a>
            <a href="#technology">Features</a>
            <a href="#technology">Integrations</a>
            <a href="#contact">Pricing</a>
          </motion.div>

          {/* RETAILERS */}

          <motion.div
            className="hc-footer-links"
            {...reveal(0.2)}
          >
            <h4>For Retailers</h4>

            <a href="#retailers">Overview</a>
            <a href="#journey">Use Cases</a>
            <a href="#products">Technology</a>
            <a href="#contact">Resources</a>
          </motion.div>

          {/* COMPANY */}

          <motion.div
            className="hc-footer-links"
            {...reveal(0.3)}
          >
            <h4>Company</h4>

            <a href="#about">About Us</a>
            <a href="#contact">Careers</a>
            <a href="#contact">News</a>
            <a href="#contact">Contact</a>
          </motion.div>

          {/* NEWSLETTER */}

          <motion.div
            className="hc-footer-newsletter"
            {...reveal(0.4)}
          >
            <h4>Stay Updated</h4>

            <p>
              Subscribe for the latest news,
              innovations and updates.
            </p>

            <form onSubmit={handleSubscribe}>
              <input
                type="email"
                placeholder="Your email address"
                aria-label="Email address"
                value={email}
                onChange={(e) =>
                  setEmail(e.target.value)
                }
                required
              />

              <button
                type="submit"
                aria-label="Subscribe"
              >
                <ArrowRight size={21} />
              </button>
            </form>
          </motion.div>
        </div>

        {/* BOTTOM BAR */}

        <div className="hc-footer-bottom">
          <p>
            © {new Date().getFullYear()} Hey!Carts.
            All rights reserved.
          </p>

          <div className="hc-footer-legal">
            <a href="#contact">
              Privacy Policy
            </a>

            <span className="hc-legal-divider">
              |
            </span>

            <a href="#contact">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
