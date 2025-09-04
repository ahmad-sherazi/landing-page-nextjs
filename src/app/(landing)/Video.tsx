export default function VideoSection() {
  return (
    <section
      className="relative py-20 bg-red-900"
      style={{ backgroundImage: "url('/bg2.webp')",
         backgroundSize: "cover",
        backgroundPosition: "center",
       }} // ✅ change to your actual filename
    >
      <div className="max-w-6xl mx-auto text-center px-6">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-semibold text-yellow-400 mb-10">
          Your partners in systems change
        </h2>

        {/* Video Embed */}
        <div className="flex justify-center">
          <iframe
            className="w-[800px] h-[450px] md:w-[950px] md:h-[520px] rounded-md shadow-lg"
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
