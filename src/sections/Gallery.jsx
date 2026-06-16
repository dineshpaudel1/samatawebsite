import { useState, useRef } from "react";
import {
  ChevronLeft,
  ChevronRight,
  Image as ImageIcon,
  X,
} from "lucide-react";

import photo1 from "../assets/photo1.jpeg";
import photo2 from "../assets/photo2.jpeg";
import photo3 from "../assets/photo3.jpeg";
import photo4 from "../assets/photo4.jpeg";
import photo5 from "../assets/photo5.jpeg";

function Gallery() {
  const images = [
    photo1,
    photo2,
    photo3,
    photo4,
    photo5,
    photo1,
    photo2,
    photo3,
    photo4,
    photo5,
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedImage, setSelectedImage] = useState(null);

  const startX = useRef(0);
  const endX = useRef(0);

  const maxIndex = images.length - 1;

  const handleNext = () => {
    if (currentIndex < maxIndex) {
      setCurrentIndex((prev) => prev + 1);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prev) => prev - 1);
    }
  };

  // 🟢 SWIPE START
  const handleTouchStart = (e) => {
    startX.current = e.touches[0].clientX;
  };

  // 🟢 SWIPE MOVE
  const handleTouchMove = (e) => {
    endX.current = e.touches[0].clientX;
  };

  // 🟢 SWIPE END
  const handleTouchEnd = () => {
    const diff = startX.current - endX.current;

    if (diff > 50) {
      handleNext(); // swipe left
    } else if (diff < -50) {
      handlePrev(); // swipe right
    }
  };

  // mouse drag (desktop)
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
    <>
      <section className="relative overflow-hidden bg-[#071B3B] py-24">

        {/* Glow */}
        <div className="absolute top-20 left-20 h-52 w-52 rounded-full bg-yellow-400/20 blur-[120px]" />
        <div className="absolute bottom-20 right-20 h-52 w-52 rounded-full bg-red-500/20 blur-[120px]" />

        {/* Heading */}
        <div className="relative z-10 mx-auto max-w-7xl px-6 text-center">

          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-yellow-400 px-5 py-2 text-sm font-semibold text-yellow-400">
            <ImageIcon size={16} />
            SCHOOL GALLERY
          </div>

          <h2 className="text-4xl md:text-6xl font-bold">
            <span className="text-white">Samata</span>{" "}
            <span className="text-red-500">Memories</span>
          </h2>
        </div>

        {/* SLIDER AREA */}
        <div className="relative mx-auto mt-20 max-w-5xl px-6">

          {/* LEFT BUTTON */}
          <button
            onClick={handlePrev}
            className="hidden lg:flex absolute left-0 top-1/2 z-20 h-14 w-14 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-yellow-400 text-black"
          >
            <ChevronLeft />
          </button>

          {/* SWIPE CONTAINER */}
          <div
            className="overflow-hidden rounded-[30px]"
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
              {images.map((img, i) => (
                <div
                  key={i}
                  className="min-w-full md:min-w-1/2 lg:min-w-1/3 px-2"
                  onClick={() => setSelectedImage(img)}
                >
                  <div className="relative h-[300px] md:h-[400px] rounded-[30px] overflow-hidden border border-white/10 bg-white/5">
                    <img
                      src={img}
                      alt="gallery"
                      className="h-full w-full object-cover transition hover:scale-110 duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
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
        <div className="mt-10 flex justify-center gap-2">
          {images.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentIndex(i)}
              className={`h-2.5 w-2.5 rounded-full ${
                i === currentIndex ? "bg-yellow-400" : "bg-gray-500"
              }`}
            />
          ))}
        </div>
      </section>

      {/* MODAL */}
      {selectedImage && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-4">
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute right-4 top-4 bg-red-500 p-3 rounded-full text-white"
          >
            <X />
          </button>

          <img
            src={selectedImage}
            className="max-h-[90vh] max-w-[90vw] rounded-[30px]"
          />
        </div>
      )}
    </>
  );
}

export default Gallery;