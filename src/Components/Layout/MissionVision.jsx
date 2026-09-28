import React from "react";
import { Target, Binoculars } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";

import "./MissionVision.css";

const MissionVision = () => {
  const reduceMotion = useReducedMotion();

  const items = [
    {
      icon: Target,
      title: "Our Mission",
      description:
        "To make in-store shopping simpler, faster and more engaging through smart technology and innovative solutions.",
    },
    {
      icon: Binoculars,
      title: "Our Vision",
      description:
        "To create a smarter, more connected retail world where technology enhances every shopping journey.",
    },
  ];

  return (
    <section className="mv-section">
      <div className="mv-container">
        <motion.div
          className="mv-heading"
          initial={reduceMotion ? false : { opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{
            duration: 0.75,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          <span>OUR MISSION & VISION</span>
          <h2>Building a Smarter Retail Future</h2>
        </motion.div>

        <div className="mv-grid">
          {items.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.article
                className="mv-card"
                key={item.title}
                initial={
                  reduceMotion ? false : { opacity: 0, y: 35 }
                }
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{
                  duration: 0.7,
                  delay: reduceMotion ? 0 : index * 0.15,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                <div className="mv-icon">
                  <Icon size={28} />
                </div>

                <div>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default MissionVision;