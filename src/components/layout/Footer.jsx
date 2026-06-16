import logo from '../../assets/logo.webp'
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa'

function Footer() {
  return (
    <footer className="bg-white">

      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">

        <div className="grid gap-10 md:grid-cols-3">

          {/* Logo + About */}
          <div>
            <div className="flex items-center gap-3">

              {/* Logo */}
              <img
                src={logo}
                alt="Samata School Logo"
                className="h-14 w-14 object-contain"
              />

              {/* Text */}
              <div>
                <h2 className="text-lg font-bold text-[#0047BA]">
                  Samata School
                </h2>

                <p className="text-xs font-semibold uppercase tracking-[3px] text-[#D4AF37]">
                  Lalitpur
                </p>
              </div>
            </div>

            <p className="mt-4 max-w-sm text-sm leading-6 text-slate-600">
              Providing quality education and shaping bright futures for
              students.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-[#0047BA]">
              Quick Links
            </h3>

            <div className="mt-4 space-y-3">
              {[
                { label: 'Home', href: '/' },
                { label: 'About', href: '/about' },
                { label: 'Admissions', href: '/admissions' },
                { label: 'Programs', href: '/programs' },
                { label: 'Contact', href: '/contact' },
              ].map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="group relative block text-sm font-medium text-[#0047BA] transition hover:text-[#FF3B3B]"
                >
                  {item.label}
                  <span className="absolute -bottom-1 left-0 h-[2px] w-0 bg-[#D4AF37] transition-all duration-300 group-hover:w-10"></span>
                </a>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold text-[#0047BA]">
              Contact
            </h3>

            <div className="mt-4 space-y-3 text-sm text-slate-600">

              <p className="flex items-center gap-2">
                <FaPhone className="text-[#0047BA]" />
                +977 985-1018793
              </p>

              <p className="flex items-center gap-2">
                <FaEnvelope className="text-[#0047BA]" />
                ssnpatan@gmail.com
              </p>

              <p className="flex items-center gap-2">
                <FaMapMarkerAlt className="text-[#0047BA]" />
                Lalitpur, Nepal
              </p>

            </div>
          </div>

        </div>

        {/* Bottom */}
        <div className="mt-10 border-t border-gray-200 pt-6 text-center text-xs text-slate-500">
          © 2026 Samata Shiksha Niketan Lalitpur. All rights reserved.
        </div>

      </div>
    </footer>
  )
}

export default Footer