"use client";

import { useState } from "react";

import { GraduationCap, Menu, X } from "lucide-react";

import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 w-full z-50 backdrop-blur-xl bg-black/20 border-b border-white/10"
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

        {/* LOGO */}
        <div className="flex items-center gap-3">

          <div className="bg-cyan-400/20 p-2 rounded-xl">
            <GraduationCap className="text-cyan-300" />
          </div>

          <h1 className="text-2xl font-black tracking-wide text-white">
            Mentor Smart
          </h1>

        </div>

        {/* DESKTOP MENU */}
        <div className="hidden md:flex items-center gap-8 text-white">

          <a
            href="#servicios"
            className="hover:text-cyan-300 transition"
          >
            Servicios
          </a>

          <a
            href="#contacto"
            className="hover:text-cyan-300 transition"
          >
            Contacto
          </a>

          <a
            href="https://wa.me/573213460838"
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-3 rounded-xl bg-emerald-500 hover:bg-emerald-400 transition font-bold"
          >
            WhatsApp
          </a>

        </div>

        {/* MOBILE BUTTON */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-white"
        >
          {menuOpen ? <X size={32} /> : <Menu size={32} />}
        </button>

      </div>

      {/* MOBILE MENU */}
      <AnimatePresence>

        {menuOpen && (

          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-slate-950/95 backdrop-blur-xl border-t border-white/10"
          >

            <div className="flex flex-col px-6 py-6 gap-6 text-white">

              <a
                href="#servicios"
                onClick={() => setMenuOpen(false)}
                className="hover:text-cyan-300 transition text-lg"
              >
                Servicios
              </a>

              <a
                href="#contacto"
                onClick={() => setMenuOpen(false)}
                className="hover:text-cyan-300 transition text-lg"
              >
                Contacto
              </a>

              <a
                href="https://wa.me/573213460838"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-emerald-500 hover:bg-emerald-400 transition text-center py-4 rounded-2xl font-bold"
              >
                WhatsApp
              </a>

            </div>

          </motion.div>

        )}

      </AnimatePresence>

    </motion.nav>
  );
}