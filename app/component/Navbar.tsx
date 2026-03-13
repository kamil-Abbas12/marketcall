"use client";

import React, { useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { FaEnvelope } from "react-icons/fa";

const sections = ["Product", "Help Center", "Industries", "Company", "Blog"];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="w-full fixed top-0 z-50 bg-white text-gray-600">

      <div className="max-w-[1400px] mx-auto px-4 md:px-8 lg:px-16  h-20 flex items-center justify-between">

        {/* LOGO */}
        <Link href="/">
          <Image src="/logo.svg" width={140} height={30} alt="logo" />
        </Link>

        {/* DESKTOP MENU */}
        <div className="hidden lg:flex items-center gap-8">

          {sections.map((sec) => (
            <button
              key={sec}
              onClick={() => {
                const el = document.getElementById(sec);
                if (el) el.scrollIntoView({ behavior: "smooth" });
              }}
              className="text-gray-600 text-lg"
            >
              {sec}
            </button>
          ))}

        </div>

        {/* DESKTOP BUTTONS */}
        <div className="hidden lg:flex items-center gap-4">

          <a
            href="tel:2762548576"
            className="flex items-center text-indigo-500 gap-2  px-4 py-2 rounded-md"
          >
            Login
          </a>

          <a
            href="mailto:info@topdoglead.com"
            className="flex items-center gap-2 border border-indigo-300 bg-indigo-600 text-white px-2 py-2 rounded-md"
          >
            Sign up
          </a>

        </div>

        {/* MOBILE MENU ICON */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="lg:hidden"
        >
          {menuOpen ? <X size={26} /> : <Menu size={26} />}
        </button>

      </div>

      {/* MOBILE MENU */}
      {menuOpen && (
        <div className="lg:hidden bg-white border-t">

          <div className="flex flex-col items-center gap-4 py-6">

            {sections.map((sec) => (
              <button
                key={sec}
                onClick={() => {
                  const el = document.getElementById(sec);
                  if (el) el.scrollIntoView({ behavior: "smooth" });
                  setMenuOpen(false);
                }}
                className="text-gray-600 text-lg"
              >
                {sec}
              </button>
            ))}

            {/* MOBILE BUTTONS */}
            <a
            //   href="tel:2762548576"
              className="flex items-center text-indigo-500 gap-2  px-4 py-2 rounded-md"
            >
              {/* <Phone size={16} /> */}
              Call Now
            </a>

            <a
            //   href="mailto:info@topdoglead.com"
              className="flex items-center gap-2 border border-indigo-500 bg-indigo-600 text-white px-4 py-2 rounded-md"
            >
              {/* <FaEnvelope size={14} /> */}
              Sign Up
            </a>

          </div>

        </div>
      )}

    </nav>
  );
};

export default Navbar;