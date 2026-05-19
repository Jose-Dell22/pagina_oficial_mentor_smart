"use client";

import { motion } from "framer-motion";

import {
  Calculator,
  Code2,
  Sigma,
  Laptop,
  Brain,
  Server,
  Building2,
  Workflow,
  Boxes,
  HardHat,
  Dumbbell,
  Languages,
  BookOpen,
  FileText,
  Sparkles,
} from "lucide-react";

/* =========================
   SOFTWARE ENGINEERING
========================= */

const softwareServices = [
  {
    title: "Fundamentos Matemáticos",
    icon: <Sigma size={40} />,
  },

  {
    title: "Cálculo Diferencial",
    icon: <Calculator size={40} />,
  },

  {
    title: "Cálculo Integral",
    icon: <Brain size={40} />,
  },

  {
    title: "Front-End Web",
    icon: <Laptop size={40} />,
  },

  {
    title: "Back-End Web",
    icon: <Server size={40} />,
  },

  {
    title: "Programación",
    icon: <Code2 size={40} />,
  },
  {
  title: "Desarrollo de Páginas Web",
  icon: <Laptop size={40} />,
},
];

/* =========================
   CIVIL ENGINEERING
========================= */

const civilServices = [
  {
    title: "Ecuaciones Diferenciales",
    icon: <Workflow size={40} />,
  },

  {
    title: "Matemáticas Especiales",
    icon: <Boxes size={40} />,
  },

  {
    title: "Estática",
    icon: <HardHat size={40} />,
  },

  {
    title: "Resistencia de Materiales",
    icon: <Dumbbell size={40} />,
  },

  {
    title: "Análisis Estructural",
    icon: <Building2 size={40} />,
  },

  {
    title: "Manejo de ETABS",
    icon: <Building2 size={40} />,
  },
];

/* =========================
   OTHER SERVICES
========================= */

const otherServices = [
  {
    title: "Trabajos de Inglés",
    icon: <Languages size={40} />,
  },

  {
    title: "Ensayos",
    icon: <FileText size={40} />,
  },

  {
    title: "Lecturas",
    icon: <BookOpen size={40} />,
  },

  {
    title: "Y mucho más...",
    icon: <Sparkles size={40} />,
  },
];

export default function Services() {
  return (
    <section
      id="servicios"
      className="py-24 px-6 bg-slate-950 text-white"
    >
      <div className="max-w-7xl mx-auto">

        {/* TITULO PRINCIPAL */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl font-black">
            Servicios
          </h2>

          <p className="mt-4 text-slate-400 text-lg">
            Soluciones académicas y tecnológicas
          </p>
        </motion.div>

        {/* =========================================
            SOFTWARE ENGINEERING
        ========================================= */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="flex items-center gap-4 mb-10">

            <div className="bg-cyan-400/20 p-4 rounded-2xl">
              <Code2 className="text-cyan-300" size={30} />
            </div>

            <div>
              <h3 className="text-4xl font-black">
                Enfocado a la Ingeniería de Software
              </h3>

              <p className="text-slate-400 mt-2">
                Desarrollo web moderno, programación y bases matemáticas.
              </p>
            </div>

          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

            {softwareServices.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group bg-gradient-to-br from-slate-900 to-slate-800 border border-white/10 p-8 rounded-[2rem] hover:border-cyan-400/40 hover:-translate-y-2 transition-all duration-300 shadow-2xl"
              >
                <div className="text-cyan-300 mb-6">
                  {service.icon}
                </div>

                <h3 className="text-2xl font-bold group-hover:text-cyan-300 transition">
                  {service.title}
                </h3>
              </motion.div>
            ))}

          </div>
        </motion.div>

        {/* =========================================
            CIVIL ENGINEERING
        ========================================= */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="flex items-center gap-4 mb-10">

            <div className="bg-emerald-400/20 p-4 rounded-2xl">
              <Building2 className="text-emerald-300" size={30} />
            </div>

            <div>
              <h3 className="text-4xl font-black">
                Enfocado a la Ingeniería Civil
              </h3>

              <p className="text-slate-400 mt-2">
                Refuerzo académico especializado y herramientas de ingeniería.
              </p>
            </div>

          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

            {civilServices.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.08 }}
                viewport={{ once: true }}
                className="group bg-gradient-to-br from-slate-900 to-slate-800 border border-white/10 p-8 rounded-[2rem] hover:border-emerald-400/40 hover:-translate-y-2 transition-all duration-300 shadow-2xl"
              >
                <div className="text-emerald-300 mb-6">
                  {service.icon}
                </div>

                <h3 className="text-2xl font-bold group-hover:text-emerald-300 transition">
                  {service.title}
                </h3>
              </motion.div>
            ))}

          </div>
        </motion.div>

        {/* =========================================
            OTHERS
        ========================================= */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center gap-4 mb-10">

            <div className="bg-purple-400/20 p-4 rounded-2xl">
              <Sparkles className="text-purple-300" size={30} />
            </div>

            <div>
              <h3 className="text-4xl font-black">
                Otros
              </h3>

              <p className="text-slate-400 mt-2">
                Apoyo académico complementario para diferentes áreas.
              </p>
            </div>

          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

            {otherServices.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.08 }}
                viewport={{ once: true }}
                className="group bg-gradient-to-br from-slate-900 to-slate-800 border border-white/10 p-8 rounded-[2rem] hover:border-purple-400/40 hover:-translate-y-2 transition-all duration-300 shadow-2xl"
              >
                <div className="text-purple-300 mb-6">
                  {service.icon}
                </div>

                <h3 className="text-2xl font-bold group-hover:text-purple-300 transition">
                  {service.title}
                </h3>
              </motion.div>
            ))}

          </div>
        </motion.div>

      </div>
    </section>
  );
}