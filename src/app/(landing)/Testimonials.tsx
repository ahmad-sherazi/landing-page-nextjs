"use client";
import { useState } from "react";

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
    <section
      className="relative bg-gray-900 text-white py-20 px-6 md:px-12 flex items-center justify-center"
      style={{
        backgroundImage: "url('/bgpic.webp')", // ✅ directly from public
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="max-w-5xl text-left">
        {/* Quote icon + Text */}
        <div className="flex items-start gap-6">
          <span className="text-orange-500 text-6xl font-bold">“</span>
          <p className="text-lg md:text-xl leading-relaxed">
            {testimonials[current].quote}
          </p>
        </div>

        {/* Author */}
        <div className="mt-8">
          <p className="text-orange-500 font-bold">
            {testimonials[current].name}
          </p>
          <p className="text-gray-300 text-sm">{testimonials[current].role}</p>
        </div>

        {/* Dots Navigation */}
        <div className="flex gap-3 mt-8">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`w-3 h-3 rounded-full transition ${
                current === i ? "bg-white" : "bg-gray-500"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
