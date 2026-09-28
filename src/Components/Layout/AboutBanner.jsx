import React from "react";
import { ArrowRight } from "lucide-react";
import {
  motion,
  useReducedMotion,
} from "framer-motion";

import aboutBanner from "../Images/aboutbanner.png";
import "./AboutBanner.css";

const AboutBanner = () => {
  const reduceMotion = useReducedMotion();

  const reveal = (delay = 0) => ({
    initial: reduceMotion
      ? false
      : {
          opacity: 0,
          y: 30,
        },

    animate: {
      opacity: 1,
      y: 0,
    },

    transition: {
      duration: 0.75,
      delay: reduceMotion ? 0 : delay,
      ease: [0.22, 1, 0.36, 1],
    },
  });

  return (
    <section className="about-banner">
      <div className="about-banner-container">

        {/* LEFT CONTENT */}
        <div className="about-banner-content">

          <motion.span
            className="about-banner-label"
            {...reveal(0.1)}
          >
            ABOUT HEY!CARTS
          </motion.span>

          <motion.h1 {...reveal(0.2)}>
            We're Reinventing
            <br />
            the Way People
            <br />
            <span>Shop.</span>
          </motion.h1>

          <motion.p
            className="about-banner-description"
            {...reveal(0.35)}
          >
            Hey!Carts combines smart technology and retail
            innovation to make in-store shopping simpler,
            faster and more enjoyable for everyone.
          </motion.p>

          <motion.div {...reveal(0.5)}>
            <motion.a
              href="#products"
              className="about-banner-btn"

              whileHover={
                reduceMotion
                  ? {}
                  : {
                      y: -3,
                      scale: 1.02,
                    }
              }

              whileTap={
                reduceMotion
                  ? {}
                  : {
                      scale: 0.97,
                    }
              }
            >
              Our Products
              <ArrowRight size={15} />
            </motion.a>
          </motion.div>

        </div>


        {/* RIGHT IMAGE */}
        <motion.div
          className="about-banner-image-area"

          initial={
            reduceMotion
              ? false
              : {
                  opacity: 0,
                  x: 70,
              }
          }

          animate={{
            opacity: 1,
            x: 0,
          }}

          transition={{
            duration: 1,
            delay: reduceMotion ? 0 : 0.15,
            ease: [0.22, 1, 0.36, 1],
          }}
        >

          <motion.img
            src={aboutBanner}
            alt="Hey!Carts smart shopping trolley"
            className="about-banner-image"

            animate={
              reduceMotion
                ? {}
                : {
                    scale: [1, 1.025, 1],
                  }
            }

            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />

        </motion.div>

      </div>
    </section>
  );
};

export default AboutBanner;