export default function Hero() {
  return (
    <section
      className="relative h-screen bg-cover bg-center flex"
      style={{ backgroundImage: "url('/banner.webp')" }} // your image
    >
      {/* Overlay for readability (lighter now) */}
      <div className="absolute inset-0 bg-black/30"></div>

      <div className="relative max-w-7xl mx-auto px-6 flex items-start">
        <div className="w-full md:w-2/3 lg:w-1/2 mt-32">
          <h1 className="text-4xl md:text-4xl lg:text-4xl font-semibold text-white leading-snug">
            We help people work together
            <br />
            across differences to achieve
            <br />
            system change
          </h1>

          <p className="mt-6 text-lg md:text-xl text-gray-200 leading-relaxed">
            In our ever-changing world, traditional approaches to addressing
            crucial societal problems are becoming increasingly obsolete.
          </p>

          <a
            href="#contact"
            className="mt-8 inline-block bg-orange-500 text-white px-8 py-3 rounded-md font-semibold hover:bg-yellow-300 hover:text-black transition"
          >
            Learn more →
          </a>
        </div>
      </div>
    </section>
  );
}
