"use client";

import { motion } from "framer-motion";
import {
  Calculator,
  Code2,
  Sigma,
  Laptop,
  Brain,
  Server,
} from "lucide-react";

const services = [
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
];

export default function Services() {
  return (
    <section
      id="servicios"
      className="py-24 px-6 bg-slate-950 text-white"
    >
      <div className="max-w-7xl mx-auto">

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-black">
            Servicios
          </h2>

          <p className="mt-4 text-slate-400 text-lg">
            Soluciones académicas y tecnológicas
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {services.map((service, index) => (
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
      </div>
    </section>
  );
}