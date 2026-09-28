import React from "react";
import { ArrowRight } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";

import trolley from "../Images/trolley1.png";
import "./AboutBanner.css";

const AboutBanner = () => {
  const reduceMotion = useReducedMotion();

  const reveal = (delay = 0) => ({
    initial: reduceMotion ? false : { opacity: 0, y: 35 },
    animate: { opacity: 1, y: 0 },
    transition: {
      duration: 0.75,
      delay: reduceMotion ? 0 : delay,
      ease: [0.22, 1, 0.36, 1],
    },
  });

  return (
    <section className="ab-hero">
      <div className="ab-container">
        <div className="ab-content">
          <motion.span className="ab-label" {...reveal(0.1)}>
            ABOUT HEY!CARTS
          </motion.span>

          <motion.h1 {...reveal(0.2)}>
            We're Reinventing
            <br />
            the Way People
            <br />
            <span>Shop.</span>
          </motion.h1>

          <motion.p {...reveal(0.35)}>
            Hey!Carts combines smart technology and retail innovation to make
            in-store shopping simpler, faster and more enjoyable for everyone.
          </motion.p>

          <motion.a
            href="#about-technology"
            className="ab-btn"
            {...reveal(0.5)}
          >
            Our Technology
            <ArrowRight size={17} />
          </motion.a>
        </div>

        <motion.div
          className="ab-image-area"
          initial={
            reduceMotion
              ? false
              : { opacity: 0, x: 65, scale: 0.94 }
          }
          animate={{ opacity: 1, x: 0, scale: 1 }}
          transition={{
            duration: 1,
            delay: reduceMotion ? 0 : 0.25,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          <div className="ab-circle" />

          <motion.img
            src={trolley}
            alt="HeyCarts smart shopping trolley"
            animate={reduceMotion ? {} : { y: [0, -12, 0] }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />

          <div className="ab-floating-text">
            A smarter
            <br />
            way to <span>shop.</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutBanner;