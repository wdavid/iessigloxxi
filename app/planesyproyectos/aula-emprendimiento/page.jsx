"use client";
import React from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { FaChalkboardTeacher, FaTools, FaRocket, FaLightbulb, FaHandshake } from "react-icons/fa";

export default function AulaEmprendimiento() {
  const { t } = useLanguage();

  return (
    <div className="bg-background-primary dark:bg-background-tertiary text-white sm:mt-16 mt-10">
      <section className="py-12 px-6 space-y-12 max-w-7xl mx-auto">
        {/* Título principal */}
        <h1 className="text-center text-4xl font-extrabold text-background-secondary dark:text-blue-400">
          {t.aulaemp.title}
        </h1>

        {/* Descripción general */}
        <div className="text-lg text-gray-800 dark:text-gray-300 leading-relaxed space-y-6">
          {t.aulaemp.description.map((paragraph, index) => (
            <p key={index} className="max-w-4xl mx-auto text-center">
              {paragraph}
            </p>
          ))}
        </div>

        {/* Pasos para alcanzar los objetivos */}
        <div>
          <h2 className="text-2xl font-bold text-center text-background-secondary dark:text-blue-300 mb-6">
            {t.aulaemp.stepsTitle || "Pasos para alcanzar los objetivos"}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: <FaChalkboardTeacher className="text-blue-500 text-4xl" />,
                description: t.aulaemp.steps[0],
              },
              {
                icon: <FaTools className="text-green-500 text-4xl" />,
                description: t.aulaemp.steps[1],
              },
              {
                icon: <FaRocket className="text-red-500 text-4xl" />,
                description: t.aulaemp.steps[2],
              },
              {
                icon: <FaLightbulb className="text-yellow-500 text-4xl" />,
                description: t.aulaemp.steps[3],
              },
              {
                icon: <FaHandshake className="text-purple-500 text-4xl" />,
                description: t.aulaemp.steps[4],
              },
            ].map((step, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg flex flex-col items-center space-y-4 hover:shadow-xl transform hover:scale-105 transition-transform duration-300"
              >
                <div>{step.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100">
                  {step.title}
                </h3>
                <p className="text-gray-700 dark:text-gray-400 text-center">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Imagen con descripción */}
        <div className="mt-12">
          <img
            src="/ObjetivosDesarrollo.jpg"
            alt="Logo Objetivos de desarrollo sostenible"
            className="rounded-lg w-full max-w-3xl mx-auto shadow-lg transform hover:scale-105 transition-transform duration-300"
          />
          <p className="text-center text-sm text-gray-700 dark:text-gray-400 mt-4">
            {t.aulaemp.imageCaption ||
              "Objetivos de Desarrollo Sostenible relacionados con el Aula de Emprendimiento."}
          </p>
        </div>
      </section>
    </div>
  );
}
