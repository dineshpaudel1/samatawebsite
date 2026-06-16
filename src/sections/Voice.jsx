import { useState } from "react";
import { X, Quote } from "lucide-react";

import photo1 from "../assets/rksir.jpg";
import photo2 from "../assets/sarojsir.jpg";
import photo3 from "../assets/teachers.jpg";

function Voice() {
  const [selectedVoice, setSelectedVoice] = useState(null);

  const voices = [
    {
      title: "Principal",
      image: photo1,
      quote:
        "Samata School has given our child a wonderful learning environment. The teachers are caring and supportive. We are happy with the discipline and education system.",
    },
    {
      title: "Vice-Principals",
      image: photo2,
      quote:
        "Teaching at Samata School is a rewarding experience. Students are enthusiastic and eager to learn every day.",
    },
    {
      title: "Teachers",
      image: photo3,
      quote:
        "Samata School played an important role in shaping my future. The memories, friendships, and lessons remain unforgettable.",
    },
  ];

  return (
    <>
      <section className="relative overflow-hidden bg-white py-24">

        {/* Glow Effects */}
        <div className="absolute top-20 left-20 h-52 w-52 rounded-full bg-yellow-400/10 blur-[120px]" />
        <div className="absolute bottom-20 right-20 h-52 w-52 rounded-full bg-red-500/10 blur-[120px]" />

        {/* Dotted Pattern */}
        <div className="absolute right-20 top-40 hidden md:grid grid-cols-6 gap-2 opacity-20">
          {[...Array(36)].map((_, i) => (
            <div
              key={i}
              className="h-1.5 w-1.5 rounded-full bg-yellow-400"
            />
          ))}
        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-6">

          {/* Heading */}
          <div className="text-center">
            <div className="mb-5 inline-block rounded-full border border-yellow-400 px-5 py-2 text-sm font-semibold text-yellow-500">
              Testimonials
            </div>

            <h2 className="text-3xl md:text-4xl lg:text-6xl font-bold">
              <span className="text-[#071B3B]">Valued</span>{" "}
              <span className="text-red-500">Voices</span>
            </h2>

            <div className="mx-auto mt-5 h-1 w-32 rounded-full bg-yellow-400"></div>

            <p className="mx-auto mt-6 max-w-2xl text-gray-600 text-sm md:text-base">
              Hear what parents, teachers and school leaders say about Samata
              Shiksha Niketan.
            </p>
          </div>

          {/* Cards */}
          <div className="mt-20 grid gap-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {voices.map((voice, index) => (
              <div
                key={index}
                onClick={() => setSelectedVoice(voice)}
                className={`group relative cursor-pointer overflow-hidden rounded-[30px] border-4 border-white shadow-2xl transition duration-500 hover:scale-105 ${
                  index === 1
                    ? "rotate-2"
                    : index === 2
                    ? "-rotate-2"
                    : ""
                }`}
              >
                {/* Image */}
                <img
                  src={voice.image}
                  alt={voice.title}
                  className="h-[320px] md:h-[500px] w-full object-cover transition duration-500 group-hover:scale-110"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />

                {/* Title */}
                <div className="absolute bottom-6 left-6">
                  <Quote className="mb-3 text-yellow-400" size={28} />

                  <h3 className="text-2xl md:text-3xl font-bold uppercase text-white">
                    {voice.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modal */}
      {selectedVoice && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 p-4 md:p-6 backdrop-blur-md">

          <div className="relative w-full max-w-5xl overflow-hidden rounded-[35px] border border-yellow-400/30 bg-[#071B3B] shadow-[0_0_40px_rgba(212,175,55,0.2)]">

            {/* Close Button */}
            <button
              onClick={() => setSelectedVoice(null)}
              className="absolute right-4 top-4 md:right-5 md:top-5 z-20 rounded-full bg-red-500 p-2 md:p-3 text-white hover:scale-110"
            >
              <X size={22} />
            </button>

            <div className="grid grid-cols-1 md:grid-cols-2">
              
              {/* Image */}
              <img
                src={selectedVoice.image}
                alt={selectedVoice.title}
                className="h-[300px] md:h-full w-full object-cover"
              />

              {/* Content */}
              <div className="flex items-center p-6 md:p-10 lg:p-14">
                <div>
                  <div className="mb-5 inline-flex rounded-full border border-yellow-400 px-4 py-2 text-sm font-semibold text-yellow-400">
                    Samata School Voice
                  </div>

                  <h2 className="text-2xl md:text-4xl font-bold text-white">
                    {selectedVoice.title}
                  </h2>

                  <div className="mt-4 h-1 w-24 bg-yellow-400"></div>

                  <p className="mt-6 md:mt-8 text-base md:text-lg leading-7 md:leading-9 text-gray-300">
                    {selectedVoice.quote}
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      )}
    </>
  );
}

export default Voice;