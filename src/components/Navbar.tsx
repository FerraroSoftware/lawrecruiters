"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ChevronDown,
  Menu,
  Phone,
  Clock,
  MapPin,
  Linkedin,
  Twitter,
  Instagram,
} from "lucide-react";
import { Button } from "@/components/ui/button";

import logo from "@/images/logo.svg";

export default function LegalNavbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="sticky top-0 z-50 bg-white">
      {/* Top Bar */}
      <div className="bg-[#0A2756] text-white py-2">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center text-sm">
            <div className="flex items-center space-x-4">
              <a
                href="tel:+1234567890"
                className="flex items-center hover:text-[#3366CC]"
              >
                <Phone className="h-4 w-4 mr-1" />
                (123) 456-7890
              </a>
              <span className="hidden sm:flex items-center">
                <Clock className="h-4 w-4 mr-1" />
                Mon-Fri: 9am-6pm
              </span>
            </div>
            <div className="flex items-center space-x-4">
              <span className="hidden sm:flex items-center">
                <MapPin className="h-4 w-4 mr-1" />
                123 Legal Ave, City, State 12345
              </span>
              <div className="flex items-center space-x-2">
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#3366CC]"
                >
                  <Linkedin className="h-4 w-4" />
                </a>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#3366CC]"
                >
                  <Twitter className="h-4 w-4" />
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#3366CC]"
                >
                  <Instagram className="h-4 w-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav
        className={`bg-white shadow-md transition-shadow duration-300 ${
          isScrolled ? "shadow-lg" : ""
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex-shrink-0 flex items-center">
              <Image
                src={logo}
                alt="Legal Recruiters Pro Logo"
                width={40}
                height={40}
                className="mr-2"
              />
              <Link href="/" className="text-xl font-bold text-[#0A2756]">
                Legal Recruiters Pro
              </Link>
            </div>

            <div className="hidden md:flex items-center space-x-6">
              <div className="relative group">
                <button className="flex items-center text-sm font-medium text-gray-700 hover:text-[#3366CC]">
                  Services{" "}
                  <ChevronDown className="ml-1 h-3 w-3 transition-transform duration-200 group-hover:rotate-180" />
                </button>
                <div className="absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 ease-in-out">
                  <div
                    className="py-1"
                    role="menu"
                    aria-orientation="vertical"
                    aria-labelledby="options-menu"
                  >
                    <Link
                      href="/services/legal-staff"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-[#3366CC]"
                    >
                      Attorney Recruiting
                    </Link>
                    <Link
                      href="/services/in-house-counsel"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-[#3366CC]"
                    >
                      Executive Recruiting
                    </Link>
                    <Link
                      href="/services/executive-search"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-[#3366CC]"
                    >
                      Law Firm Recruiting
                    </Link>
                    <Link
                      href="/services/executive-search"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-[#3366CC]"
                    >
                      Legal Hiring
                    </Link>
                    <Link
                      href="/services/executive-search"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-[#3366CC]"
                    >
                      Legal Placement
                    </Link>
                    <Link
                      href="/services/attorney-placement"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-[#3366CC]"
                    >
                      Legal Staffing
                    </Link>
                  </div>
                </div>
              </div>

              <div className="relative group">
                <button className="flex items-center text-sm font-medium text-gray-700 hover:text-[#3366CC]">
                  Practice Areas{" "}
                  <ChevronDown className="ml-1 h-3 w-3 transition-transform duration-200 group-hover:rotate-180" />
                </button>
                <div className="absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 ease-in-out">
                  <div
                    className="py-1"
                    role="menu"
                    aria-orientation="vertical"
                    aria-labelledby="options-menu"
                  >
                    <Link
                      href="/practice-areas/corporate-law"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-[#3366CC]"
                    >
                      Corporate Law
                    </Link>
                    <Link
                      href="/practice-areas/litigation"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-[#3366CC]"
                    >
                      Litigation
                    </Link>
                    <Link
                      href="/practice-areas/intellectual-property"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-[#3366CC]"
                    >
                      Intellectual Property
                    </Link>
                    <Link
                      href="/practice-areas/employment-law"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-[#3366CC]"
                    >
                      Employment Law
                    </Link>
                  </div>
                </div>
              </div>

              <Link
                href="/about"
                className="text-sm font-medium text-gray-700 hover:text-[#3366CC]"
              >
                About Us
              </Link>
              <Link
                href="/contact"
                className="text-sm font-medium text-gray-700 hover:text-[#3366CC]"
              >
                Contact
              </Link>
              <Link
                href="/blog"
                className="text-sm font-medium text-gray-700 hover:text-[#3366CC]"
              >
                Blog
              </Link>

              <Button className="bg-[#3366CC] hover:bg-[#2952A3] text-white">
                Submit Job Opening
              </Button>
            </div>

            <div className="md:hidden flex items-center">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              >
                <Menu className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>

        {isMobileMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <div className="relative">
                <button
                  className="flex items-center w-full px-3 py-2 text-sm font-medium text-gray-700 hover:text-[#3366CC]"
                  onClick={(e) => {
                    e.currentTarget.nextElementSibling?.classList.toggle(
                      "hidden"
                    );
                    e.currentTarget
                      .querySelector("svg")
                      ?.classList.toggle("rotate-180");
                  }}
                >
                  Services{" "}
                  <ChevronDown className="ml-1 h-3 w-3 transition-transform duration-200" />
                </button>
                <div className="hidden px-4 py-2 bg-gray-100">
                  <Link
                    href="/services/attorney-placement"
                    className="block py-2 text-sm text-gray-700 hover:text-[#3366CC]"
                  >
                    Attorney Placement
                  </Link>
                  <Link
                    href="/services/in-house-counsel"
                    className="block py-2 text-sm text-gray-700 hover:text-[#3366CC]"
                  >
                    In-House Counsel
                  </Link>
                  <Link
                    href="/services/legal-staff"
                    className="block py-2 text-sm text-gray-700 hover:text-[#3366CC]"
                  >
                    Legal Staff
                  </Link>
                  <Link
                    href="/services/executive-search"
                    className="block py-2 text-sm text-gray-700 hover:text-[#3366CC]"
                  >
                    Executive Search
                  </Link>
                </div>
              </div>
              <div className="relative">
                <button
                  className="flex items-center w-full px-3 py-2 text-sm font-medium text-gray-700 hover:text-[#3366CC]"
                  onClick={(e) => {
                    e.currentTarget.nextElementSibling?.classList.toggle(
                      "hidden"
                    );
                    e.currentTarget
                      .querySelector("svg")
                      ?.classList.toggle("rotate-180");
                  }}
                >
                  Practice Areas{" "}
                  <ChevronDown className="ml-1 h-3 w-3 transition-transform duration-200" />
                </button>
                <div className="hidden px-4 py-2 bg-gray-100">
                  <Link
                    href="/practice-areas/corporate-law"
                    className="block py-2 text-sm text-gray-700 hover:text-[#3366CC]"
                  >
                    Corporate Law
                  </Link>
                  <Link
                    href="/practice-areas/litigation"
                    className="block py-2 text-sm text-gray-700 hover:text-[#3366CC]"
                  >
                    Litigation
                  </Link>
                  <Link
                    href="/practice-areas/intellectual-property"
                    className="block py-2 text-sm text-gray-700 hover:text-[#3366CC]"
                  >
                    Intellectual Property
                  </Link>
                  <Link
                    href="/practice-areas/employment-law"
                    className="block py-2 text-sm text-gray-700 hover:text-[#3366CC]"
                  >
                    Employment Law
                  </Link>
                </div>
              </div>
              <Link
                href="/about"
                className="block px-3 py-2 text-sm font-medium text-gray-700 hover:text-[#3366CC]"
              >
                About Us
              </Link>
              <Link
                href="/contact"
                className="block px-3 py-2 text-sm font-medium text-gray-700 hover:text-[#3366CC]"
              >
                Contact
              </Link>
              <Link
                href="/blog"
                className="block px-3 py-2 text-sm font-medium text-gray-700 hover:text-[#3366CC]"
              >
                Blog
              </Link>
              <div className="mt-4 px-3">
                <Button className="w-full bg-[#3366CC] hover:bg-[#2952A3] text-white">
                  Submit Job Opening
                </Button>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
