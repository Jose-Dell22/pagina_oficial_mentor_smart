"use client";

import { motion } from "framer-motion";
import { useState } from "react";

import {
  MessageCircle,
  Mail,
  GraduationCap,
} from "lucide-react";

import {
  FaInstagram,
  FaFacebookF,
  FaGithub,
} from "react-icons/fa";

export default function Contact() {
  const [loading, setLoading] = useState(false);

  async function handleSubmit(
    e: React.FormEvent<HTMLFormElement>
  ) {
    e.preventDefault();

    setLoading(true);

    const form = e.currentTarget;

    const data = new FormData(form);

    const response = await fetch(
      "https://formspree.io/f/mdabjjje",
      {
        method: "POST",
        body: data,
        headers: {
          Accept: "application/json",
        },
      }
    );

    setLoading(false);

    if (response.ok) {
      alert("Mensaje enviado correctamente ✅");

      form.reset();

    } else {
      alert("Error enviando el mensaje ❌");
    }
  }

  return (
    <section
      id="contacto"
      className="py-24 px-6 bg-slate-900 text-white"
    >
      <div className="max-w-5xl mx-auto">

        {/* TITULO */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-black">
            Contáctame
          </h2>

          <p className="mt-4 text-slate-400 text-lg">
            Elige tu canal favorito o envíame un mensaje.
          </p>
        </motion.div>

        {/* OPCIONES DE CONTACTO */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-14"
        >

          {/* WHATSAPP */}
          <a
            href="https://wa.me/573213460838"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-slate-950 border border-white/10 rounded-[2rem] p-8 hover:border-emerald-400/40 hover:-translate-y-2 transition duration-300 text-center"
          >
            <div className="bg-emerald-500/20 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-5">
              <MessageCircle className="text-emerald-300" size={30} />
            </div>

            <h3 className="text-2xl font-bold mb-2">
              WhatsApp
            </h3>

            <p className="text-slate-400">
              Respuesta rápida y directa.
            </p>
          </a>

          {/* INSTAGRAM */}
          <a
            href="https://instagram.com/josefernandodell"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-slate-950 border border-white/10 rounded-[2rem] p-8 hover:border-pink-400/40 hover:-translate-y-2 transition duration-300 text-center"
          >
            <div className="bg-pink-500/20 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-5">
              <FaInstagram className="text-pink-300 text-3xl" />
            </div>

            <h3 className="text-2xl font-bold mb-2">
              Instagram
            </h3>

            <p className="text-slate-400">
              Sígueme y contáctame.
            </p>
          </a>

          {/* FACEBOOK */}
          <a
            href="https://web.facebook.com/josefernando.dell/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-slate-950 border border-white/10 rounded-[2rem] p-8 hover:border-blue-400/40 hover:-translate-y-2 transition duration-300 text-center"
          >
            <div className="bg-blue-500/20 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-5">
              <FaFacebookF className="text-blue-300 text-3xl" />
            </div>

            <h3 className="text-2xl font-bold mb-2">
              Facebook
            </h3>

            <p className="text-slate-400">
              Escríbeme por Messenger.
            </p>
          </a>

          {/* GITHUB */}
          <a
            href="https://github.com/Jose-Dell22"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-slate-950 border border-white/10 rounded-[2rem] p-8 hover:border-slate-400/40 hover:-translate-y-2 transition duration-300 text-center"
          >
            <div className="bg-slate-700/30 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-5">
              <FaGithub className="text-white text-3xl" />
            </div>

            <h3 className="text-2xl font-bold mb-2">
              GitHub
            </h3>

            <p className="text-slate-400">
              Mira mis proyectos.
            </p>
          </a>

        </motion.div>

        {/* FORMULARIO */}
        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="space-y-6 bg-slate-950 border border-white/10 rounded-[2rem] p-8 shadow-2xl"
        >

          <div className="flex items-center gap-3 mb-4">
            <div className="bg-cyan-400/20 p-3 rounded-xl">
              <Mail className="text-cyan-300" />
            </div>

            <h3 className="text-3xl font-black">
              Formulario de contacto
            </h3>
          </div>

          <input
            type="text"
            name="name"
            placeholder="Nombre"
            required
            className="w-full bg-slate-800 border border-white/10 rounded-2xl p-5 outline-none focus:border-cyan-400"
          />

          <input
            type="email"
            name="email"
            placeholder="Correo"
            required
            className="w-full bg-slate-800 border border-white/10 rounded-2xl p-5 outline-none focus:border-cyan-400"
          />

          <textarea
            name="message"
            rows={5}
            placeholder="Mensaje"
            required
            className="w-full bg-slate-800 border border-white/10 rounded-2xl p-5 outline-none focus:border-cyan-400"
          />

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-gradient-to-r from-cyan-400 to-emerald-400 text-slate-900 py-5 rounded-2xl font-black text-lg hover:scale-[1.02] transition duration-300 disabled:opacity-50"
          >
            {loading
              ? "Enviando..."
              : "Enviar mensaje"}
          </button>

        </motion.form>
      </div>
    </section>
  );
}