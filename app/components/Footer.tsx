import {
  MessageCircle,
  GraduationCap,
} from "lucide-react";

import {
  FaInstagram,
  FaFacebookF,
  FaGithub,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-black border-t border-white/10 py-14 px-6">

      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-10">

        {/* LOGO */}
        <div>
          <div className="flex items-center gap-3 mb-4">

            <div className="bg-cyan-400/20 p-3 rounded-xl">
              <GraduationCap className="text-cyan-300" />
            </div>

            <h2 className="text-2xl font-black text-white">
              Mentor Smart
            </h2>

          </div>

          <p className="text-slate-400 leading-relaxed">
            Asesorías académicas y tecnológicas enfocadas
            en ayudarte a avanzar más rápido.
          </p>
        </div>

        {/* LINKS */}
        <div>
          <h3 className="text-xl font-bold text-white mb-4">
            Navegación
          </h3>

          <div className="flex flex-col gap-3 text-slate-400">

            <a
              href="#servicios"
              className="hover:text-cyan-300 transition"
            >
              Servicios
            </a>

            <a
              href="#faq"
              className="hover:text-cyan-300 transition"
            >
              FAQ
            </a>

            <a
              href="#contacto"
              className="hover:text-cyan-300 transition"
            >
              Contacto
            </a>

          </div>
        </div>

        {/* REDES */}
        <div>
          <h3 className="text-xl font-bold text-white mb-4">
            Contacto
          </h3>

          <div className="flex gap-4 flex-wrap">

            {/* WHATSAPP */}
            <a
              href="https://wa.me/573213460838"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-emerald-500/20 p-4 rounded-2xl hover:scale-110 hover:bg-emerald-500/30 transition duration-300"
            >
              <MessageCircle className="text-emerald-300" />
            </a>

            {/* INSTAGRAM */}
            <a
              href="https://instagram.com/josefernandodell"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-pink-500/20 p-4 rounded-2xl hover:scale-110 hover:bg-pink-500/30 transition duration-300"
            >
              <FaInstagram className="text-pink-300 text-xl" />
            </a>

            {/* FACEBOOK */}
            <a
              href="https://web.facebook.com/josefernando.dell/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-500/20 p-4 rounded-2xl hover:scale-110 hover:bg-blue-500/30 transition duration-300"
            >
              <FaFacebookF className="text-blue-300 text-xl" />
            </a>

            {/* GITHUB */}
            <a
              href="https://github.com/Jose-Dell22"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-slate-700/30 p-4 rounded-2xl hover:scale-110 hover:bg-slate-700/50 transition duration-300"
            >
              <FaGithub className="text-white text-xl" />
            </a>

          </div>
        </div>

      </div>

      {/* COPYRIGHT */}
      <div className="border-t border-white/10 mt-10 pt-6 text-center text-slate-500">
        © 2026 Mentor Smart — Todos los derechos reservados
      </div>

    </footer>
  );
}