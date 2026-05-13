"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="min-h-screen bg-gradient-to-br from-cyan-950 via-slate-900 to-emerald-700 text-white flex items-center justify-center px-6 pt-32">
      
      <div className="grid lg:grid-cols-2 gap-14 items-center max-w-7xl">
        
        {/* TEXTO */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center gap-2 bg-cyan-400/10 border border-cyan-300/20 px-4 py-2 rounded-full mb-6">
            <span>💡</span>
            <span className="text-cyan-200">
              Educación + Tecnología
            </span>
          </div>

          <h1 className="text-6xl lg:text-7xl font-black leading-tight">
            Mentor
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-emerald-300">
              Smart
            </span>
          </h1>

          <p className="mt-6 text-xl text-slate-300 leading-relaxed">
            Asesorías académicas, programación y desarrollo web
            con un enfoque moderno y personalizado.
          </p>

          <div className="flex flex-wrap gap-4 mt-10">
            <a
              href="https://wa.me/573213460838"
              target="_blank"
              className="px-8 py-4 bg-emerald-500 rounded-2xl font-bold hover:bg-emerald-400 hover:scale-105 transition duration-300 shadow-2xl"
            >
              Contactar
            </a>

            <a
              href="#servicios"
              className="px-8 py-4 border border-cyan-300 rounded-2xl hover:bg-cyan-300/10 transition"
            >
              Ver servicios
            </a>
          </div>
        </motion.div>

        {/* IMAGEN */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <div className="absolute inset-0 bg-cyan-400 blur-3xl opacity-20 rounded-full"></div>

          <img
            src="/images/mentor-smart.jpg"
            alt="Mentor Smart"
            className="relative rounded-[2rem] shadow-[0_20px_80px_rgba(0,0,0,0.6)] border border-white/10"
          />
        </motion.div>

      </div>
    </section>
  );
}