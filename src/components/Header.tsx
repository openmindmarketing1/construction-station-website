"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CS, SERVICES } from "@/lib/constants";
import { CITIES } from "@/config/cities";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  const isLight = scrolled;

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isLight ? "bg-white/95 backdrop-blur-md shadow-sm" : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-5 lg:px-10">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3 group">
              <div
                className={`w-11 h-11 flex items-center justify-center border-2 ${
                  isLight ? "border-navy" : "border-gold"
                } transition-colors`}
              >
                <span
                  className={`font-display text-2xl ${
                    isLight ? "text-navy" : "text-gold"
                  }`}
                >
                  CS
                </span>
              </div>
              <div className="hidden sm:block">
                <div
                  className={`font-display text-lg leading-none ${
                    isLight ? "text-navy" : "text-white"
                  }`}
                >
                  Construction
                </div>
                <div
                  className={`font-body text-[10px] tracking-[0.3em] uppercase ${
                    isLight ? "text-navy/70" : "text-gold"
                  }`}
                >
                  Station · est. 2008
                </div>
              </div>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-8">
              <div
                className="relative"
                onMouseEnter={() => setServicesOpen(true)}
                onMouseLeave={() => setServicesOpen(false)}
              >
                <button
                  className={`font-body text-sm tracking-wide flex items-center gap-1 ${
                    isLight ? "text-navy" : "text-white"
                  } hover:text-gold transition-colors`}
                >
                  Services
                  <svg
                    className="w-3 h-3"
                    viewBox="0 0 12 12"
                    fill="currentColor"
                  >
                    <path d="M2 4l4 4 4-4z" />
                  </svg>
                </button>
                <AnimatePresence>
                  {servicesOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 8 }}
                      transition={{ duration: 0.18 }}
                      className="absolute left-0 top-full pt-3 w-72"
                    >
                      <div className="bg-white border border-navy/10 shadow-xl py-3">
                        {SERVICES.map((s) => (
                          <Link
                            key={s.slug}
                            href={`/services/${s.slug}`}
                            className="flex items-center gap-3 px-5 py-3 hover:bg-cream group"
                          >
                            <span className="text-xl">{s.icon}</span>
                            <div>
                              <div className="font-display text-navy text-base group-hover:text-gold transition-colors">
                                {s.name}
                              </div>
                              <div className="text-xs text-navy/60">
                                {s.description}
                              </div>
                            </div>
                          </Link>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <Link
                href="/#areas"
                className={`font-body text-sm tracking-wide ${
                  isLight ? "text-navy" : "text-white"
                } hover:text-gold transition-colors`}
              >
                Areas We Serve
              </Link>
              <Link
                href="/#about"
                className={`font-body text-sm tracking-wide ${
                  isLight ? "text-navy" : "text-white"
                } hover:text-gold transition-colors`}
              >
                About
              </Link>
              <Link
                href="/contact"
                className={`font-body text-sm tracking-wide ${
                  isLight ? "text-navy" : "text-white"
                } hover:text-gold transition-colors`}
              >
                Contact
              </Link>

              <a
                href={CS.phoneHref}
                className={`flex items-center gap-2 font-body text-sm ${
                  isLight ? "text-navy" : "text-white"
                } hover:text-gold transition-colors`}
              >
                <svg
                  className="w-4 h-4"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" />
                </svg>
                {CS.phone}
              </a>

              <Link
                href="/contact"
                className="bg-gold text-navy font-body font-semibold text-sm px-6 py-3 hover:bg-gold-light transition-colors uppercase tracking-wider"
              >
                Free Estimate
              </Link>
            </nav>

            {/* Mobile hamburger */}
            <button
              aria-label="Open menu"
              onClick={() => setOpen(true)}
              className="lg:hidden w-11 h-11 flex flex-col justify-center items-center gap-1.5"
            >
              <span
                className={`block h-0.5 w-7 ${
                  isLight ? "bg-navy" : "bg-white"
                }`}
              />
              <span
                className={`block h-0.5 w-7 ${
                  isLight ? "bg-navy" : "bg-white"
                }`}
              />
              <span
                className={`block h-0.5 w-7 ${
                  isLight ? "bg-navy" : "bg-white"
                }`}
              />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile overlay */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-[60] bg-navy texture-navy lg:hidden"
          >
            <div className="flex items-center justify-between px-5 h-20">
              <div className="flex items-center gap-3">
                <div className="w-11 h-11 flex items-center justify-center border-2 border-gold">
                  <span className="font-display text-2xl text-gold">CS</span>
                </div>
                <div>
                  <div className="font-display text-lg leading-none text-white">
                    Construction
                  </div>
                  <div className="font-body text-[10px] tracking-[0.3em] uppercase text-gold">
                    Station · est. 2008
                  </div>
                </div>
              </div>
              <button
                aria-label="Close menu"
                onClick={() => setOpen(false)}
                className="w-11 h-11 flex items-center justify-center text-white"
              >
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M6 6l12 12M18 6L6 18"
                    stroke="currentColor"
                    strokeWidth="2"
                  />
                </svg>
              </button>
            </div>
            <motion.div
              initial="hidden"
              animate="show"
              variants={{
                hidden: {},
                show: { transition: { staggerChildren: 0.06 } },
              }}
              className="px-6 pt-6 pb-12 overflow-y-auto h-[calc(100dvh-5rem)]"
            >
              <motion.div
                variants={{
                  hidden: { opacity: 0, x: -20 },
                  show: { opacity: 1, x: 0 },
                }}
                className="text-gold text-xs tracking-[0.3em] uppercase mb-3"
              >
                Services
              </motion.div>
              {SERVICES.map((s) => (
                <motion.div
                  key={s.slug}
                  variants={{
                    hidden: { opacity: 0, x: -20 },
                    show: { opacity: 1, x: 0 },
                  }}
                >
                  <Link
                    href={`/services/${s.slug}`}
                    onClick={() => setOpen(false)}
                    className="block py-3 border-b border-white/10 font-display text-2xl text-white hover:text-gold transition-colors"
                  >
                    {s.name}
                  </Link>
                </motion.div>
              ))}

              <motion.div
                variants={{
                  hidden: { opacity: 0, x: -20 },
                  show: { opacity: 1, x: 0 },
                }}
                className="text-gold text-xs tracking-[0.3em] uppercase mt-8 mb-3"
              >
                Areas We Serve
              </motion.div>
              <div className="grid grid-cols-2 gap-y-2">
                {CITIES.slice(0, 10).map((c) => (
                  <motion.div
                    key={c.slug}
                    variants={{
                      hidden: { opacity: 0, x: -20 },
                      show: { opacity: 1, x: 0 },
                    }}
                  >
                    <Link
                      href={`/areas/${c.slug}`}
                      onClick={() => setOpen(false)}
                      className="text-white/80 hover:text-gold text-base"
                    >
                      {c.name}
                    </Link>
                  </motion.div>
                ))}
              </div>

              <motion.div
                variants={{
                  hidden: { opacity: 0 },
                  show: { opacity: 1 },
                }}
                className="mt-10 flex flex-col gap-3"
              >
                <a
                  href={CS.phoneHref}
                  className="border border-gold text-gold text-center py-4 font-body uppercase tracking-wider"
                >
                  Call {CS.phone}
                </a>
                <Link
                  href="/contact"
                  onClick={() => setOpen(false)}
                  className="bg-gold text-navy text-center py-4 font-body uppercase tracking-wider font-semibold"
                >
                  Free Estimate
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
