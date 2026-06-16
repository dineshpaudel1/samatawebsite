import { useState, useRef } from "react";
import { ChevronLeft, ChevronRight, CalendarDays } from "lucide-react";

import photo1 from "../assets/photovi.jpg";
import photo2 from "../assets/photov.jpg";
import photo3 from "../assets/photoiv.jpg";
import photo4 from "../assets/photoiii.jpg";
import photo5 from "../assets/photoii.jpg";

function Event() {
  const events = [
    { title: "Parents Day", description: "Celebrating the love, care, and support of our parents.", image: photo1 },
    { title: "Annual Day", description: "A joyful celebration of student talent and achievements.", image: photo2 },
    { title: "Saraswati Puja", description: "Seeking blessings of wisdom and knowledge together.", image: photo3 },
    { title: "Sports Day", description: "Encouraging teamwork, discipline, and healthy competition.", image: photo4 },
    { title: "Graduation Day", description: "Celebrating student success and new beginnings.", image: photo5 },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const maxIndex = events.length - 3;

  const startX = useRef(0);
  const endX = useRef(0);

  const handleNext = () => {
    if (currentIndex < maxIndex) setCurrentIndex((p) => p + 1);
  };

  const handlePrev = () => {
    if (currentIndex > 0) setCurrentIndex((p) => p - 1);
  };

  // TOUCH SWIPE
  const handleTouchStart = (e) => {
    startX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e) => {
    endX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    const diff = startX.current - endX.current;

    if (diff > 50) handleNext();
    if (diff < -50) handlePrev();
  };

  // MOUSE DRAG
  const handleMouseDown = (e) => {
    startX.current = e.clientX;
  };

  const handleMouseUp = (e) => {
    endX.current = e.clientX;

    const diff = startX.current - endX.current;

    if (diff > 50) handleNext();
    if (diff < -50) handlePrev();
  };

  return (
    <section className="relative overflow-hidden bg-[#071B3B] py-24">

      {/* Glow */}
      <div className="absolute top-20 left-20 h-52 w-52 rounded-full bg-yellow-400/20 blur-[120px]" />
      <div className="absolute bottom-20 right-20 h-52 w-52 rounded-full bg-red-500/20 blur-[120px]" />

      {/* Heading */}
      <div className="relative z-10 mx-auto max-w-7xl px-6 text-center">

        <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-yellow-400 px-5 py-2 text-sm font-semibold text-yellow-400">
          <CalendarDays size={16} />
          SCHOOL EVENTS
        </div>

        <h2 className="text-4xl md:text-6xl font-bold">
          <span className="text-white">Samata</span>{" "}
          <span className="text-red-500">Events</span>
        </h2>
      </div>

      {/* SWIPE AREA */}
      <div className="relative mx-auto mt-20 max-w-6xl px-6">

        {/* LEFT BUTTON */}
        <button
          onClick={handlePrev}
          className="hidden lg:flex absolute left-0 top-1/2 z-20 h-14 w-14 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-yellow-400 text-black"
        >
          <ChevronLeft />
        </button>

        {/* SWIPE CONTAINER */}
        <div
          className="overflow-hidden"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
          onMouseDown={handleMouseDown}
          onMouseUp={handleMouseUp}
        >
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{
              transform: `translateX(-${currentIndex * 100}%)`,
            }}
          >
            {events.map((event, i) => (
              <div
                key={i}
                className="min-w-full md:min-w-1/2 lg:min-w-1/3 px-4"
              >
                <div className="group relative overflow-hidden rounded-[30px] border border-white/10 bg-white/5 backdrop-blur-lg shadow-2xl transition duration-500 hover:-translate-y-3">

                  {/* Image */}
                  <div className="relative h-[320px] overflow-hidden">
                    <img
                      src={event.image}
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
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT BUTTON */}
        <button
          onClick={handleNext}
          className="hidden lg:flex absolute right-0 top-1/2 z-20 h-14 w-14 translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-yellow-400 text-black"
        >
          <ChevronRight />
        </button>
      </div>

      {/* DOTS */}
      <div className="mt-12 flex justify-center gap-2">
        {Array.from({ length: maxIndex + 1 }).map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrentIndex(i)}
            className={`h-2.5 w-2.5 rounded-full ${
              i === currentIndex ? "bg-yellow-400" : "bg-gray-500"
            }`}
          />
        ))}
      </div>

      {/* BOTTOM CURVE */}
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