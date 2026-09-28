import React from "react";
import { motion, useReducedMotion } from "framer-motion";

import shop from "../Images/tab2.png";
import "./OurStory.css";

const OurStory = () => {
  const reduceMotion = useReducedMotion();

  return (
    <section className="story-section">
      <div className="story-container">
        <motion.div
          className="story-content"
          initial={reduceMotion ? false : { opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{
            duration: 0.8,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          <span className="story-small-title">OUR STORY</span>

          <h2>
            From a Cart to a
            <br />
            Smarter Shopping
            <br />
            <span>Experience.</span>
          </h2>

          <p>
            Hey!Carts was born from a simple idea — to make everyday shopping
            easier, faster and more enjoyable.
          </p>

          <p>
            We saw an opportunity to bring technology into the shopping cart
            and create a better experience for both shoppers and retailers.
          </p>
        </motion.div>

        <motion.div
          className="story-image"
          initial={
            reduceMotion
              ? false
              : { opacity: 0, x: 60, scale: 0.95 }
          }
          whileInView={{ opacity: 1, x: 0, scale: 1 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{
            duration: 0.9,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          <img src={shop} alt="Smart retail shopping experience" />
        </motion.div>
      </div>
    </section>
  );
};

export default OurStory;