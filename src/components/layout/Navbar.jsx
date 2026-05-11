import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import logo from '../../assets/logo.png'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const navItems = [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about' },
    { label: 'Admissions', href: '/admissions' },
    { label: 'Programs', href: '/programs' },
    { label: 'Contact', href: '/contact' },
  ]

  return (
    <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-200 shadow-sm">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">

          {/* Logo */}
          <a href="/" className="group flex items-center gap-3">
            <img
              src={logo}
              alt="Samata School Logo"
              className="h-14 w-14 object-contain transition duration-300 group-hover:scale-105"
            />

            <div className="hidden sm:flex flex-col">
              <span className="text-lg font-bold leading-none text-[#0047BA]">
                Samata Shiksha Niketan
              </span>

              <span className="text-xs font-semibold tracking-[3px] text-[#D4AF37] uppercase">
                Lalitpur
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden items-center gap-8 md:flex">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="group relative text-[15px] font-semibold text-[#0047BA] transition-all duration-300 hover:text-[#FF3B3B]"
              >
                {item.label}

                {/* Gold underline */}
                <span className="absolute -bottom-2 left-0 h-[2px] w-0 bg-[#D4AF37] transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-[#0047BA] transition hover:text-[#FF3B3B] md:hidden"
            aria-label="Toggle menu"
            type="button"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="space-y-2 border-t border-gray-200 py-4 md:hidden">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="block rounded-lg px-4 py-3 font-medium text-[#0047BA] transition duration-300 hover:bg-[#FFF8E7] hover:text-[#FF3B3B]"
              >
                {item.label}
              </a>
            ))}
          </div>
        )}
      </div>
    </nav>
  )
}