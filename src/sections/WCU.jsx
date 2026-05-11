function WCU() {
  const features = [
    {
      title: "Experienced Teachers",
      desc: "Highly qualified and dedicated teachers focused on student success.",
      icon: "🎓",
    },
    {
      title: "Quality Education",
      desc: "Modern teaching methods with a strong academic foundation.",
      icon: "📘",
    },
    {
      title: "Safe Environment",
      desc: "A secure and friendly campus for students to learn and grow.",
      icon: "🛡️",
    },
    {
      title: "Affordable Fees",
      desc: "Quality education accessible to every family in Lalitpur.",
      icon: "💰",
    },
  ]

  return (
    <section className="bg-white py-20">

      {/* Heading */}
      <div className="mx-auto max-w-7xl px-6 text-center">

        <h2 className="text-4xl font-bold text-[#0047BA] md:text-5xl">
          Why Choose <span className="text-[#FF3B3B]">Us</span>
        </h2>

        <div className="mx-auto mt-3 h-1 w-24 rounded-full bg-[#D4AF37]" />

        <p className="mt-6 text-slate-600 max-w-2xl mx-auto">
          We provide a balanced environment where students grow academically,
          socially, and morally.
        </p>
      </div>

      {/* Cards */}
      <div className="mx-auto mt-14 grid max-w-7xl gap-8 px-6 sm:grid-cols-2 lg:grid-cols-4">

        {features.map((item, index) => (
          <div
            key={index}
            className="group rounded-2xl border border-gray-100 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl"
          >

            {/* Icon */}
            <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-[#FFF8E7] text-2xl">
              {item.icon}
            </div>

            {/* Title */}
            <h3 className="mt-5 text-lg font-semibold text-[#0047BA] group-hover:text-[#FF3B3B] transition">
              {item.title}
            </h3>

            {/* Description */}
            <p className="mt-3 text-sm leading-6 text-slate-600">
              {item.desc}
            </p>

          </div>
        ))}

      </div>
    </section>
  )
}

export default WCU