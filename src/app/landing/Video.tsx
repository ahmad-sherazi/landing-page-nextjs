"use client";
import "../globals.css";

export default function VideoSection() {
  return (
    <section className="video-section">
      <div className="container">
        <h2>Your partners in systems change</h2>
        <div className="video-wrapper">
          <iframe
            src="https://www.youtube.com/embed/HAS9mPTe6kw"
            title="Reos Partners Changemakers Gathering 2025"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      </div>
    </section>
  );
}
