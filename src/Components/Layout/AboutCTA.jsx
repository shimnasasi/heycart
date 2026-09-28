import React from "react";
import { ArrowRight } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";

import "./AboutCTA.css";

const AboutCTA = () => {
  const reduceMotion = useReducedMotion();

  return (
    <section className="about-final-cta" id="contact">
      <div className="about-final-glow" />

      <motion.div
        className="about-final-inner"
        initial={reduceMotion ? false : { opacity: 0, y: 35 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{
          duration: 0.8,
          ease: [0.22, 1, 0.36, 1],
        }}
      >
        <div className="about-final-content">
          <span>READY TO SHAPE THE FUTURE?</span>

          <h2>
            Let's Build the Future of
            <br />
            Retail Together.
          </h2>

          <p>
            Partner with Hey!Carts and create smarter, more engaging shopping
            experiences.
          </p>
        </div>

        <a href="/contact" className="about-final-btn">
          Get Started
          <ArrowRight size={17} />
        </a>
      </motion.div>
    </section>
  );
};

export default AboutCTA;