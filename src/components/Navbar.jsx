
"use client";
import React, { useRef, useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import Link from 'next/link';
import { FaPhoneAlt, FaEnvelope, FaFacebookF, FaInstagram, FaTwitter, FaPinterestP, FaLinkedinIn, FaYoutube, FaWhatsapp } from 'react-icons/fa';

const Navbar = () => {
  const [navOpen, setNavOpen] = useState(false);
  return (
    <>
  <div className="fixed top-0 left-0 w-full z-50 shadow-md border-b border-yellow-400 bg-white">
        {/* Top bar */}
  <div className="flex flex-col sm:flex-row items-center justify-between bg-[#3F6165] text-yellow-400 text-xs sm:text-sm px-2 sm:px-4 h-auto sm:h-8 py-1 sm:py-0 top-bar">
          <div className="flex items-center gap-2 sm:gap-4 border-l-2 border-yellow-400 pl-2 w-full sm:w-auto justify-center sm:justify-start">
            <a href="tel:9999081996" className="flex items-center gap-1 text-yellow-400 hover:text-yellow-300">
              <FaPhoneAlt className="text-xs sm:text-sm" />
              <span className="inline">9999081996</span>
            </a>
            <a href="mailto:sahilnarang111@gmail.com" className="flex items-center gap-1 text-yellow-400 hover:text-yellow-300">
              <FaEnvelope className="text-xs sm:text-sm" />
              <span className="inline">sahilnarang111@gmail.com</span>
            </a>
          </div>
          <div className="hidden sm:flex gap-3 mt-1 sm:mt-0 justify-center">
            <a aria-label="Facebook" href="#" className="text-yellow-400 text-xs sm:text-sm"><FaFacebookF /></a>
            <a aria-label="Instagram" href="#" className="text-yellow-400 text-xs sm:text-sm"><FaInstagram /></a>
            <a aria-label="Twitter" href="#" className="text-yellow-400 text-xs sm:text-sm"><FaTwitter /></a>
            <a aria-label="Pinterest" href="#" className="text-yellow-400 text-xs sm:text-sm"><FaPinterestP /></a>
            <a aria-label="LinkedIn" href="#" className="text-yellow-400 text-xs sm:text-sm"><FaLinkedinIn /></a>
            <a aria-label="YouTube" href="#" className="text-yellow-400 text-xs sm:text-sm"><FaYoutube /></a>
          </div>
        </div>
        {/* Main nav */}
  <header className="flex flex-col md:flex-row items-center justify-between px-2 sm:px-4 py-2 bg-white gap-2 md:gap-0 relative">
          <div aria-label="Narang Steel logo" className="flex items-center gap-2 pl-0 sm:pl-4 w-full md:w-auto justify-center md:justify-start">
            <Link href="/" className="flex items-center gap-2">
              <img
                alt="Blue and dark blue stylized S logo"
                height="60"
                width="60"
                src="/logo.jpg"
                className="w-[60px] h-[60px] object-contain md:w-[70px] md:h-[70px] cursor-pointer"
              />
              <span aria-label="Narang Packaging text logo" className="font-bold text-lg sm:text-xl md:text-2xl text-[#3F6165] select-none cursor-pointer">
                NARANG
                <span className="text-[#3F6165]">STEEL</span>
                <sup className="text-xs text-[#3F6165]">®</sup>
              </span>
            </Link>
          </div>
          {/* Hamburger icon for mobile/tablet */}
          <button
            className="md:hidden absolute right-4 top-3 text-[#3F6165] text-2xl focus:outline-none"
            onClick={() => setNavOpen((prev) => !prev)}
            aria-label={navOpen ? 'Close menu' : 'Open menu'}
          >
            {navOpen ? <FaTimes /> : <FaBars />}
          </button>
          {/* Desktop nav */}
          <nav
            aria-label="Primary navigation"
            className={`hidden md:flex flex-row items-center gap-5 w-full md:w-auto justify-center md:justify-end text-xs sm:text-sm md:text-base`}
          >
            <Link aria-current="page" className="font-bold text-black hover:underline px-2 py-1" href="/">
              HOME
            </Link>
            <Link className="font-bold text-black hover:underline px-2 py-1" href="/about">
              ABOUT US
            </Link>
            {/* Dropdown with delay on mouse leave */}
            {/* ...existing code... */}
            {(() => {
              const [open, setOpen] = useState(false);
              const timeoutRef = useRef();
              const handleEnter = () => {
                clearTimeout(timeoutRef.current);
                setOpen(true);
              };
              const handleLeave = () => {
                timeoutRef.current = setTimeout(() => setOpen(false), 300);
              };
              // Product list from Gallery images
              const productImages = [
                { slug: 'brass-sheets', title: 'Brass Sheets' },
                { slug: 'brass-flat', title: 'Brass Flat' },
                { slug: 'brass-hexagonal', title: 'Brass Hexagonal' },
                { slug: 'brass-pipe', title: 'Brass Pipe' },
                { slug: 'brass-round', title: 'Brass Round' },
                { slug: 'en1a-leaded-freecutting-bright-bars', title: 'EN1A Leaded Freecutting Bright Bars' },
                { slug: 'mild-steel-bright-bars', title: 'Mild Steel Bright Bars' },
                { slug: 'ms-bright-hex-bar', title: 'MS Bright Hex Bar' },
                { slug: 'ms-bright-round-bars', title: 'MS Bright Round Bars' },
                { slug: 'ms-bright-square-bar', title: 'MS Bright Square Bar' },
                { slug: 'ms-wire-coils', title: 'MS Wire Coils' },
                { slug: 'ms-wire-rods', title: 'MS Wire Rods' },
              ];
              return (
                <div
                  className="relative"
                  onMouseEnter={handleEnter}
                  onMouseLeave={handleLeave}
                  onFocus={handleEnter}
                  onBlur={handleLeave}
                >
                  <Link className="font-bold text-black hover:underline px-2 py-1" href="#product">
                    PRODUCT
                  </Link>
                  <div className={`absolute left-0 top-full min-w-[220px] bg-white border border-[#3F6165] rounded-lg shadow-lg mt-2 z-20 pointer-events-auto ${open ? 'block' : 'hidden'}`}>
                    <ul className="py-2 max-h-72 overflow-y-auto">
                      {productImages.map((prod, idx) => (
                        <li key={prod.slug} className={idx >= 6 ? 'hidden md:block' : ''}>
                          <Link href={`/products/${prod.slug}`} className="block px-5 py-2 text-[#3F6165] font-medium whitespace-nowrap transition-all duration-200 hover:bg-yellow-300 hover:text-black hover:scale-105 rounded-md shadow-sm">{prod.title}</Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              );
            })()}
            <Link className="font-bold text-black hover:underline px-2 py-1" href="/contact">
              CONTACT US
            </Link>
          </nav>
          {/* Mobile/tablet nav */}
          <nav
            aria-label="Mobile navigation"
            className={`md:hidden flex-col items-center gap-2 w-full bg-white absolute left-0 top-full shadow-lg border-t border-yellow-400 z-40 transition-all duration-200 ${navOpen ? 'flex' : 'hidden'}`}
          >
            <Link onClick={() => setNavOpen(false)} aria-current="page" className="font-bold text-black hover:underline px-4 py-2 w-full text-left text-xs sm:text-sm" href="/">
              HOME
            </Link>
            <Link onClick={() => setNavOpen(false)} className="font-bold text-black hover:underline px-4 py-2 w-full text-left text-xs sm:text-sm" href="/about">
              ABOUT US
            </Link>
            {/* Dropdown for mobile/tablet */}
            <details className="w-full">
              <summary className="font-bold text-black hover:underline px-4 py-2 cursor-pointer select-none text-xs sm:text-sm">PRODUCT</summary>
              <ul className="pl-4 pb-2">
                {[
                  { slug: 'brass-sheets', title: 'Brass Sheets' },
                  { slug: 'brass-flat', title: 'Brass Flat' },
                  { slug: 'brass-hexagonal', title: 'Brass Hexagonal' },
                  { slug: 'brass-pipe', title: 'Brass Pipe' },
                  { slug: 'brass-round', title: 'Brass Round' },
                  { slug: 'en1a-leaded-freecutting-bright-bars', title: 'EN1A Leaded Freecutting Bright Bars' },
                  { slug: 'mild-steel-bright-bars', title: 'Mild Steel Bright Bars' },
                  { slug: 'ms-bright-hex-bar', title: 'MS Bright Hex Bar' },
                  { slug: 'ms-bright-round-bars', title: 'MS Bright Round Bars' },
                  { slug: 'ms-bright-square-bar', title: 'MS Bright Square Bar' },
                  { slug: 'ms-wire-coils', title: 'MS Wire Coils' },
                  { slug: 'ms-wire-rods', title: 'MS Wire Rods' },
                ].map((prod) => (
                  <li key={prod.slug}>
                    <Link onClick={() => setNavOpen(false)} href={`/products/${prod.slug}`} className="block py-1 text-[#3F6165] font-medium text-xs sm:text-sm transition-all duration-200 hover:bg-yellow-300 hover:text-black hover:scale-105 rounded-md shadow-sm">{prod.title}</Link>
                  </li>
                ))}
              </ul>
            </details>
            <Link onClick={() => setNavOpen(false)} className="font-bold text-black hover:underline px-4 py-2 w-full text-left text-xs sm:text-sm" href="/contact">
              CONTACT US
            </Link>
            {/* WhatsApp icon and button for mobile/tablet nav - moved to last */}
            <a
              href="https://wa.me/9999081996"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
              className="flex items-center gap-2 px-4 py-3 w-full justify-start"
            >
              <FaWhatsapp className="text-green-500 text-2xl sm:text-3xl" />
              <span className="text-green-700 font-semibold text-base sm:text-lg transition-colors duration-200 group-hover:text-white">WhatsApp</span>
            </a>
          </nav>
          <div className="hidden md:flex items-center gap-2 w-full md:w-auto justify-center md:justify-end mt-2 md:mt-0">
            <a
              href="https://wa.me/9999081996"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
              className="group"
            >
              <button className="bg-[#3F6165] hover:bg-yellow-500 text-yellow-400 font-semibold px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm transition-colors w-full md:w-auto group-hover:text-white">
                WhatsApp
              </button>
            </a>
          </div>
        </header>
      </div>
    </>
  );
};

export default Navbar;