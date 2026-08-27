import React, { useState, useEffect } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
];

const NavBar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <nav className={`fixed top-0 w-full z-40 h-16 flex items-center justify-between px-6 transition-all duration-300 ${
        scrolled
          ? 'bg-black/80 backdrop-blur-md border-b border-white/10 shadow-lg shadow-black/50'
          : 'bg-transparent'
      }`}>
        {/* Logo */}
        <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-gradient-to-br from-blue-500 to-blue-700 shadow-lg shadow-blue-600/30">
          <span className="text-white font-bold text-sm tracking-wider">MB</span>
        </div>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-8 absolute left-1/2 -translate-x-1/2">
          {navLinks.map(({ label, href }) => (
            <li key={label}>
              <a
                href={href}
                className="relative text-gray-300 hover:text-white text-sm font-medium transition-colors duration-200 group"
              >
                {label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-500 group-hover:w-full transition-all duration-300" />
              </a>
            </li>
          ))}
        </ul>

        {/* Desktop CTA */}
        <a
          href="#Contact"
          className="hidden md:block bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-lg text-sm font-semibold transition-colors duration-200"
        >
          Contact
        </a>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-gray-300 hover:text-white transition-colors duration-200"
          aria-label="Toggle menu"
        >
          {menuOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
        </button>
      </nav>

      {/* Mobile menu overlay */}
      {menuOpen && (
        <div className="fixed inset-0 z-30 bg-black/95 backdrop-blur-sm flex flex-col items-center justify-center gap-8 md:hidden">
          {navLinks.map(({ label, href }) => (
            <a
              key={label}
              href={href}
              onClick={() => setMenuOpen(false)}
              className="text-2xl font-semibold text-gray-300 hover:text-blue-400 transition-colors duration-200"
            >
              {label}
            </a>
          ))}
          <a
            href="#Contact"
            onClick={() => setMenuOpen(false)}
            className="mt-4 px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold transition-colors duration-200"
          >
            Contact
          </a>
        </div>
      )}
    </>
  );
};

export default NavBar;
