
import React from "react";
import {
  ShoppingCart,
  Zap,
  Leaf,
  Play,
  ArrowRight
} from "lucide-react";

import {
  motion,
  useReducedMotion
} from "framer-motion";

import trolley from "../Images/trolley1.png";
import "./HomeBanner.css";

const HomeBanner = () => {
  const reduceMotion = useReducedMotion();

  const reveal = (delay = 0) => ({
    initial: reduceMotion
      ? false
      : { opacity: 0, y: 35 },
    animate: { opacity: 1, y: 0 },
    transition: {
      duration: 0.75,
      delay: reduceMotion ? 0 : delay,
      ease: [0.22, 1, 0.36, 1]
    }
  });

  const features = [
    {
      icon: ShoppingCart,
      title: "Smart Shopping Experience",
      description: "Find, scan, pay — all in one cart."
    },
    {
      icon: Zap,
      title: "Faster Checkout",
      description: "Skip the lines. Save time."
    },
    {
      icon: Leaf,
      title: "A Greener Tomorrow",
      description:
        "Smarter retail for a healthier planet."
    }
  ];

  return (
    <section className="hc-hero" id="home">
      <div className="hc-hero-container">

        {/* LEFT CONTENT */}

        <div className="hc-hero-content">
          <motion.span
            className="hc-small-title"
            {...reveal(0.1)}
          >
            SMART CARTS FOR A SMARTER TOMORROW
          </motion.span>

          <motion.h1 {...reveal(0.25)}>
            It's more
            <br />
            than shopping<span>.</span>
          </motion.h1>

          <motion.p
            className="hc-hero-description"
            {...reveal(0.4)}
          >
            Hey!Carts brings a smarter, faster and more
            enjoyable shopping experience to every store.
            Shop smarter. Live better.
          </motion.p>

          <motion.div
            className="hc-hero-buttons"
            {...reveal(0.55)}
          >
            <a
              href="#products"
              className="hc-primary-btn"
            >
              Shop Smarter
              <ArrowRight size={17} />
            </a>

            <a
              href="#technology"
              className="hc-video-btn"
            >
              <span>
                <Play size={14} fill="currentColor" />
              </span>
              Watch Video
            </a>
          </motion.div>

          {/* FEATURE CARDS */}

          <div className="hc-hero-features">
            {features.map((feature, index) => {
              const Icon = feature.icon;

              return (
                <motion.div
                  className="hc-hero-feature"
                  key={feature.title}
                  initial={
                    reduceMotion
                      ? false
                      : { opacity: 0, y: 30 }
                  }
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.65,
                    delay: reduceMotion
                      ? 0
                      : 0.7 + index * 0.15
                  }}
                >
                  <div className="hc-hero-feature-icon">
                    <Icon size={21} />
                  </div>

                  <h4>{feature.title}</h4>
                  <p>{feature.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* RIGHT TROLLEY */}

        <motion.div
          className="hc-hero-image-area"
          initial={
            reduceMotion
              ? false
              : { opacity: 0, x: 65, scale: 0.94 }
          }
          animate={{
            opacity: 1,
            x: 0,
            scale: 1
          }}
          transition={{
            duration: 1,
            delay: reduceMotion ? 0 : 0.25,
            ease: [0.22, 1, 0.36, 1]
          }}
        >
          <div className="hc-hero-background" />

          <motion.img
            src={trolley}
            alt="Hey!Carts smart shopping trolley"
            className="hc-hero-trolley"
            animate={
              reduceMotion
                ? {}
                : { y: [0, -13, 0] }
            }
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />

          <div className="hc-hero-image-text">
            Shop
            <br />
            Smarter
            <br />
            <span>Live Better</span>
          </div>
        </motion.div>
      </div>

      {/* RETAILER STRIP */}

      <div className="hc-retailer-strip">
        <span>BUILT FOR MODERN RETAILERS</span>

        <div className="hc-retailer-names">
          <span>Smart Retail</span>
          <span>Seamless Checkout</span>
          <span>Connected Stores</span>
        </div>
      </div>
    </section>
  );
};

export default HomeBanner;
