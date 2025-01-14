"use client";
import React from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { FaBullseye, FaProjectDiagram, FaRocket, FaLightbulb, FaHandshake } from "react-icons/fa";

export default function ProaTransformate() {
  const { t } = useLanguage();

  return (
    <div className="bg-background-primary dark:bg-background-tertiary text-white sm:mt-16 mt-10">
      <section className="py-12 px-6 space-y-12 max-w-7xl mx-auto">
        {/* Título Principal */}
        <h1 className="text-center text-4xl font-extrabold text-background-secondary dark:text-blue-400">
          {t.proat.title}
        </h1>

        {/* Descripción General */}
        <div className="space-y-6">
          <p className="text-lg text-gray-800 dark:text-gray-300 leading-relaxed text-center max-w-4xl mx-auto">
            {t.proat.description}
          </p>
        </div>

        {/* Pasos Clave del Proyecto */}
        <div>
          <h2 className="text-2xl font-bold text-center text-background-secondary dark:text-blue-300 mb-6">
            Pasos Clave del Proyecto
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: <FaBullseye className="text-blue-500 text-4xl" />,
                title: "Definir Metas",
                description: t.proat.steps[0],
              },
              {
                icon: <FaProjectDiagram className="text-green-500 text-4xl" />,
                title: "Diseñar Estrategias",
                description: t.proat.steps[1],
              },
              {
                icon: <FaRocket className="text-red-500 text-4xl" />,
                title: "Implementar Acciones",
                description: t.proat.steps[2],
              },
              {
                icon: <FaLightbulb className="text-yellow-500 text-4xl" />,
                title: "Evaluar Resultados",
                description: t.proat.steps[3],
              },
              {
                icon: <FaHandshake className="text-purple-500 text-4xl" />,
                title: "Fomentar la Colaboración",
                description: t.proat.steps[4],
              },
            ].map((step, index) => (
              <div
                key={index}
                className="flex flex-col items-center text-center bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-transform duration-300"
              >
                <div className="mb-4">{step.icon}</div>
                <h3 className="text-xl font-bold text-background-secondary dark:text-blue-400 mb-2">
                  {step.title}
                </h3>
                <p className="text-gray-800 dark:text-gray-300">{step.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Imagen Representativa */}
        <div className="mt-12 text-center">
          <img
            src="/ProaTrans.png"
            alt="Logo PROA+Transformate"
            className="rounded-lg shadow-lg w-full sm:w-[80%] lg:w-[60%] mx-auto object-cover transition-transform hover:scale-105"
          />
        </div>
      </section>
    </div>
  );
}
