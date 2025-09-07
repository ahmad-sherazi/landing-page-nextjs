"use client";
import React from "react";

export default function Systemic() {
  return (
    <section className="systemic-section">
      <div className="systemic-container">
        {/* Left column: Heading + Text + CTA */}
        <div className="systemic-left">
          <h1>
            We need systemic, <br />
            collaborative, and creative approaches
            <br />
            to meet the challenges of our times
          </h1>
          <p>
            In our ever-changing world, traditional approaches to addressing
            crucial societal problems are becoming increasingly obsolete.
          </p>
          <p>
            As a social impact company, we design and facilitate innovative,
            adaptive strategies that enable groups of diverse stakeholders to
            work together, allowing the potential for fast, big, and fair
            results.
          </p>
          <p>
            Each situation is unique, so we tailor our approach accordingly and
            co-create with our partners.
          </p>
          <div className="mt-8">
            <a href="#contact">Learn more →</a>
          </div>
        </div>

        {/* Right column: Cards */}
        <div className="systemic-right">
          {[
            {
              icon: (
                <svg
                  width="20"
                  height="20"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M4 4h20v20H4z" />
                </svg>
              ),
              title: "Move from theory to impact",
              desc: "Achieve positive real-world outcomes for your organisation and society.",
            },
            {
              icon: (
                <svg
                  width="20"
                  height="20"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <circle cx="14" cy="14" r="10" />
                </svg>
              ),
              title: "Become agents of change",
              desc: "Drive transformative change on community, national, and international levels.",
            },
            {
              icon: (
                <svg
                  width="20"
                  height="20"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <rect x="6" y="6" width="16" height="16" rx="2" />
                </svg>
              ),
              title: "Practice social innovation",
              desc: "Build your capabilities to innovate in the face of complex challenges.",
            },
            {
              icon: (
                <svg
                  width="20"
                  height="20"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M12 2v20M2 12h20" />
                </svg>
              ),
              title: "Create system-level results",
              desc: "Discover new ways of approaching a stuck problem with a systemic perspective.",
            },
            {
              icon: (
                <svg
                  width="20"
                  height="20"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M2 12h8l2 6 2-6h8" />
                </svg>
              ),
              title: "Unblock polarised situations",
              desc: "Move beyond debating, judging, and negotiating toward dialogue and collaboration.",
            },
          ].map((item, index) => (
            <div key={index} className="systemic-card">
              <div className="systemic-card-icon">{item.icon}</div>
              <div className="systemic-card-text">
                <p>{item.title}</p>
                <p>{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
