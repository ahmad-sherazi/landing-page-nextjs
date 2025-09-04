// components/Footer.tsx
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#1f2029] text-white relative">
      {/* Content Section */}
      <div className="max-w-7xl mx-auto px-8 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Logo + Social */}
          <div>
            <Image
              src="/logo.svg" // replace with your logo
              alt="Reos Partners"
              width={180}
              height={80}
            />
            <p className="mt-4">Connect with us</p>
            <div className="flex space-x-4 mt-2">
              <Link href="#"><span className="sr-only">LinkedIn</span>🔗</Link>
              <Link href="#"><span className="sr-only">YouTube</span>▶️</Link>
              <Link href="#"><span className="sr-only">Facebook</span>📘</Link>
            </div>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-bold mb-3">Company</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="#">Who we are</Link></li>
              <li><Link href="#">Our people</Link></li>
              <li><Link href="#">Careers</Link></li>
              <li><Link href="#">Contact</Link></li>
            </ul>
          </div>

          {/* What we do */}
          <div>
            <h4 className="font-bold mb-3">What we do</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="#">Our solutions</Link></li>
              <li><Link href="#">How we work</Link></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="flex flex-col justify-between min-h-[420px]">
            <div>
              <h4 className="font-bold mb-4 text-lg">Subscribe to our newsletter</h4>
              <form className="space-y-3">
                <div className="flex space-x-2">
                  <input
                    type="text"
                    placeholder="First Name*"
                    className="w-1/2 p-2 rounded bg-gray-800 border border-gray-600 text-sm"
                  />
                  <input
                    type="text"
                    placeholder="Last Name*"
                    className="w-1/2 p-2 rounded bg-gray-800 border border-gray-600 text-sm"
                  />
                </div>
                <input
                  type="email"
                  placeholder="Your Email Address*"
                  className="w-full p-2 rounded bg-gray-800 border border-gray-600 text-sm"
                />
                <input
                  type="text"
                  placeholder="Organisation Name*"
                  className="w-full p-2 rounded bg-gray-800 border border-gray-600 text-sm"
                />

                <label className="flex items-center space-x-2 text-sm">
                  <input type="checkbox" /> <span>Global</span>
                </label>
                <label className="flex items-center space-x-2 text-sm">
                  <input type="checkbox" /> <span>Moving Through Tough Terrain (Africa)</span>
                </label>

                <button className="w-full bg-yellow-500 text-black font-bold py-2 rounded">
                  Submit →
                </button>
              </form>
            </div>

            {/* Copyright only under this section */}
            <div className="text-xs text-gray-400 mt-6 text-center md:text-left">
              © 2025 Reos Partners. All Rights Reserved. |{" "}
              <Link href="#" className="hover:underline">
                Privacy Policy
              </Link>{" "}
              |{" "}
              <Link href="#" className="hover:underline">
                Data Collection Notice
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Image lower down */}
      <div className="relative w-full mt-12">
        <Image
          src="/footerpic.svg" // replace with your footer image
          alt="Footer Decoration"
          width={1600}
          height={200}
          className="w-full object-cover"
        />
      </div>
    </footer>
  );
}
