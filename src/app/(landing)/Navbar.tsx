"use client";
import { useState, useEffect } from "react";
import { Search, Globe } from "lucide-react";
import Image from "next/image";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition duration-300 ${
        scrolled ? "bg-black shadow-md" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
        {/* Logo */}
        <Image
          src="/logo.svg"
          alt="Company Logo"
          width={120}
          height={40}
          className="h-8 w-auto transition duration-300"
          priority
        />

        {/* Navigation + Right Section */}
        <div className="flex items-center gap-6">
          {/* Links */}
          <nav className="hidden md:flex gap-6 text-white font-medium">
            <a href="#company" className="hover:text-orange-500 transition">
              Company
            </a>
            <a href="#experience" className="hover:text-orange-500 transition">
              Our experience
            </a>
            <a href="#services" className="hover:text-orange-500 transition">
              What we do
            </a>
            <a href="#insights" className="hover:text-orange-500 transition">
              Insights
            </a>
          </nav>

          {/* Right side icons + button */}
          <div className="flex items-center gap-4">
            <Search className="w-5 h-5 text-white cursor-pointer hover:text-orange-500 transition" />
            <Globe className="w-5 h-5 text-white cursor-pointer hover:text-orange-500 transition" />
            <a
              href="#contact"
              className="bg-orange-500 text-white px-4 py-2 rounded-md font-semibold hover:bg-yellow-300 hover:text-black transition"
            >
              Get in touch
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
