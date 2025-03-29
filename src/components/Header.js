"use client";

import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="w-screen fixed z-50 bg-black">
      <div className="flex justify-between items-center px-6 py-4">
        <Image
          src="/assets/logo.png"
          width={619}
          height={288}
          className="h-[40px] w-auto object-contain"
        />

        {/* Desktop Navigation */}
       <div className="mr-10">
       <ul className="hidden md:flex gap-10 text-lg text-white">
          <li>
            <Link href="/" className="hover:text-gray-300 transition-colors">
              Home
            </Link>
          </li>
          <li>
            <Link
              href="/events"
              className="hover:text-gray-300 transition-colors"
            >
              Events
            </Link>
          </li>
          <li>
            <Link
              href="/sponsors"
              className="hover:text-gray-300 transition-colors"
            >
              Sponsors
            </Link>
          </li>
          <li>
            <Link
              href="/speakers"
              className="hover:text-gray-300 transition-colors"
            >
              Speakers
            </Link>
          </li>
          <li>
            <Link
              href="/contact"
              className="hover:text-gray-300 transition-colors"
            >
              Contact
            </Link>
          </li>
        </ul>
       </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white mr-3"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-black align-center justify-center">
          <ul className="flex flex-col px-6 py-4 gap-4 text-white justify-center items-center">
          <div className="flex flex-col w-full gap-4 hover:text-gray-300 hover:bg-gray-800 h-10 items-center justify-center">
            <li >
              <Link
                href="/"
                className="block hover:text-gray-300 transition-colors"
              >
                Home
              </Link>
            </li>
            </div>
            <div className="flex flex-col w-full gap-4 hover:text-gray-300 hover:bg-gray-800 h-10 items-center justify-center">
            <li>
              <Link
                href="/events"
                className="block hover:text-gray-300 transition-colors"
              >
                Events
              </Link>
            </li>
            </div>
            <div className="flex flex-col w-full gap-4 hover:text-gray-300 hover:bg-gray-800 h-10 items-center justify-center">
            <li>
              <Link
                href="/sponsors"
                className="block hover:text-gray-300 transition-colors"
              >
                Sponsors
              </Link>
            </li>
            </div>
            <div className="flex flex-col w-full gap-4 hover:text-gray-300 hover:bg-gray-800 h-10 items-center justify-center">
            <li>
              <Link
                href="/speakers"
                className="block hover:text-gray-300 transition-colors"
              >
                Speakers
              </Link>
            </li>
            </div>
            <div className="flex flex-col w-full gap-4 hover:text-gray-300 hover:bg-gray-800 h-10 items-center justify-center">
            <li>
              <Link
                href="/contact"
                className="block hover:text-gray-300 transition-colors"
              >
                Contact
              </Link>
            </li>
            </div>
          </ul>
        </div>
      )}
    </div>
  );
}
