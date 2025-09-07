"use client";
import { useRef, useEffect } from "react";
import Image from "next/image";
import "../globals.css";

export default function Expertise() {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    const preventWheel = (e: WheelEvent) => {
      if (e.deltaX !== 0 || e.deltaY !== 0) e.preventDefault();
    };
    const preventTouch = (e: TouchEvent) => {
      if (e.cancelable) e.preventDefault();
    };

    el.addEventListener("wheel", preventWheel, { passive: false });
    el.addEventListener("touchmove", preventTouch, { passive: false });

    return () => {
      el.removeEventListener("wheel", preventWheel);
      el.removeEventListener("touchmove", preventTouch);
    };
  }, []);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: direction === "left" ? -300 : 300,
        behavior: "smooth",
      });
    }
  };

  const items = [
    { img: "climate.webp", title: "Climate" },
    { img: "edu.webp", title: "Education" },
    { img: "energy.webp", title: "Energy" },
    { img: "food.svg", title: "Food Systems" },
    { img: "gender.webp", title: "Gender-based Violence" },
    { img: "health.webp", title: "Health" },
    { img: "right.svg", title: "Justice" },
    { img: "peace.svg", title: "Peace & Security" },
    { img: "info.svg", title: "Technology" },
  ];

  return (
    <section className="expertise-section">
      <div className="container text-center">
        <h2>Walking alongside you to address society’s most pressing challenges</h2>
        <p>We support governments, intergovernmental agencies, businesses, foundations, and civil society organisations across a range of areas:</p>

        <div className="scroll-buttons">
          <button onClick={() => scroll("left")}>←</button>
          <button onClick={() => scroll("right")}>→</button>
        </div>

        <div className="scroll-container no-scrollbar" ref={scrollRef}>
          {items.map((item, i) => (
            <div key={i} className="card">
              <Image src={`/${item.img}`} alt={item.title} width={64} height={64} />
              <p>{item.title}</p>
            </div>
          ))}
        </div>

        <a href="#expertise" className="button cta-button">See our areas of experience →</a>
      </div>
    </section>
  );
}
