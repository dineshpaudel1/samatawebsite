import SEO from "../components/seo/SEO";
import MainLayout from "../layouts/MainLayout";

import cover from "../assets/cover.jpg";
import logo from "../assets/logo.png";

import {
  GraduationCap,
  Wallet,
  Users,
  Trophy,
} from "lucide-react";

function About() {
  const features = [
    {
      title: "Quality Education",
      description:
        "Modern teaching methods with experienced and dedicated teachers.",
      icon: GraduationCap,
    },
    {
      title: "Affordable Fees",
      description:
        "Equal opportunity education with affordable fee structures.",
      icon: Wallet,
    },
    {
      title: "Student Growth",
      description:
        "Helping students develop leadership, discipline, and confidence.",
      icon: Users,
    },
    {
      title: "Bright Future",
      description:
        "Preparing students for success in academics and life.",
      icon: Trophy,
    },
  ];

  return (
    <MainLayout>
      <SEO
        title="About Us | Samata Shiksha Niketan Lalitpur"
        description="Learn more about Samata Shiksha Niketan Lalitpur."
        keywords="samata school lalitpur"
      />

      {/* HERO SECTION */}
      <section className="relative min-h-[65vh] overflow-hidden">
        
        {/* Background Image */}
        <img
          src={cover}
          alt="Samata School"
          className="absolute inset-0 h-full w-full object-cover"
        />

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-[#071B3B]/85"></div>

        {/* Gradient Layer */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#04142d]/90 via-[#07214a]/70 to-transparent"></div>

        {/* Gold Glow */}
        <div className="absolute top-20 left-20 h-52 w-52 rounded-full bg-yellow-400/20 blur-[120px]" />

        {/* Dotted Pattern */}
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
              ABOUT SAMATA
            </div>

            <h1 className="text-5xl font-bold text-white md:text-7xl">
              About <span className="text-red-500">Us</span>
            </h1>

            <div className="mx-auto mt-5 h-1 w-24 bg-yellow-400"></div>

            <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-gray-200 md:text-xl">
              Building brighter futures through affordable quality education,
              discipline, innovation, and student success.
            </p>
          </div>
        </div>
      </section>

      {/* ABOUT CONTENT */}
      <section className="relative overflow-hidden bg-white py-24">
        
        {/* Soft Glow */}
        <div className="absolute top-20 left-20 h-52 w-52 rounded-full bg-yellow-400/10 blur-[120px]" />
        <div className="absolute bottom-20 right-20 h-52 w-52 rounded-full bg-red-500/10 blur-[120px]" />

        <div className="mx-auto grid max-w-7xl items-center gap-16 px-6 lg:grid-cols-2">

          {/* Left Image */}
          <div className="relative">
            
            {/* Background Card */}
            <div className="absolute -top-6 -left-6 h-full w-full rounded-[35px] bg-yellow-400"></div>

            {/* Main Image */}
            <div className="relative overflow-hidden rounded-[35px] shadow-2xl">
              <img
                src={cover}
                alt="Students at Samata"
                className="h-[550px] w-full object-cover"
              />
            </div>

            {/* Floating Logo Card */}
            <div className="absolute -bottom-10 right-8 rounded-3xl bg-white p-5 shadow-2xl">
              <img
                src={logo}
                alt="Logo"
                className="h-20 w-20 object-contain"
              />
            </div>
          </div>

          {/* Right Content */}
          <div>
            <div className="mb-5 inline-flex rounded-full border border-yellow-400 px-5 py-2 text-sm font-semibold text-yellow-500">
              WHO WE ARE
            </div>

            <h2 className="text-4xl font-bold text-[#071B3B] md:text-5xl">
              Samata School
            </h2>

            <p className="mt-2 font-semibold uppercase tracking-[4px] text-red-500">
              Lalitpur, Nepal
            </p>

            <div className="mt-5 h-1 w-24 bg-yellow-400"></div>

            <p className="mt-8 text-lg leading-9 text-gray-600">
              Samata Shiksha Niketan Lalitpur is committed to providing
              affordable and high-quality education for every student.
              Our goal is to create a supportive environment where students
              can grow academically, socially, and personally.
            </p>

            <p className="mt-6 text-lg leading-9 text-gray-600">
              We believe education should be accessible to all. Through
              experienced teachers, modern learning methods, and strong
              discipline, we help students achieve excellence and prepare
              for a brighter future.
            </p>
          </div>
        </div>

        {/* FEATURES */}
        <div className="mx-auto mt-24 max-w-7xl px-6">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {features.map((feature, index) => {
              const Icon = feature.icon;

              return (
                <div
                  key={index}
                  className="rounded-[30px] border border-gray-100 bg-white p-8 shadow-lg transition duration-300 hover:-translate-y-3 hover:shadow-2xl"
                >
                  <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-[#071B3B] text-yellow-400">
                    <Icon size={28} />
                  </div>

                  <h3 className="text-2xl font-bold text-[#071B3B]">
                    {feature.title}
                  </h3>

                  <div className="mt-3 h-1 w-14 bg-yellow-400"></div>

                  <p className="mt-5 leading-8 text-gray-600">
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </MainLayout>
  );
}

export default About;