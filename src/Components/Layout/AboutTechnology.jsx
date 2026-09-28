import React from "react";
import { Check, ArrowRight } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";

import tablet from "../Images/tab1.png";
import "./AboutTechnology.css";

const AboutTechnology = () => {
  const reduceMotion = useReducedMotion();

  const features = [
    "Interactive touchscreen",
    "Product search & in-aisle navigation",
    "Personalized offers and recommendations",
    "Multiple payment options",
    "Real-time updates and insights",
  ];

  return (
    <section className="tech-section" id="about-technology">
      <div className="tech-container">
        <motion.div
          className="tech-image-area"
          initial={
            reduceMotion
              ? false
              : { opacity: 0, x: -60, scale: 0.95 }
          }
          whileInView={{ opacity: 1, x: 0, scale: 1 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{
            duration: 0.9,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          <div className="tech-circle" />

          <motion.img
            src={tablet}
            alt="HeyCarts smart touchscreen"
            animate={reduceMotion ? {} : { y: [0, -10, 0] }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </motion.div>

        <motion.div
          className="tech-content"
          initial={reduceMotion ? false : { opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{
            duration: 0.8,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          <span className="tech-label">OUR TECHNOLOGY</span>

          <h2>
            Technology
            <br />
            That Moves
            <br />
            <strong>With You.</strong>
          </h2>

          <p>
            Our smart carts are designed to enhance every step of the shopping
            journey — from product discovery to checkout.
          </p>

          <div className="tech-list">
            {features.map((feature) => (
              <div className="tech-list-item" key={feature}>
                <span>
                  <Check size={13} />
                </span>
                {feature}
              </div>
            ))}
          </div>

          <a href="#contact" className="tech-btn">
            Explore Technology
            <ArrowRight size={16} />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutTechnology;