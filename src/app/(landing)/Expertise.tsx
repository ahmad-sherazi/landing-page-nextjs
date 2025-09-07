"use client";
import { useRef, useEffect } from "react";
import Image from "next/image";

export default function Expertise() {
  const scrollRef = useRef<HTMLDivElement>(null);

  // Disable mouse wheel and touchpad/trackpad scrolling
  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    const preventWheel = (e: WheelEvent) => {
      if (e.deltaX !== 0 || e.deltaY !== 0) {
        e.preventDefault();
      }
    };

    const preventTouch = (e: TouchEvent) => {
      if (e.cancelable) {
        e.preventDefault();
      }
    };

    el.addEventListener("wheel", preventWheel, { passive: false });
    el.addEventListener("touchmove", preventTouch, { passive: false });

    return () => {
      el.removeEventListener("wheel", preventWheel);
      el.removeEventListener("touchmove", preventTouch);
    };
  }, []);

  // Handle scroll by arrow buttons
  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: direction === "left" ? -300 : 300,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="bg-gray-100 py-20 px-8 relative">
      <div className="max-w-7xl mx-auto text-center relative">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-semibold text-red-900">
          Walking alongside you to address
          <br />
          society’s most pressing challenges
        </h2>
        <p className="mt-4 text-lg text-slate-600 max-w-3xl mx-auto">
          We support governments, intergovernmental agencies, businesses,
          foundations, and civil society organisations across a range of areas:
        </p>

        {/* Arrows */}
        <div className="flex justify-center gap-4 mt-8">
          <button
            onClick={() => scroll("left")}
            className="w-12 h-12 rounded-full bg-gray-200 text-black flex items-center justify-center font-bold text-lg hover:bg-orange-500 hover:text-white shadow-lg transition"
          >
            ←
          </button>
          <button
            onClick={() => scroll("right")}
            className="w-12 h-12 rounded-full bg-gray-200 text-black flex items-center justify-center font-bold text-lg hover:bg-orange-500 hover:text-white shadow-lg transition"
          >
            →
          </button>
        </div>

        {/* Scrollable Row */}
        <div
          ref={scrollRef}
          className="mt-12 flex gap-6 overflow-x-auto scroll-smooth no-scrollbar"
        >
          {[
            { img: "climate.webp", title: "Climate" },
            { img: "edu.webp", title: "Education" },
            { img: "energy.webp", title: "Energy" },
            { img: "food.svg", title: "Food Systems" },
            { img: "gender.webp", title: "Gender-based Violence" },
            { img: "health.webp", title: "Health" },
            { img: "right.svg", title: "Justice" },
            { img: "peace.svg", title: "Peace & Security" },
            { img: "info.svg", title: "Technology" },
          ].map((item, i) => (
            <div
              key={i}
              className="min-w-[220px] bg-white border rounded-lg p-6 flex flex-col items-center transition-transform duration-300 ease-out hover:scale-105 hover:shadow-2xl"
            >
              <Image
                src={`/${item.img}`}
                alt={item.title}
                width={64}
                height={64}
                className="w-16 h-16 object-contain"
              />
              <p className="mt-4 font-semibold text-slate-900">{item.title}</p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-12">
          <a
            href="#expertise"
            className="inline-block rounded-md bg-orange-500 text-white px-8 py-3 font-semibold hover:bg-yellow-300 hover:text-slate-900 transition"
          >
            See our areas of experience →
          </a>
        </div>
      </div>
    </section>
  );
}
