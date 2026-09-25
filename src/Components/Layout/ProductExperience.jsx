
import React from "react";
import { CheckCircle2, ArrowRight } from "lucide-react";
import {
  motion,
  useReducedMotion
} from "framer-motion";

import trolley from "../Images/trolley.jpeg";
import "./ProductExperience.css";

const productFeatures = [
  "Interactive touchscreen",
  "Product search & in-aisle navigation",
  "Personalized promotions",
  "Multi-payment options",
  "Real-time offers and recommendations"
];

const ProductExperience = () => {
  const reduceMotion = useReducedMotion();

  const reveal = (delay = 0, x = 0, y = 25) => ({
    initial: reduceMotion
      ? false
      : { opacity: 0, x, y },

    whileInView: {
      opacity: 1,
      x: 0,
      y: 0
    },

    viewport: {
      once: true,
      amount: 0.15
    },

    transition: {
      duration: 0.75,
      delay: reduceMotion ? 0 : delay,
      ease: [0.22, 1, 0.36, 1]
    }
  });

  return (
    <section
      id="products"
      className="product-experience"
    >
      <div className="product-container">

        {/* PRODUCT IMAGE */}

        <motion.div
          className="product-image"
          {...reveal(0.1, -55, 0)}
        >
          <img
            src={trolley}
            alt="Hey!Carts smart trolley product experience"
            loading="lazy"
          />

          <motion.div
            className="product-badge"
            animate={
              reduceMotion
                ? {}
                : { y: [0, -9, 0] }
            }
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            Smart.
            <br />
            Simple.
            <br />
            Seamless.
          </motion.div>
        </motion.div>

        {/* PRODUCT CONTENT */}

        <div className="product-content">

          <motion.p
            className="product-label"
            {...reveal(0.1)}
          >
            PRODUCT EXPERIENCE
          </motion.p>

          <motion.h2
            {...reveal(0.2)}
          >
            Intelligent Carts
            <br />
            for Modern Retail
          </motion.h2>

          <motion.p
            className="product-description"
            {...reveal(0.3)}
          >
            Our smart carts are designed to enhance
            every step of the shopping journey —
            from discovery to checkout.
          </motion.p>

          <ul>
            {productFeatures.map((feature, index) => (
              <motion.li
                key={feature}
                {...reveal(
                  0.4 + index * 0.1,
                  0,
                  15
                )}
              >
                <CheckCircle2 size={19} />
                <span>{feature}</span>
              </motion.li>
            ))}
          </ul>

          <motion.div
            {...reveal(0.9)}
          >
            <a
              href="#contact"
              className="product-btn"
            >
              Explore Products
              <ArrowRight size={17} />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ProductExperience;
