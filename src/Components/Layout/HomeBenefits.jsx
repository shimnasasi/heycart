
import React from "react";
import {
  ShoppingCart,
  Tag,
  CreditCard,
  Leaf
} from "lucide-react";

import {
  motion,
  useReducedMotion
} from "framer-motion";

import "./HomeBenefits.css";

const benefits = [
  {
    icon: ShoppingCart,
    title: "Smart Navigation",
    description:
      "Find products easily with in-aisle guidance."
  },
  {
    icon: Tag,
    title: "Personalized Offers",
    description:
      "Get relevant deals while you shop."
  },
  {
    icon: CreditCard,
    title: "Faster Payments",
    description:
      "Scan, pay and go — no long queues."
  },
  {
    icon: Leaf,
    title: "Sustainable Retail",
    description:
      "Less paper, less waste, a greener tomorrow."
  }
];

const HomeBenefits = () => {
  const reduceMotion = useReducedMotion();

  const headingAnimation = {
    initial: reduceMotion
      ? false
      : { opacity: 0, y: 40 },

    whileInView: {
      opacity: 1,
      y: 0
    },

    viewport: {
      once: true,
      amount: 0.3
    },

    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1]
    }
  };

  return (
    <section
      id="technology"
      className="home-benefits"
    >
      <div className="benefits-container">

        {/* ANIMATED HEADING */}

        <motion.div
          className="benefits-heading"
          {...headingAnimation}
        >
          <p>WHY HEY!CARTS</p>

          <h2>
            A Smarter Shopping Experience
            <br />
            for Everyone
          </h2>

          <span>
            Hey!Carts combines smart technology and
            retail innovation to create a seamless,
            engaging and sustainable shopping journey.
          </span>
        </motion.div>

        {/* ANIMATED BENEFIT CARDS */}

        <div className="benefits-grid">
          {benefits.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                className="benefit-card"
                key={item.title}

                initial={
                  reduceMotion
                    ? false
                    : { opacity: 0, y: 45 }
                }

                whileInView={{
                  opacity: 1,
                  y: 0
                }}

                viewport={{
                  once: true,
                  amount: 0.15
                }}

                transition={{
                  duration: 0.7,
                  delay: reduceMotion
                    ? 0
                    : index * 0.13,
                  ease: [0.22, 1, 0.36, 1]
                }}
              >
                <div className="benefit-icon">
                  <Icon
                    size={30}
                    strokeWidth={1.8}
                  />
                </div>

                <h3>{item.title}</h3>

                <p>{item.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HomeBenefits;
