"use client";
import React from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { FaBullseye, FaClipboardCheck, FaProjectDiagram, FaChartLine, FaCogs } from "react-icons/fa";

export default function Page() {
  const { t } = useLanguage();

  return (
    <div className="bg-background-primary dark:bg-background-tertiary text-white sm:mt-20 mt-10">
      <section className="py-12 px-6 space-y-12 max-w-7xl mx-auto">
        {/* Títulos */}
        <div className="text-center space-y-4">
          <h2 className="text-4xl font-extrabold text-background-secondary dark:text-blue-400">
            {t.proaproyecto.title}
          </h2>
          <h3 className="text-2xl font-medium text-background-secondary dark:text-blue-400">
            {t.proaproyecto.titleobjetivos}
          </h3>
        </div>

        {/* Objetivos en Tarjetas */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
          {[
            {
              icon: <FaBullseye className="text-blue-500 text-3xl" />,
              description: t.proaproyecto.objetivos[0],
            },
            {
              icon: <FaClipboardCheck className="text-green-500 text-3xl" />,
              description: t.proaproyecto.objetivos[1],
            },
            {
              icon: <FaProjectDiagram className="text-purple-500 text-3xl" />,
              description: t.proaproyecto.objetivos[2],
            },
            {
              icon: <FaChartLine className="text-red-500 text-3xl" />,
              description: t.proaproyecto.objetivos[3],
            },
            {
              icon: <FaCogs className="text-yellow-500 text-3xl" />,
              description: t.proaproyecto.objetivos[4],
            },
          ].map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-transform transform hover:scale-105"
            >
              <div className="mb-4">{item.icon}</div>
              <h3 className="text-xl font-bold text-background-secondary dark:text-blue-400 mb-2">
                {item.title}
              </h3>
              <p className="text-gray-700 dark:text-gray-400">{item.description}</p>
            </div>
          ))}
        </div>

        {/* Imagen Representativa */}
        <div className="flex justify-center">
          <img
            src="/proaFondoEU.jpg"
            alt="Proa Fondo EU"
            className="my-8 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300 w-full max-w-lg"
          />
        </div>

        {/* Descripción */}
        <div className="space-y-6 text-lg text-gray-800 dark:text-gray-300 leading-relaxed">
          {t.proaproyecto.descripcion.map((paragraph, index) => (
            <p key={index} className="max-w-4xl mx-auto text-center">
              {paragraph}
            </p>
          ))}
        </div>
      </section>
    </div>
  );
}
