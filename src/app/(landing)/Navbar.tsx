"use client";
import { useState, useEffect } from "react";
import { Search, Globe, Menu, X } from "lucide-react";
import Image from "next/image";
import "../globals.css";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`navbar ${scrolled ? "navbar-scrolled" : ""}`}>
      <div className="container">
        {/* Logo */}
        <Image src="/logo.svg" alt="Logo" width={120} height={40} />

        {/* Desktop Links */}
        <nav className="nav-links">
          <a href="#company">Company</a>
          <a href="#experience">Our experience</a>
          <a href="#services">What we do</a>
          <a href="#insights">Insights</a>
        </nav>

        {/* Desktop Icons + Button */}
        <div className="nav-actions">
          <Search />
          <Globe />
          <a href="#contact" className="button">Get in touch</a>
        </div>

        {/* Mobile Toggle Button */}
        <div className="nav-toggle" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <X /> : <Menu />}
        </div>

        {/* Mobile Dropdown Menu */}
        <div className={`mobile-menu ${menuOpen ? "open" : ""}`}>
          <a href="#company" onClick={() => setMenuOpen(false)}>Company</a>
          <a href="#experience" onClick={() => setMenuOpen(false)}>Our experience</a>
          <a href="#services" onClick={() => setMenuOpen(false)}>What we do</a>
          <a href="#insights" onClick={() => setMenuOpen(false)}>Insights</a>
          <a href="#contact" className="button" onClick={() => setMenuOpen(false)}>Get in touch</a>
        </div>
      </div>
    </header>
  );
}
