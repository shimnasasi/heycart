
import React from "react";
import { ArrowRight } from "lucide-react";
import "./ContactCTA.css";

const ContactCTA = () => {
  return (
    <section id="contact" className="contact-cta">
      <div className="contact-cta-container">
        <div>
          <p>READY TO TRANSFORM YOUR STORE?</p>

          <h2>
            Let's Build the Future of Retail Together.
          </h2>

          <span>
            Partner with Hey!Carts and create smarter,
            more engaging shopping experiences.
          </span>
        </div>

        <a href="mailto:hello@heycarts.com" className="contact-cta-btn">
          Get Started <ArrowRight size={19} />
        </a>
      </div>
    </section>
  );
};

export default ContactCTA;