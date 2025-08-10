"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, useAnimation } from "framer-motion";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);

  const controls = useAnimation();

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      setHasScrolled(offset > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    controls.start({
      backgroundColor: hasScrolled ? "rgba(0, 0, 0, 0.8)" : "rgba(0, 0, 0, 0)",
      backdropFilter: hasScrolled ? "blur(20px)" : "blur(0px)",
      transition: { duration: 0.3, ease: "easeInOut" },
    });
  }, [hasScrolled, controls]);

  return (
    <motion.nav animate={controls} className="fixed w-full z-20 top-0 start-0">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-6">
        <Link
          href="/"
          className="flex items-center space-x-3 rtl:space-x-reverse"
        >
          <Image
            src="/imgs/logo.svg"
            alt="StudioForma"
            width={120}
            height={32}
            className="h-5 w-auto"
          />
        </Link>

        <div className="hidden md:flex items-center justify-center flex-1">
          <div className="relative">
            <div className="absolute inset-0 blur-lg"></div>
            <div className="relative px-8 py-3">
              <ul className="flex items-center space-x-10 font-playfair">
                {[
                  { name: "About", href: "/about" },
                  { name: "Portfolio", href: "/gallery" },
                  { name: "Contact", href: "/contact" },
                ].map((item, index) => (
                  <li key={index}>
                    <Link
                      href={item.href}
                      className="relative text-white/90 hover:text-[#946534] transition-colors duration-300 text-sm font-normal tracking-wide group"
                    >
                      {item.name}
                      <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#946534] transition-all duration-300 group-hover:w-full"></span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="hidden md:flex items-center bg-[#69361C] p-4 opacity-80 hover:opacity-100 transition-opacity duration-200">
          <Link href="/contact" className="text-white/70 text-sm font-[100] tracking-wider uppercase">
            Get in Touch
          </Link>
        </div>

        <button
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-white rounded-lg md:hidden hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-amber-500/50 transition-colors duration-200"
          onClick={() => setIsOpen(!isOpen)}
          aria-controls="navbar-sticky"
          aria-expanded={isOpen}
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-5 h-5"
            fill="none"
            viewBox="0 0 17 14"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>

        <motion.div
          initial={false}
          animate={{
            opacity: isOpen ? 1 : 0,
            y: isOpen ? 0 : -20,
            scale: isOpen ? 1 : 0.95,
          }}
          transition={{ duration: 0.2 }}
          className={`${
            isOpen ? "flex" : "hidden"
          } absolute top-full left-0 right-0 md:hidden mt-2 mx-4`}
        >
          <div className="w-full bg-black/80 backdrop-blur-xl rounded-2xl border border-amber-500/20 overflow-hidden">
            <ul className="flex flex-col p-6 space-y-4">
              {[
                { name: "About", href: "/about" },
                { name: "Portfolio", href: "/gallery" },
                { name: "Contact", href: "/contact" },
              ].map((item, index) => (
                <li key={index}>
                  <Link
                    href={item.href}
                    className="block py-3 px-4 text-white/90 hover:text-[#946534] hover:bg-amber-500/10 rounded-lg transition-all duration-200 font-medium"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
              <li className="pt-4 border-t border-amber-500/20">
                <Link href="/contact" className="block py-3 px-4 text-white/70 text-sm font-light tracking-wider uppercase bg-[#69361C] p-4 opacity-80 hover:opacity-100 transition-opacity duration-200 rounded-lg">
                  Get in Touch
                </Link>
              </li>
            </ul>
          </div>
        </motion.div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
