"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  {
    question: "¿Las asesorías son virtuales?",
    answer:
      "Sí. Todas las asesorías pueden realizarse virtualmente mediante videollamada o chat.",
  },
  {
    question: "¿Qué materias manejas?",
    answer:
      "Matemáticas, cálculo diferencial, cálculo integral, programación y desarrollo web.",
  },
  {
    question: "¿Realizas talleres y proyectos?",
    answer:
      "Sí. También realizo acompañamiento académico, talleres y proyectos personalizados.",
  },
  {
    question: "¿Cómo puedo contactarte?",
    answer:
      "Puedes escribir directamente por WhatsApp o Instagram desde la página.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section
      id="faq"
      className="py-24 px-6 bg-slate-950 text-white"
    >
      <div className="max-w-4xl mx-auto">

        {/* TITULO */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-black">
            Preguntas Frecuentes
          </h2>

          <p className="mt-4 text-slate-400">
            Resolvemos tus dudas rápidamente
          </p>
        </div>

        {/* FAQ */}
        <div className="space-y-6">

          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              layout
              className="bg-slate-900 border border-white/10 rounded-3xl overflow-hidden"
            >
              <button
                onClick={() =>
                  setOpen(open === index ? null : index)
                }
                className="w-full flex items-center justify-between p-6 text-left"
              >
                <span className="text-xl font-bold">
                  {faq.question}
                </span>

                <ChevronDown
                  className={`transition duration-300 ${
                    open === index ? "rotate-180" : ""
                  }`}
                />
              </button>

              <AnimatePresence>

                {open === index && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    className="px-6 pb-6 text-slate-400"
                  >
                    {faq.answer}
                  </motion.div>
                )}

              </AnimatePresence>
            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
}