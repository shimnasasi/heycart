
import React from "react";
import { Leaf, Globe2 } from "lucide-react";
import {
  motion,
  useReducedMotion
} from "framer-motion";

import "./Sustainability.css";

const Sustainability = () => {
  const reduceMotion = useReducedMotion();

  const reveal = (delay = 0, x = 0, y = 30) => ({
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
      amount: 0.2
    },

    transition: {
      duration: 0.8,
      delay: reduceMotion ? 0 : delay,
      ease: [0.22, 1, 0.36, 1]
    }
  });

  return (
    <section id="about" className="sustainability">
      <div className="sustainability-container">

        {/* LEFT CONTENT */}

        <div className="sustainability-content">

          <motion.p
            className="sustainability-label"
            {...reveal(0.1)}
          >
            BUILT FOR A BETTER TOMORROW
          </motion.p>

          <motion.h2 {...reveal(0.2)}>
            Smarter Retail.
            <br />
            A Healthier Planet.
          </motion.h2>

          <motion.p
            className="sustainability-description"
            {...reveal(0.3)}
          >
            Hey!Carts helps retailers reduce paper waste,
            optimize store operations and build a more
            sustainable future.
          </motion.p>

          {/* SUSTAINABILITY CARDS */}

          <div className="sustainability-stats">

            <motion.div
              className="sustainability-stat"
              {...reveal(0.4, 0, 25)}
            >
              <div className="stat-icon">
                <Leaf size={27} />
              </div>

              <div>
                <strong>Less Waste</strong>
                <p>Digital-first shopping</p>
              </div>
            </motion.div>

            <motion.div
              className="sustainability-stat"
              {...reveal(0.55, 0, 25)}
            >
              <div className="stat-icon">
                <Globe2 size={27} />
              </div>

              <div>
                <strong>Greener</strong>
                <p>A better tomorrow</p>
              </div>
            </motion.div>

          </div>
        </div>

        {/* RIGHT IMAGE */}

        <motion.div
          className="sustainability-image"
          {...reveal(0.2, 60, 0)}
        >
          <img
            src="https://images.pexels.com/photos/1072824/pexels-photo-1072824.jpeg?auto=compress&cs=tinysrgb&w=1200"
            alt="Green seedling growing in soil"
            loading="lazy"
          />

          <motion.div
            className="sustainability-image-text"
            initial={
              reduceMotion
                ? false
                : { opacity: 0, y: 30 }
            }
            whileInView={{
              opacity: 1,
              y: 0
            }}
            viewport={{ once: true }}
            transition={{
              duration: 0.7,
              delay: reduceMotion ? 0 : 0.7
            }}
          >
            Small
            <br />
            Steps.
            <br />
            Big
            <br />
            Impact.
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
};

export default Sustainability;
