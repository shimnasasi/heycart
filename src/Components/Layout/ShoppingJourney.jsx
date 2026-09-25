
import React from "react";
import {
  ShoppingCart, Gift, ScanLine, CreditCard
} from "lucide-react";
import "./ShoppingJourney.css";

const steps = [
  {
    icon: ShoppingCart,
    title: "Start",
    text: "Take a smart cart at the entrance."
  },
  {
    icon: Gift,
    title: "Shop",
    text: "Find products and get personalized offers."
  },
  {
    icon: ScanLine,
    title: "Scan",
    text: "Scan items as you add to cart."
  },
  {
    icon: CreditCard,
    title: "Pay",
    text: "Checkout seamlessly in the cart."
  }
];

const ShoppingJourney = () => {
  return (
    <section id="journey" className="shopping-journey">
      <div className="journey-container">
        <div className="journey-heading">
          <p>HOW IT WORKS</p>
          <h2>A Simple Journey</h2>
          <span>
            From entry to checkout, Hey!Carts makes shopping effortless.
          </span>
        </div>

        <div className="journey-steps">
          {steps.map((step, index) => {
            const Icon = step.icon;

            return (
              <div className="journey-step" key={index}>
                <div className="journey-icon">
                  <Icon size={31} strokeWidth={1.8} />
                </div>

                <div className="journey-step-content">
                  <span className="journey-number">
                    {index + 1}
                  </span>
                  <h3>{step.title}</h3>
                  <p>{step.text}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ShoppingJourney;