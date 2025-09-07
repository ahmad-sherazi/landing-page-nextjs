"use client";
import "../globals.css";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="hero">
      <div className="overlay"></div>
      <div className="hero-content">
        <h1>We help people work together across differences to achieve system change</h1>
        <p>In our ever-changing world, traditional approaches to addressing crucial societal problems are becoming increasingly obsolete.</p>
        <a href="#contact" className="button">Learn more →</a>
      </div>
    </section>
  );
}
