'use client'

import { useState, useEffect } from 'react'
import { assets } from '@/lib/assets'

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  const links = [
    { href: '#services', label: 'Services' },
    { href: '#portfolio', label: 'Work' },
    { href: '#about', label: 'About' },
    { href: '#contact', label: 'Contact' },
  ]

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-5 md:px-16 md:py-6 transition-colors duration-300 ${
          scrolled
            ? 'bg-[#080808]/95 backdrop-blur-sm'
            : 'bg-gradient-to-b from-[#080808]/95 to-transparent'
        }`}
      >
        <a href="#hero" className="flex items-center gap-3.5 no-underline">
          <img
            src={assets.logo}
            alt="STAGFILMS"
            className="w-9 h-9 object-contain brightness-0 invert"
          />
          <span className="font-['Barlow_Condensed'] font-extrabold text-[1.25rem] tracking-[0.2em] text-white uppercase">
            STAGFILMS
          </span>
        </a>

        <ul className="hidden md:flex gap-10 list-none">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="text-gray-400 no-underline text-[0.68rem] tracking-[0.18em] uppercase transition-colors duration-200 hover:text-white"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden flex flex-col gap-[5px] bg-transparent border-none cursor-none"
          aria-label="Toggle menu"
        >
          <span className="block w-6 h-px bg-white transition-transform duration-300" style={{ transform: menuOpen ? 'rotate(45deg) translateY(5px)' : 'none' }} />
          <span className="block w-6 h-px bg-white transition-opacity duration-300" style={{ opacity: menuOpen ? 0 : 1 }} />
          <span className="block w-6 h-px bg-white transition-transform duration-300" style={{ transform: menuOpen ? 'rotate(-45deg) translateY(-5px)' : 'none' }} />
        </button>
      </nav>

      {menuOpen && (
        <div className="fixed inset-0 z-40 bg-[#080808]/98 flex flex-col items-center justify-center gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setMenuOpen(false)}
              className="font-['Barlow_Condensed'] font-bold text-3xl text-white no-underline tracking-wider hover:text-gray-400 transition-colors"
            >
              {l.label}
            </a>
          ))}
        </div>
      )}
    </>
  )
}
