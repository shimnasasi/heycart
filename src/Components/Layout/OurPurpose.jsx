import React from "react";
import { motion, useReducedMotion } from "framer-motion";

import shop from "../Images/shop.png";
import "./OurPurpose.css";

const OurPurpose = () => {
  const reduceMotion = useReducedMotion();

  return (
    <section className="purpose-section">
      <img
        src={shop}
        alt="Modern smart retail store"
        className="purpose-bg"
      />

      <div className="purpose-shade" />

      <div className="purpose-inner">
        <motion.div
          className="purpose-content"
          initial={reduceMotion ? false : { opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{
            duration: 0.8,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          <span>OUR PURPOSE</span>

          <h2>
            Shop Smarter.
            <br />
            <strong>Live Better.</strong>
          </h2>

          <p>
            We are committed to creating intelligent shopping solutions that
            bring value to people, retailers and the planet.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default OurPurpose;