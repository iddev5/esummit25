"use client";

import Image from "next/image";
import { colors } from "@/constants/colors";
import {
  Twitter,
  Instagram,
  Linkedin,
  Github,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";

export default function Footer() {
  const socialLinks = [
    {
      icon: <Twitter className="w-5 h-5" />,
      href: "https://twitter.com/ecellvssut",
      label: "Twitter",
    },
    {
      icon: <Instagram className="w-5 h-5" />,
      href: "https://www.instagram.com/ecellvssut/",
      label: "Instagram",
    },
    {
      icon: <Linkedin className="w-5 h-5" />,
      href: "https://in.linkedin.com/company/ecellvssut",
      label: "LinkedIn",
    },
    {
      icon: <Github className="w-5 h-5" />,
      href: "https://github.com/E-Cell-VSSUT",
      label: "GitHub",
    },
  ];

  const quickLinks = [
    { label: "Home", href: "/" },
    { label: "Events", href: "/events" },
    { label: "Sponsors", href: "/sponsors" },
    { label: "Speakers", href: "/speakers" },
    { label: "Contact", href: "/contact" },
  ];

  const usefulLinks = [
    { label: "About Us", href: "#" },
    { label: "FAQs", href: "#" },
    { label: "Terms & Conditions", href: "#" },
    { label: "Privacy Policy", href: "#" },
  ];

  return (
    <footer className={`w-full bg-[${colors.darkGray}] pt-8 pb-4`}>
      {/* Social Media Bar */}
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center pb-8 border-b border-[${colors.primaryTransparent}]">
          <p className="text-[${colors.light}] text-lg mb-4 md:mb-0">
            Connect with us on social media
          </p>
          <div className="flex space-x-4">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`p-2 rounded-full border border-[${colors.primary}] text-[${colors.light}] hover:bg-[${colors.primary}] hover:text-[${colors.dark}] transition-all duration-300`}
                aria-label={social.label}
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>

        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 py-8">
          {/* Logo Section */}
          <div className="flex flex-col items-center md:items-start">
            <Image
              src="/assets/logo.png"
              alt="E-Summit Logo"
              width={200}
              height={60}
              className="h-[60px] w-auto object-contain mb-4"
            />
            <p
              className={`text-[${colors.light}] text-sm text-center md:text-left`}
            >
              Empowering innovation and entrepreneurship at VSSUT
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3
              className={`text-[${colors.primary}] font-semibold text-lg mb-4`}
            >
              Quick Links
            </h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className={`text-[${colors.light}] hover:text-[${colors.primary}] transition-colors`}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Useful Links */}
          <div>
            <h3
              className={`text-[${colors.primary}] font-semibold text-lg mb-4`}
            >
              Useful Links
            </h3>
            <ul className="space-y-2">
              {usefulLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className={`text-[${colors.light}] hover:text-[${colors.primary}] transition-colors`}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3
              className={`text-[${colors.primary}] font-semibold text-lg mb-4`}
            >
              Contact Us
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <MapPin
                  className={`w-5 h-5 text-[${colors.primary}] flex-shrink-0 mt-1`}
                />
                <span className={`text-[${colors.light}]`}>
                  VSSUT, Burla, Odisha 768018
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className={`w-5 h-5 text-[${colors.primary}]`} />
                <a
                  href="mailto:ecellvssut@gmail.com"
                  className={`text-[${colors.light}] hover:text-[${colors.primary}] transition-colors`}
                >
                  ecellvssut@gmail.com
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className={`w-5 h-5 text-[${colors.primary}]`} />
                <span className={`text-[${colors.light}]`}>
                  +91 72055 49729
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div
          className={`border-t border-[${colors.primaryTransparent}] pt-4 mt-8`}
        >
          <p className={`text-[${colors.light}] text-sm text-center`}>
            © {new Date().getFullYear()} E-Cell VSSUT. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
