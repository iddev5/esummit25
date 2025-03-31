"use client";

import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import { colors } from "@/constants/colors";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/events", label: "Events" },
    { href: "/sponsors", label: "Sponsors" },
    { href: "/speakers", label: "Speakers" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "py-2 bg-[#0a0a0a]/95 backdrop-blur-sm"
          : "py-4 bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4">
        <nav className="flex items-center justify-between">
          
          <Link href="/" className="relative z-10">
            <Image
              src="/assets/logo.png"
              alt="E-Summit Logo"
              width={150}
              height={40}
              className="h-[40px] w-auto object-contain"
            />
          </Link>

          
          <ul className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`text-[${colors.light}] hover:text-[${colors.primary}] transition-colors text-lg font-medium`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-full hover:bg-gray-800 transition-all duration-300"
          >
            <div className="relative w-6 h-6">
              <div className={`absolute transition-all duration-300 ${isMenuOpen ? 'opacity-0 rotate-90' : 'opacity-100 rotate-0'}`}>
                <Menu className="w-6 h-6" />
              </div>
              <div className={`absolute transition-all duration-300 ${isMenuOpen ? 'opacity-100 rotate-0' : 'opacity-0 -rotate-90'}`}>
                <X className="w-6 h-6" />
              </div>
            </div>
          </button>
        </nav>

        {/* Mobile Navigation */}
        <div 
          className={`md:hidden fixed inset-0 top-[72px] bg-[#0a0a0a]/95 backdrop-blur-sm transition-transform duration-300 ease-in-out ${
            isMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <nav className="container mx-auto px-4 py-8">
            <ul className="flex flex-col space-y-6">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    onClick={() => setIsMenuOpen(false)}
                    className={`block text-[${colors.light}] hover:text-[${colors.primary}] hover:bg-gray-800 rounded-lg p-3 transition-all duration-200 text-2xl font-medium text-center`}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}
