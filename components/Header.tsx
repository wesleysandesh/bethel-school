"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  const linkClass = (path: string) =>
    `pb-1 ${
      pathname === path
        ? "text-blue-900 border-b-2 border-blue-900 font-semibold"
        : "text-gray-700 hover:text-blue-900"
    }`;

  const mobileLinkClass = (path: string) =>
    `py-1 ${
      pathname === path ? "text-blue-900 font-semibold" : "text-gray-700"
    }`;

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo + Title */}
        <Link href="/" className="flex items-center gap-3 cursor-pointer">
          <div className="flex items-center gap-3">
            <img
              src="/images/bethel-school-logo.jpg"
              alt="Bethel High School"
              className="h-9 sm:h-12 w-auto"
            />
            <span className="text-lg sm:text-2xl font-bold text-blue-900">
              Bethel High School
            </span>
          </div>
        </Link>
        {/* Desktop Menu */}
        <nav className="hidden md:flex gap-6 font-medium">
          <Link className={linkClass("/")} href="/">
            Home
          </Link>
          <Link className={linkClass("/about")} href="/about">
            About
          </Link>
          <Link className={linkClass("/academics")} href="/academics">
            Academics
          </Link>
          <Link className={linkClass("/admissions")} href="/admissions">
            Admissions
          </Link>
          <Link className={linkClass("/activities")} href="/activities">
            Activities
          </Link>
          <Link className={linkClass("/gallery")} href="/gallery">
            Gallery
          </Link>
          <Link className={linkClass("/contact")} href="/contact">
            Contact
          </Link>
        </nav>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden text-blue-900 p-2"
          onClick={() => setOpen(!open)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-7 w-7"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-white border-t shadow-md">
          <nav className="flex flex-col px-4 py-4 gap-4 font-medium">
            <Link
              className={mobileLinkClass("/")}
              href="/"
              onClick={() => setOpen(false)}
            >
              Home
            </Link>
            <Link
              className={mobileLinkClass("/about")}
              href="/about"
              onClick={() => setOpen(false)}
            >
              About
            </Link>
            <Link
              className={mobileLinkClass("/academics")}
              href="/academics"
              onClick={() => setOpen(false)}
            >
              Academics
            </Link>
            <Link
              className={mobileLinkClass("/admissions")}
              href="/admissions"
              onClick={() => setOpen(false)}
            >
              Admissions
            </Link>
            <Link
              className={mobileLinkClass("/activities")}
              href="/activities"
              onClick={() => setOpen(false)}
            >
              Activities
            </Link>
            <Link
              className={mobileLinkClass("/gallery")}
              href="/gallery"
              onClick={() => setOpen(false)}
            >
              Gallery
            </Link>
            <Link
              className={mobileLinkClass("/contact")}
              href="/contact"
              onClick={() => setOpen(false)}
            >
              Contact
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
