import cover from "../assets/cover2.jpg";
import photo1 from "../assets/photoi.jpg";
import photo2 from "../assets/cover1.jpg";

import {
  GraduationCap,
  Compass,
  Phone,
} from "lucide-react";

function Hero() {
  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-[#071B3B]">
      
      {/* Background Image */}
      <img
        src={cover}
        alt="School Background"
        className="absolute inset-0 h-full w-full object-cover"
      />

      {/* Dark Blue Overlay */}
      <div className="absolute inset-0 bg-[#061B3A]/85"></div>

      {/* Extra Gradient Depth */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#04142d]/90 via-[#07214a]/70 to-transparent"></div>

      {/* Gold Glow */}
      <div className="absolute top-20 left-20 h-40 w-40 rounded-full bg-yellow-400/20 blur-3xl"></div>

      {/* Right Dotted Pattern */}
      <div className="absolute right-20 top-1/2 hidden md:grid grid-cols-8 gap-2 opacity-40">
        {[...Array(64)].map((_, i) => (
          <div
            key={i}
            className="h-1.5 w-1.5 rounded-full bg-yellow-400"
          ></div>
        ))}
      </div>

      {/* Main Content */}
      <div className="relative z-20 mx-auto flex min-h-screen max-w-7xl items-center px-6 md:px-12">
        <div className="grid w-full grid-cols-1 items-center gap-10 md:grid-cols-2">

          {/* LEFT CONTENT */}
          <div>

            {/* Top Badge */}
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-yellow-400 px-5 py-2 text-sm font-medium text-yellow-400">
              <GraduationCap size={16} />
              EDUCATION FOR ALL
            </div>

            {/* Heading */}
            <h1 className="text-5xl font-bold leading-tight text-white md:text-7xl">
              Samata
            </h1>

            <h2 className="text-5xl font-bold leading-tight text-red-500 md:text-7xl">
              Shiksha Niketan
            </h2>

            {/* Gold Line */}
            <div className="mt-6 h-1 w-24 bg-yellow-400"></div>

            {/* Paragraph */}
            <p className="mt-8 max-w-xl text-lg leading-8 text-gray-200 md:text-xl">
              Providing{" "}
              <span className="font-semibold text-yellow-400">
                quality education
              </span>{" "}
              for every child with experienced teachers, modern learning
              environment, and a bright future in Lalitpur.
            </p>

            {/* Buttons */}
            <div className="mt-10 flex flex-wrap gap-5">

              {/* Explore Button */}
              <button className="flex items-center gap-3 rounded-lg border border-yellow-400 bg-[#0A3C92] px-8 py-4 font-semibold text-white transition duration-300 hover:scale-105 hover:bg-[#1249a8]">
                <Compass size={18} />
                Explore
              </button>

              {/* Contact Button */}
              <button className="flex items-center gap-3 rounded-lg border border-yellow-400 bg-transparent px-8 py-4 font-semibold text-yellow-400 transition duration-300 hover:scale-105 hover:bg-yellow-400 hover:text-black">
                <Phone size={18} />
                Contact Us
              </button>

            </div>
          </div>

          {/* RIGHT IMAGES */}
          <div className="relative hidden h-[650px] md:block">

            {/* Main Large Tilted Card */}
            <div className="absolute right-24 top-8 rotate-[-3deg] rounded-[30px] border-[10px] border-white bg-white shadow-[0_0_30px_rgba(255,215,0,0.4)]">
              <img
                src={photo1}
                alt="Students"
                className="h-[350px] w-[550px] rounded-[20px] object-cover"
              />
            </div>

            {/* Smaller Floating Card */}
            <div className="absolute bottom-10 right-0 rotate-[6deg] rounded-[25px] border-[10px] border-white bg-white shadow-[0_0_25px_rgba(255,215,0,0.35)]">
              <img
                src={photo2}
                alt="School"
                className="h-[250px] w-[500px] rounded-[18px] object-cover"
              />
            </div>

            {/* Small Gold Shine */}
            <div className="absolute right-52 top-5 h-5 w-5 rounded-full bg-yellow-300 blur-sm"></div>
            <div className="absolute bottom-20 right-24 h-4 w-4 rounded-full bg-yellow-300 blur-sm"></div>
          </div>
        </div>
      </div>

      {/* Bottom Curved White Section */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
        <svg
          viewBox="0 0 1440 150"
          className="w-full"
          preserveAspectRatio="none"
        >
          <path
            fill="#ffffff"
            d="M0,64L80,74.7C160,85,320,107,480,112C640,117,800,107,960,90.7C1120,75,1280,53,1360,42.7L1440,32V160H0Z"
          ></path>

          <path
            fill="#D4AF37"
            d="M0,58L80,69C160,80,320,102,480,106C640,111,800,100,960,85C1120,69,1280,48,1360,37L1440,26V40C1280,55,1120,76,960,90C800,104,640,115,480,110C320,104,160,82,0,70Z"
          ></path>
        </svg>
      </div>
    </section>
  );
}

export default Hero;