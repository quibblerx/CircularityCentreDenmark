"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Linkedin, Instagram, Facebook, ArrowRight } from "lucide-react";

const Footer = () => {
  const [email, setEmail] = useState("");

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter signup
    console.log("Newsletter signup:", email);
    setEmail("");
  };

  return (
    <footer className="bg-primary text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8">
          {/* Logo and Contact Info */}
          <div className="md:col-span-4">
            <div className="flex items-center space-x-3 mb-4 md:mb-6">
              <Image
                src="/logo.png"
                alt="Circularity Centre Denmark"
                width={32}
                height={32}
                className="w-8 h-8"
              />
              <span className="text-lg font-semibold">
                Circularity Centre Denmark
              </span>
            </div>

            <div className="space-y-1 md:space-y-2 text-sm">
              <div>
                <span className="font-medium">Phone:</span> Lorem Ipsum
              </div>
              <div>
                <span className="font-medium">Email:</span> Lorem Ipsum
              </div>
              <div>
                <span className="font-medium">CVR:</span> Lorem Ipsum
              </div>
              <div>
                <span className="font-medium">Address:</span> Lorem Ipsum
              </div>
            </div>
          </div>

          {/* Newsletter Signup */}
          <div className="md:col-span-4">
            <h3 className="text-lg font-semibold mb-3 md:mb-4">
              Newsletter Signup
            </h3>
            <form onSubmit={handleNewsletterSubmit} className="mb-3 md:mb-4">
              <div className="relative">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="w-full px-0 py-3 pr-12 bg-transparent text-white placeholder-white border-0 border-b-2 border-white focus:outline-none focus:border-white/80 transition-colors"
                  required
                />
                <button
                  type="submit"
                  className="absolute right-0 top-1/2 transform -translate-y-1/2 text-white hover:text-white/80 transition-colors p-1"
                >
                  <ArrowRight className="w-5 h-5 cursor-pointer" />
                </button>
              </div>
            </form>
            <p className="text-xs text-white/80 mb-4 md:mb-6">
              By subscribing you accept to receive emails with news from
              Circularity Centre Denmark. You can opt out at any time. Read our
              Privacy Policy.
            </p>

            {/* Social Media - Inline with Follow us */}
            <div className="flex items-center space-x-4">
              <h4 className="text-sm font-medium">Follow us</h4>
              <div className="flex space-x-3">
                <a
                  href="#"
                  className="text-white hover:text-white/80 transition-colors"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  className="text-white hover:text-white/80 transition-colors"
                >
                  <Instagram className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  className="text-white hover:text-white/80 transition-colors"
                >
                  <Facebook className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="md:col-span-4">
            <div className="flex flex-col space-y-2 md:space-y-3 text-center md:text-right">
              <Link
                href="/donate"
                className="hover:text-white/80 transition-colors"
              >
                Donate
              </Link>
              <Link
                href="/about"
                className="hover:text-white/80 transition-colors"
              >
                About us
              </Link>
              <Link
                href="/contact"
                className="hover:text-white/80 transition-colors"
              >
                Contact us
              </Link>
              <Link
                href="/vacancies"
                className="hover:text-white/80 transition-colors"
              >
                Vacancies
              </Link>
              <Link
                href="/faq"
                className="hover:text-white/80 transition-colors"
              >
                FAQ&apos;s
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-col md:flex-row justify-between items-center text-xs text-white/80">
            <div>© 2025 Circularity Centre Denmark. All rights reserved.</div>
            <div className="flex space-x-4 mt-2 md:mt-0">
              <Link
                href="/privacy"
                className="hover:text-white transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms"
                className="hover:text-white transition-colors"
              >
                Terms of Use
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
