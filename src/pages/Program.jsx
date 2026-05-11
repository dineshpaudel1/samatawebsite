import SEO from "../components/seo/SEO";
import MainLayout from "../layouts/MainLayout";
import cover from "../assets/cover.jpg";
import photo1 from "../assets/photo1.jpeg";

import {
  Code,
  Music,
  Dumbbell,
  Palette,
  Cpu,
  Drama,
} from "lucide-react";

function Program() {
  const programs = [
    {
      title: "Coding",
      quote:
        "Helping students build creativity and problem-solving through technology.",
      icon: Code,
    },
    {
      title: "Dancing",
      quote:
        "Encouraging confidence, expression, and creativity through movement.",
      icon: Drama,
    },
    {
      title: "Drawing",
      quote:
        "Developing imagination and artistic skills in young learners.",
      icon: Palette,
    },
    {
      title: "Robotics",
      quote:
        "Exploring innovation, technology, and future-ready skills.",
      icon: Cpu,
    },
    {
      title: "Sports",
      quote:
        "Building teamwork, discipline, and healthy competition.",
      icon: Dumbbell,
    },
    {
      title: "Music",
      quote:
        "Inspiring rhythm, creativity, and confidence through sound.",
      icon: Music,
    },
  ];

  return (
    <MainLayout>
      <SEO
        title="Programs | Samata Shiksha Niketan Lalitpur"
        description="Explore our educational and extracurricular programs."
        keywords="samata school programs"
      />

      {/* HERO SECTION */}
      <section className="relative min-h-[65vh] overflow-hidden">
        
        {/* Background */}
        <img
          src={cover}
          alt="Programs"
          className="absolute inset-0 h-full w-full object-cover"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-[#071B3B]/85"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#04142d]/90 via-[#07214a]/70 to-transparent"></div>

        {/* Gold Glow */}
        <div className="absolute top-20 left-20 h-52 w-52 rounded-full bg-yellow-400/20 blur-[120px]" />

        {/* Dots */}
        <div className="absolute right-20 top-1/2 hidden md:grid grid-cols-8 gap-2 opacity-40">
          {[...Array(64)].map((_, i) => (
            <div
              key={i}
              className="h-1.5 w-1.5 rounded-full bg-yellow-400"
            />
          ))}
        </div>

        {/* Hero Content */}
        <div className="relative z-10 flex min-h-[65vh] items-center justify-center text-center px-6">
          <div>
            <div className="mb-6 inline-flex rounded-full border border-yellow-400 px-5 py-2 text-sm font-semibold text-yellow-400">
              OUR PROGRAMS
            </div>

            <h1 className="text-5xl font-bold text-white md:text-7xl">
              Learn Beyond{" "}
              <span className="text-red-500">Classroom</span>
            </h1>

            <div className="mx-auto mt-5 h-1 w-24 bg-yellow-400"></div>

            <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-gray-200 md:text-xl">
              Discover creative, technical, and extracurricular programs
              designed to help students grow with confidence.
            </p>
          </div>
        </div>
      </section>

      {/* PROGRAMS SECTION */}
      <section className="relative overflow-hidden bg-white py-24">

        {/* Background Glow */}
        <div className="absolute top-20 right-20 h-52 w-52 rounded-full bg-yellow-400/10 blur-[120px]" />
        <div className="absolute bottom-20 left-20 h-52 w-52 rounded-full bg-red-500/10 blur-[120px]" />

        <div className="mx-auto max-w-7xl px-6">

          {/* Heading */}
          <div className="text-center">
            <div className="mb-5 inline-flex rounded-full border border-yellow-400 px-5 py-2 text-sm font-semibold text-yellow-500">
              EXTRA ACTIVITIES
            </div>

            <h2 className="text-4xl font-bold text-[#071B3B] md:text-5xl">
              Skills For The Future
            </h2>

            <div className="mx-auto mt-5 h-1 w-24 bg-yellow-400"></div>

            <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-gray-600">
              We believe students should grow academically, creatively,
              physically, and technologically.
            </p>
          </div>

          {/* Program Cards */}
          <div className="mt-20 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {programs.map((program, index) => {
              const Icon = program.icon;

              return (
                <div
                  key={index}
                  className="group overflow-hidden rounded-[30px] bg-white shadow-lg transition duration-500 hover:-translate-y-3 hover:shadow-2xl"
                >
                  {/* Image */}
                  <div className="relative overflow-hidden">
                    <img
                      src={photo1}
                      alt={program.title}
                      className="h-[260px] w-full object-cover transition duration-700 group-hover:scale-110"
                    />

                    <div className="absolute top-5 left-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#071B3B] text-yellow-400 shadow-lg">
                      <Icon size={24} />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-8">
                    <div className="inline-flex rounded-full border border-yellow-400 px-4 py-2 text-sm font-semibold text-yellow-500">
                      Samata Program
                    </div>

                    <h3 className="mt-5 text-3xl font-bold text-[#071B3B]">
                      {program.title}
                    </h3>

                    <div className="mt-4 h-1 w-20 bg-yellow-400"></div>

                    <p className="mt-6 text-base leading-8 text-gray-600">
                      {program.quote}
                    </p>

                    <button className="mt-8 rounded-2xl bg-[#071B3B] px-6 py-3 font-semibold text-white transition hover:scale-105 hover:bg-[#0b2b5b]">
                      Learn More
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </MainLayout>
  );
}

export default Program;