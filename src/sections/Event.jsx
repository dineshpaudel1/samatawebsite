import { useState } from "react";
import { ChevronLeft, ChevronRight, CalendarDays } from "lucide-react";

import photo1 from "../assets/photo1.jpeg";
import photo2 from "../assets/photo2.jpeg";
import photo3 from "../assets/photo3.jpeg";
import photo4 from "../assets/photo4.jpeg";
import photo5 from "../assets/photo5.jpeg";

function Event() {
  const events = [
    {
      title: "Parents Day",
      description:
        "Celebrating the love, care, and support of our parents.",
      image: photo1,
    },
    {
      title: "Annual Day",
      description:
        "A joyful celebration of student talent and achievements.",
      image: photo2,
    },
    {
      title: "Saraswati Puja",
      description:
        "Seeking blessings of wisdom and knowledge together.",
      image: photo3,
    },
    {
      title: "Sports Day",
      description:
        "Encouraging teamwork, discipline, and healthy competition.",
      image: photo4,
    },
    {
      title: "Graduation Day",
      description:
        "Celebrating student success and new beginnings.",
      image: photo5,
    },
  ];

  const visibleCards = 3;
  const maxIndex = events.length - visibleCards;

  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    if (currentIndex < maxIndex) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const visibleEvents = events.slice(
    currentIndex,
    currentIndex + visibleCards
  );

  return (
    <section className="relative overflow-hidden bg-[#071B3B] py-24">
      
      {/* Background Glow */}
      <div className="absolute top-20 left-20 h-52 w-52 rounded-full bg-yellow-400/20 blur-[120px]" />
      <div className="absolute bottom-20 right-20 h-52 w-52 rounded-full bg-red-500/20 blur-[120px]" />

      {/* Dotted Pattern */}
      <div className="absolute right-16 top-32 hidden md:grid grid-cols-8 gap-2 opacity-30">
        {[...Array(64)].map((_, i) => (
          <div
            key={i}
            className="h-1.5 w-1.5 rounded-full bg-yellow-400"
          ></div>
        ))}
      </div>

      {/* Heading */}
      <div className="relative z-10 mx-auto max-w-7xl px-6 text-center">
        
        <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-yellow-400 px-5 py-2 text-sm font-semibold text-yellow-400">
          <CalendarDays size={16} />
          SCHOOL EVENTS
        </div>

        <h2 className="text-4xl font-bold md:text-6xl">
          <span className="text-white">Samata</span>{" "}
          <span className="text-red-500">Events</span>
        </h2>

        <div className="mx-auto mt-5 h-1 w-32 bg-yellow-400"></div>

        <p className="mx-auto mt-6 max-w-2xl text-gray-300">
          Explore the memorable celebrations, achievements, and activities
          that make student life vibrant at Samata Shiksha Niketan.
        </p>
      </div>

      {/* Slider Section */}
      <div className="relative mx-auto mt-20 max-w-7xl px-6">

        {/* Left Button */}
        <button
          onClick={handlePrev}
          disabled={currentIndex === 0}
          className={`absolute left-0 top-1/2 z-20 hidden h-14 w-14 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full lg:flex
          ${
            currentIndex === 0
              ? "bg-gray-500 text-white cursor-not-allowed"
              : "bg-yellow-400 text-black hover:scale-110"
          }`}
        >
          <ChevronLeft size={28} />
        </button>

        {/* Event Cards */}
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          {visibleEvents.map((event, index) => (
            <div
              key={index}
              className={`group relative overflow-hidden rounded-[30px] border border-white/10 bg-white/5 backdrop-blur-lg shadow-2xl transition duration-500 hover:-translate-y-3 ${
                index === 1
                  ? "lg:translate-y-6"
                  : ""
              }`}
            >
              {/* Image */}
              <div className="relative h-[320px] overflow-hidden">
                <img
                  src={event.image}
                  alt={event.title}
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              </div>

              {/* Content */}
              <div className="p-8 text-center">
                <h3 className="text-3xl font-bold text-white">
                  {event.title}
                </h3>

                <div className="mx-auto mt-4 h-1 w-16 bg-yellow-400"></div>

                <p className="mt-5 text-gray-300 leading-8">
                  {event.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Right Button */}
        <button
          onClick={handleNext}
          disabled={currentIndex === maxIndex}
          className={`absolute right-0 top-1/2 z-20 hidden h-14 w-14 translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full lg:flex
          ${
            currentIndex === maxIndex
              ? "bg-gray-500 text-white cursor-not-allowed"
              : "bg-yellow-400 text-black hover:scale-110"
          }`}
        >
          <ChevronRight size={28} />
        </button>
      </div>

      {/* Indicators */}
      <div className="mt-16 flex justify-center gap-3">
        {Array.from({ length: maxIndex + 1 }).map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`h-3 w-3 rounded-full transition duration-300 ${
              currentIndex === index
                ? "bg-yellow-400 scale-125"
                : "bg-gray-500"
            }`}
          />
        ))}
      </div>

      {/* Bottom Curve */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
        <svg viewBox="0 0 1440 120" className="w-full">
          <path
            fill="#ffffff"
            d="M0,64L80,74.7C160,85,320,107,480,112C640,117,800,107,960,90.7C1120,75,1280,53,1360,42.7L1440,32V160H0Z"
          />
        </svg>
      </div>
    </section>
  );
}

export default Event;