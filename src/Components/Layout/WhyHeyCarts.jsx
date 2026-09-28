import React from "react";
import { ShoppingCart, BarChart3, Leaf } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";

import "./WhyHeyCarts.css";

const WhyHeyCarts = () => {
  const reduceMotion = useReducedMotion();

  const features = [
    {
      icon: ShoppingCart,
      title: "Shopper First",
      text:
        "Intuitive navigation, personalized offers and a seamless checkout experience.",
    },
    {
      icon: BarChart3,
      title: "Retail Intelligence",
      text:
        "Real-time insights and smarter store operations for modern retailers.",
    },
    {
      icon: Leaf,
      title: "Built for Tomorrow",
      text:
        "Digital-first solutions that reduce resource use and support a healthier planet.",
    },
  ];

  return (
    <section className="why-section">
      <div className="why-inner">
        <motion.div
          className="why-title"
          initial={reduceMotion ? false : { opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.7,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          <span>WHAT MAKES HEY!CARTS DIFFERENT</span>
          <h2>Designed for a Smarter Tomorrow</h2>
        </motion.div>

        <div className="why-cards">
          {features.map((feature, index) => {
            const Icon = feature.icon;

            return (
              <motion.article
                className="why-feature"
                key={feature.title}
                initial={
                  reduceMotion ? false : { opacity: 0, y: 35 }
                }
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.65,
                  delay: reduceMotion ? 0 : index * 0.15,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                <div className="why-feature-icon">
                  <Icon size={27} />
                </div>

                <h3>{feature.title}</h3>
                <p>{feature.text}</p>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyHeyCarts;