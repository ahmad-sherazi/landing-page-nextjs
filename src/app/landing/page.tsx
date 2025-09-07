// src/app/landing/page.tsx
export const dynamic = "force-dynamic";
import Hero from './Hero';
import Navbar from './Navbar';
import Systemic from './Systemic';
import Expertise from './Expertise';
import Projects from './Projects';
import Testimonials from './Testimonials';
import Video from './Video';
import Footer from './Footer';

export default function LandingPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <Systemic />
      <Expertise />
      <Testimonials />
      <Projects />
      <Video />
      <Footer />
    </main>
  );
}
