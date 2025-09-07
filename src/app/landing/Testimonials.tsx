"use client";
import { useState } from "react";
import "../globals.css";

const testimonials = [
  {
    quote: `Together with our friends from Reos Partners, we have pioneered a new approach to contribute to the realization of SDG16 – access to justice for all. We call it justice transformation. Reos has helped us organize and hold the deep conversations between justice leaders that are needed for that, conversations that are not about shallow change but deep transformation. Our inspiring partnership embodies the power of difference: between HiiL and Reos and between the justice leaders.`,
    name: "SAM MULLER",
    role: "CEO, HiiL (THE HAGUE INSTITUTE FOR INNOVATION OF LAW)",
  },
  {
    quote: `Reos Partners supported us in creating a multi-stakeholder dialogue that allowed us to break through polarization and move towards collaborative solutions. Their approach made a real difference in bringing unlikely allies together.`,
    name: "JANE DOE",
    role: "DIRECTOR, GLOBAL PEACE INITIATIVE",
  },
  {
    quote: `Working with Reos gave us the structure and courage to rethink how we approach systemic challenges. The results have been transformative for our teams and the communities we serve.`,
    name: "JOHN SMITH",
    role: "HEAD OF STRATEGY, CLIMATE ACTION NETWORK",
  },
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);

  return (
    <section className="testimonials-section">
      <div className="container">
        <div className="quote-container">
          <span className="quote-mark">“</span>
          <p className="quote-text">{testimonials[current].quote}</p>
        </div>
        <div className="author">
          <p className="author-name">{testimonials[current].name}</p>
          <p className="author-role">{testimonials[current].role}</p>
        </div>
        <div className="dots">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`dot ${current === i ? "active" : ""}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
