import React from "react";
import { Leaf, Globe2 } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";

import plant from "../Images/tab2.png";
import "./AboutSustainability.css";

const AboutSustainability = () => {
  const reduceMotion = useReducedMotion();

  return (
    <section className="as-section">
      <div className="as-container">
        <motion.div
          className="as-content"
          initial={reduceMotion ? false : { opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{
            duration: 0.8,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          <span className="as-label">OUR COMMITMENT</span>

          <h2>
            Smarter Retail.
            <br />
            A Healthier <strong>Planet.</strong>
          </h2>

          <p>
            We believe innovation and sustainability go hand in hand. Hey!Carts
            helps retailers reduce paper waste, optimize store operations and
            build a more sustainable future.
          </p>

          <div className="as-stats">
            <div className="as-stat">
              <div className="as-stat-icon">
                <Leaf size={24} />
              </div>

              <div>
                <strong>60%</strong>
                <span>Less Paper Waste</span>
              </div>
            </div>

            <div className="as-stat">
              <div className="as-stat-icon">
                <Globe2 size={24} />
              </div>

              <div>
                <strong>100%</strong>
                <span>Commitment to a Greener Tomorrow</span>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          className="as-image"
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
          <img src={plant} alt="Sustainable retail future" />

          <div className="as-image-copy">
            Small Steps.
            <br />
            <strong>Big Impact.</strong>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSustainability;