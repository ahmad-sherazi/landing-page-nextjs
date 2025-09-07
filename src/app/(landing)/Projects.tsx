"use client";
import { useState } from "react";
import Image from "next/image";

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
    if (direction === "left" && currentIndex > 0) {
      setCurrentIndex((prev) => prev - 1);
    }
    if (direction === "right" && currentIndex < projects.length - 1) {
      setCurrentIndex((prev) => prev + 1);
    }
  };

  return (
    <section className="bg-slate-50 py-20 px-8 relative">
      <div className="max-w-7xl mx-auto relative">
        {/* Heading + Arrows */}
        <div className="flex justify-between items-start">
          <div>
            <h2 className="text-3xl md:text-4xl font-semibold text-red-900 leading-snug">
              Reos partners on the ground
            </h2>
            <p className="mt-4 text-lg text-slate-600 max-w-2xl">
              Explore some of the initiatives we’ve been working on across
              different regions and sectors.
            </p>
          </div>

          {/* Arrows */}
          <div className="flex gap-3 mt-2">
            <button
              onClick={() => scroll("left")}
              disabled={currentIndex === 0}
              className={`w-14 h-14 rounded-full flex items-center justify-center font-bold text-lg shadow-lg transition
                ${
                  currentIndex === 0
                    ? "bg-gray-300 text-white cursor-not-allowed"
                    : "bg-orange-500 text-white hover:bg-orange-600"
                }`}
            >
              ←
            </button>
            <button
              onClick={() => scroll("right")}
              disabled={currentIndex === projects.length - 1}
              className={`w-14 h-14 rounded-full flex items-center justify-center font-bold text-lg shadow-lg transition
                ${
                  currentIndex === projects.length - 1
                    ? "bg-gray-300 text-white cursor-not-allowed"
                    : "bg-orange-500 text-white hover:bg-orange-600"
                }`}
            >
              →
            </button>
          </div>
        </div>

        {/* Carousel container */}
        <div className="mt-12 overflow-hidden relative">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * 300}px)` }}
          >
            {projects.map((item, i) => (
              <div
                key={i}
                className="min-w-[280px] max-w-[280px] mx-2 bg-white border rounded-lg overflow-hidden shadow-sm hover:shadow-2xl transition-transform duration-300 ease-out hover:scale-105"
              >
                <Image
                  src={`/${item.img}`}
                  alt={item.title}
                  width={280}
                  height={192}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6 text-left">
                  <h3 className="text-xl font-semibold text-slate-900">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-slate-600 text-sm">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Integer ut orci nec elit cursus tincidunt.
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <a
            href="#articles"
            className="inline-block rounded-md bg-orange-500 text-white px-8 py-3 font-semibold hover:bg-yellow-300 hover:text-slate-900 transition"
          >
            View all articles →
          </a>
        </div>
      </div>
    </section>
  );
}
