// src/app/(landing)/Systemic.tsx
export default function Systemic() {
  return (
    <section className="bg-white py-20 px-8">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-start">
        
        {/* Left column: Heading + Text + CTA */}
        <div>
        <h1 className="text-3xl md:text-4xl font-semibold leading-snug text-red-900">
  We need systemic, <br/>collaborative, and creative approaches
  to meet the <br/> challenges of our times
</h1>
          <p className="mt-6 text-lg text-slate-700">
            In our ever-changing world, traditional approaches to addressing crucial societal 
            problems are becoming increasingly obsolete.
          </p>
          <p className="mt-4 text-lg text-slate-700">
            As a social impact company, we design and facilitate innovative, adaptive strategies 
            that enable groups of diverse stakeholders to work together, allowing the potential 
            for fast, big, and fair results.
          </p>
          <p className="mt-4 text-lg text-slate-700">
            Each situation is unique, so we tailor our approach accordingly and co-create with our partners.
          </p>

          <div className="mt-8">
            <a
              href="#contact"
              className="inline-block rounded-md bg-orange-500 text-white px-8 py-3 font-semibold hover:bg-orange-600 transition"
            >
              Learn more →
            </a>
          </div>
        </div>

        {/* Right column: Cards */}
        <div className="space-y-8">
          {/* Card 1 */}
          <div className="flex items-start gap-4">
            <span className="text-orange-500">
              {/* Group 8666 icon placeholder */}
              <svg width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M4 4h20v20H4z" />
              </svg>
            </span>
            <div>
              <p className="text-xl font-bold text-slate-900">Move from theory to impact</p>
              <p className="mt-2 text-slate-700">
                Achieve positive real-world outcomes for your organisation and society.
              </p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="flex items-start gap-4">
            <span className="text-orange-500">
              {/* Group 8666 icon placeholder */}
              <svg width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="14" cy="14" r="10" />
              </svg>
            </span>
            <div>
              <p className="text-xl font-bold text-slate-900">Become agents of change</p>
              <p className="mt-2 text-slate-700">
                Drive transformative change on community, national, and international levels.
              </p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="flex items-start gap-4">
            <span className="text-orange-500">
              {/* Group 8664 icon placeholder */}
              <svg width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="6" y="6" width="16" height="16" rx="2" />
              </svg>
            </span>
            <div>
              <p className="text-xl font-bold text-slate-900">Practice social innovation</p>
              <p className="mt-2 text-slate-700">
                Build your capabilities to innovate in the face of complex challenges.
              </p>
            </div>
          </div>

          {/* Card 4 */}
          <div className="flex items-start gap-4">
            <span className="text-orange-500">
              {/* Group 8662 icon placeholder */}
              <svg width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 2v20M2 12h20" />
              </svg>
            </span>
            <div>
              <p className="text-xl font-bold text-slate-900">Create system-level results</p>
              <p className="mt-2 text-slate-700">
                Discover new ways of approaching a stuck problem with a systemic perspective.
              </p>
            </div>
          </div>

          {/* Card 5 */}
          <div className="flex items-start gap-4">
            <span className="text-orange-500">
              {/* Group 8663 icon placeholder */}
              <svg width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M2 12h8l2 6 2-6h8" />
              </svg>
            </span>
            <div>
              <p className="text-xl font-bold text-slate-900">Unblock polarised situations</p>
              <p className="mt-2 text-slate-700">
                Move beyond debating, judging, and negotiating toward dialogue and collaboration.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
