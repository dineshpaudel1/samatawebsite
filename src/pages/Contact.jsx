import SEO from "../components/seo/SEO";
import MainLayout from "../layouts/MainLayout";
import cover from "../assets/cover.jpg";

import {
  Phone,
  Mail,
  MapPin,
  Send,
} from "lucide-react";

function Contact() {
  const contactInfo = [
    {
      title: "Phone",
      value: "+977 985-1018793",
      icon: Phone,
    },
    {
      title: "Email",
      value: "ssnpatan@gmail.com",
      icon: Mail,
    },
    {
      title: "Address",
      value: "Samata Shiksha Niketan, Lalitpur, Nepal",
      icon: MapPin,
    },
  ];

  return (
    <MainLayout>
      <SEO
        title="Contact Us | Samata Shiksha Niketan Lalitpur"
        description="Get in touch with Samata Shiksha Niketan Lalitpur."
        keywords="samata contact"
      />

      {/* HERO SECTION */}
      <section className="relative min-h-[65vh] overflow-hidden">
        
        {/* Background */}
        <img
          src={cover}
          alt="Contact Samata School"
          className="absolute inset-0 h-full w-full object-cover"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-[#071B3B]/85"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#04142d]/90 via-[#07214a]/70 to-transparent"></div>

        {/* Glow */}
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

        {/* Content */}
        <div className="relative z-10 flex min-h-[65vh] items-center justify-center text-center px-6">
          <div>
            <div className="mb-6 inline-flex rounded-full border border-yellow-400 px-5 py-2 text-sm font-semibold text-yellow-400">
              CONTACT US
            </div>

            <h1 className="text-5xl font-bold text-white md:text-7xl">
              Get In <span className="text-red-500">Touch</span>
            </h1>

            <div className="mx-auto mt-5 h-1 w-24 bg-yellow-400"></div>

            <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-gray-200 md:text-xl">
              We are here to help with admissions, inquiries, and any
              questions about Samata School.
            </p>
          </div>
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section className="relative overflow-hidden bg-white py-24">

        {/* Soft Glow */}
        <div className="absolute top-20 left-20 h-52 w-52 rounded-full bg-yellow-400/10 blur-[120px]" />
        <div className="absolute bottom-20 right-20 h-52 w-52 rounded-full bg-red-500/10 blur-[120px]" />

        <div className="mx-auto grid max-w-7xl gap-16 px-6 lg:grid-cols-2">

          {/* Left Side */}
          <div>
            <div className="mb-5 inline-flex rounded-full border border-yellow-400 px-5 py-2 text-sm font-semibold text-yellow-500">
              CONTACT INFORMATION
            </div>

            <h2 className="text-4xl font-bold text-[#071B3B] md:text-5xl">
              Let’s Talk
            </h2>

            <div className="mt-5 h-1 w-24 bg-yellow-400"></div>

            <p className="mt-8 text-lg leading-9 text-gray-600">
              Feel free to contact us anytime. Our team is ready to help
              students, parents, and guardians.
            </p>

            {/* Contact Cards */}
            <div className="mt-10 space-y-6">
              {contactInfo.map((item, index) => {
                const Icon = item.icon;

                return (
                  <div
                    key={index}
                    className="rounded-[25px] border border-gray-100 bg-white p-6 shadow-lg transition hover:-translate-y-2 hover:shadow-2xl"
                  >
                    <div className="flex items-center gap-5">
                      <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#071B3B] text-yellow-400">
                        <Icon size={24} />
                      </div>

                      <div>
                        <h3 className="text-xl font-bold text-[#071B3B]">
                          {item.title}
                        </h3>

                        <p className="text-gray-600 mt-1">
                          {item.value}
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
              SEND MESSAGE
            </div>

            <h2 className="text-4xl font-bold text-white">
              Contact Form
            </h2>

            <p className="mt-4 text-gray-300">
              Fill the form and our team will contact you soon.
            </p>

            <form className="mt-8 space-y-5">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full rounded-2xl border border-white/10 bg-white/10 px-5 py-4 text-white outline-none placeholder:text-gray-400 focus:border-yellow-400"
              />

              <input
                type="email"
                placeholder="Your Email"
                className="w-full rounded-2xl border border-white/10 bg-white/10 px-5 py-4 text-white outline-none placeholder:text-gray-400 focus:border-yellow-400"
              />

              <input
                type="text"
                placeholder="Subject"
                className="w-full rounded-2xl border border-white/10 bg-white/10 px-5 py-4 text-white outline-none placeholder:text-gray-400 focus:border-yellow-400"
              />

              <textarea
                rows="6"
                placeholder="Your Message"
                className="w-full rounded-2xl border border-white/10 bg-white/10 px-5 py-4 text-white outline-none placeholder:text-gray-400 focus:border-yellow-400"
              />

              <button
                type="submit"
                className="flex w-full items-center justify-center gap-3 rounded-2xl bg-yellow-400 px-6 py-4 font-semibold text-black transition hover:scale-[1.02]"
              >
                <Send size={18} />
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>
    </MainLayout>
  );
}

export default Contact;