"use client";
import { useState } from "react";
import Image from "next/image";
import "../globals.css";

const projects = [
  { img: "pic.jpg", title: "Inclusive Education Reform" },
  { img: "banner.webp", title: "Climate Resilient Agriculture" },
  { img: "shared.webp", title: "Digital Health Systems" },
  { img: "plant.webp", title: "Community Peacebuilding" },
  { img: "GBV.webp", title: "Energy Transition Strategy" },
  { img: "wri.webp", title: "Gender Equality Advocacy" },
  { img: "spruce.webp", title: "Migration & Policy Research" },
  { img: "G.webp", title: "Youth Leadership Initiative" },
];

export default function Projects() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const scroll = (direction: "left" | "right") => {
    if (direction === "left" && currentIndex > 0) setCurrentIndex(currentIndex - 1);
    if (direction === "right" && currentIndex < projects.length - 1) setCurrentIndex(currentIndex + 1);
  };

  return (
    <section className="projects-section">
      <div className="container">
        <div className="projects-header">
          <div>
            <h2>Reos partners on the ground</h2>
            <p>Explore some of the initiatives we’ve been working on across different regions and sectors.</p>
          </div>
          <div className="arrow-buttons">
            <button onClick={() => scroll("left")} disabled={currentIndex === 0}>←</button>
            <button onClick={() => scroll("right")} disabled={currentIndex === projects.length - 1}>→</button>
          </div>
        </div>

        <div className="carousel">
          <div className="carousel-track" style={{ transform: `translateX(-${currentIndex * 300}px)` }}>
            {projects.map((item, i) => (
              <div key={i} className="card">
                <Image src={`/${item.img}`} alt={item.title} width={280} height={192} />
                <h3>{item.title}</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </div>
            ))}
          </div>
        </div>

        <a href="#articles" className="button cta-button">View all articles →</a>
      </div>
    </section>
  );
}
