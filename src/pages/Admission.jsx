import SEO from "../components/seo/SEO";
import MainLayout from "../layouts/MainLayout";
import cover from "../assets/cover.jpg";

import {
  FileText,
  FolderOpen,
  CheckCircle,
  GraduationCap,
  Wallet,
  BookOpen,
  Trophy,
} from "lucide-react";

function Admission() {
  const steps = [
    {
      title: "Fill Admission Form",
      description:
        "Complete the admission application form with accurate student information.",
      icon: FileText,
    },
    {
      title: "Document Submission",
      description:
        "Submit required academic records and identification documents.",
      icon: FolderOpen,
    },
    {
      title: "Confirmation & Enrollment",
      description:
        "After approval, complete enrollment and begin your journey.",
      icon: CheckCircle,
    },
  ];

  const benefits = [
    {
      title: "Affordable Fees",
      description: "Equal educational opportunities for every student.",
      icon: Wallet,
    },
    {
      title: "Skilled Teachers",
      description: "Experienced teachers focused on student development.",
      icon: GraduationCap,
    },
    {
      title: "Modern Learning",
      description: "Interactive and practical teaching approaches.",
      icon: BookOpen,
    },
    {
      title: "Bright Future",
      description: "Preparing students for success in life and academics.",
      icon: Trophy,
    },
  ];

  return (
    <MainLayout>
      <SEO
        title="Admissions | Samata Shiksha Niketan Lalitpur"
        description="Apply for admission at Samata Shiksha Niketan Lalitpur."
        keywords="samata admission"
      />

      {/* HERO SECTION */}
      <section className="relative min-h-[65vh] overflow-hidden">
        <img
          src={cover}
          alt="Admissions"
          className="absolute inset-0 h-full w-full object-cover"
        />

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

        <div className="relative z-10 flex min-h-[65vh] items-center justify-center text-center px-6">
          <div>
            <div className="mb-6 inline-flex rounded-full border border-yellow-400 px-5 py-2 text-sm font-semibold text-yellow-400">
              ADMISSIONS OPEN
            </div>

            <h1 className="text-5xl font-bold text-white md:text-7xl">
              Join <span className="text-red-500">Samata</span>
            </h1>

            <div className="mx-auto mt-5 h-1 w-24 bg-yellow-400"></div>

            <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-gray-200 md:text-xl">
              Provide your child with affordable quality education and a
              brighter future.
            </p>
          </div>
        </div>
      </section>

      {/* ADMISSION PROCESS + FORM */}
      <section className="relative overflow-hidden bg-white py-24">

        {/* Glow */}
        <div className="absolute top-20 left-20 h-52 w-52 rounded-full bg-yellow-400/10 blur-[120px]" />
        <div className="absolute bottom-20 right-20 h-52 w-52 rounded-full bg-red-500/10 blur-[120px]" />

        <div className="mx-auto grid max-w-7xl gap-16 px-6 lg:grid-cols-2">

          {/* Left Content */}
          <div>
            <div className="mb-5 inline-flex rounded-full border border-yellow-400 px-5 py-2 text-sm font-semibold text-yellow-500">
              ADMISSION PROCESS
            </div>

            <h2 className="text-4xl font-bold text-[#071B3B] md:text-5xl">
              Start Your Child’s Journey
            </h2>

            <div className="mt-5 h-1 w-24 bg-yellow-400"></div>

            <p className="mt-8 text-lg leading-9 text-gray-600">
              Our admission process is simple, transparent, and student-friendly.
            </p>

            {/* Steps */}
            <div className="mt-10 space-y-6">
              {steps.map((step, index) => {
                const Icon = step.icon;

                return (
                  <div
                    key={index}
                    className="rounded-[25px] border border-gray-100 bg-white p-6 shadow-lg hover:-translate-y-2 transition"
                  >
                    <div className="flex gap-5">
                      <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#071B3B] text-yellow-400">
                        <Icon size={24} />
                      </div>

                      <div>
                        <h3 className="text-2xl font-bold text-[#071B3B]">
                          {step.title}
                        </h3>

                        <p className="mt-2 text-gray-600 leading-7">
                          {step.description}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Form */}
          <div className="rounded-[35px] bg-[#071B3B] p-10 shadow-2xl">
            <div className="mb-5 inline-flex rounded-full border border-yellow-400 px-4 py-2 text-sm font-semibold text-yellow-400">
              APPLY NOW
            </div>

            <h2 className="text-4xl font-bold text-white">
              Admission Form
            </h2>

            <p className="mt-4 text-gray-300">
              Fill the form below and our team will contact you.
            </p>

            <form className="mt-10 space-y-5">
              {[
                "Student Name",
                "Parent Name",
                "Phone Number",
                "Email Address",
              ].map((field, index) => (
                <input
                  key={index}
                  type="text"
                  placeholder={field}
                  className="w-full rounded-2xl border border-white/10 bg-white/10 px-5 py-4 text-white outline-none placeholder:text-gray-400 focus:border-yellow-400"
                />
              ))}

              <select className="w-full rounded-2xl border border-white/10 bg-white/10 px-5 py-4 text-white outline-none focus:border-yellow-400">
                <option className="text-black">Select Grade</option>
                <option className="text-black">Nursery</option>
                <option className="text-black">Grade 1</option>
                <option className="text-black">Grade 2</option>
                <option className="text-black">Grade 3</option>
              </select>

              <button
                type="submit"
                className="w-full rounded-2xl bg-yellow-400 px-6 py-4 font-semibold text-black transition hover:scale-[1.02]"
              >
                Submit Admission Request
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="bg-[#f8f9fc] py-24">
        <div className="mx-auto max-w-7xl px-6 text-center">

          <div className="mb-5 inline-flex rounded-full border border-yellow-400 px-5 py-2 text-sm font-semibold text-yellow-500">
            WHY CHOOSE US
          </div>

          <h2 className="text-4xl font-bold text-[#071B3B] md:text-5xl">
            Why Choose Samata School?
          </h2>

          <div className="mx-auto mt-5 h-1 w-24 bg-yellow-400"></div>

          <p className="mx-auto mt-8 max-w-3xl text-lg text-gray-600">
            We focus on academic excellence, discipline, innovation,
            and student success.
          </p>

          <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {benefits.map((item, index) => {
              const Icon = item.icon;

              return (
                <div
                  key={index}
                  className="rounded-[30px] bg-white p-8 shadow-lg transition hover:-translate-y-3 hover:shadow-2xl"
                >
                  <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-[#071B3B] text-yellow-400">
                    <Icon size={28} />
                  </div>

                  <h3 className="mt-6 text-2xl font-bold text-[#071B3B]">
                    {item.title}
                  </h3>

                  <div className="mx-auto mt-4 h-1 w-14 bg-yellow-400"></div>

                  <p className="mt-5 leading-8 text-gray-600">
                    {item.description}
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

export default Admission;