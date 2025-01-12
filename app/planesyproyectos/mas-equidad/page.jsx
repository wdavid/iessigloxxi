"use client";
import React from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { FaLightbulb, FaTools, FaChalkboardTeacher, FaRocket, FaHandshake } from "react-icons/fa";

export default function MasEquidad() {
  const { t } = useLanguage();

  return (
    <div className="bg-background-primary dark:bg-background-tertiary text-white sm:mt-20 mt-10">
      <section className="py-12 px-6 space-y-12 max-w-7xl mx-auto">
        {/* Título principal */}
        <div className="space-y-4 text-center">
          <h2 className="text-4xl font-extrabold text-background-secondary dark:text-blue-400">
            {t.masequid.title}
          </h2>
          <h3 className="text-2xl font-medium text-background-secondary dark:text-blue-400">
            {t.masequid.titleobjetivos}
          </h3>
        </div>

        {/* Grid de Objetivos */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 mt-12">
          {[
            {
              icon: <FaLightbulb className="text-yellow-500 text-3xl" />,
              description: t.masequid.objetivos[0],
            },
            {
              icon: <FaTools className="text-blue-500 text-3xl" />,
              description: t.masequid.objetivos[1],
            },
            {
              icon: <FaChalkboardTeacher className="text-green-500 text-3xl" />,
              description: t.masequid.objetivos[2],
            },
            {
              icon: <FaRocket className="text-red-500 text-3xl" />,
              description: t.masequid.objetivos[3],
            },
            {
              icon: <FaHandshake className="text-purple-500 text-3xl" />,
              description: t.masequid.objetivos[4],
            },
          ].map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-transform transform hover:scale-105"
            >
              <div className="mb-3">{item.icon}</div>
              <h3 className="text-xl font-bold text-background-secondary dark:text-blue-400 mb-2">
                {item.title}
              </h3>
              <p className="text-gray-700 dark:text-gray-400">{item.description}</p>
            </div>
          ))}
        </div>


        {/* Actuaciones */}
        <div className="text-center space-y-4">
          <h3 className="text-2xl font-bold text-background-secondary dark:text-blue-400">
            {t.masequid.actuaciones}
          </h3>
          <p className="text-lg text-gray-700 dark:text-gray-300 max-w-4xl mx-auto">
            {t.masequid.descpitactuaciones}
          </p>
        </div>

        {/* Talleres */}
        <div>
          <h3 className="text-3xl font-bold text-center text-background-secondary dark:text-blue-400 mb-8">
            Talleres Relacionados
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {Object.values(t.masequid.talleres).map((taller, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-blue-50 to-blue-100 dark:from-gray-800 dark:to-gray-700 p-6 rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-transform duration-300"
              >
                <img
                  src={taller.image}
                  alt={taller.title}
                  className="w-full h-48 object-cover rounded-lg mb-4"
                />
                <h4 className="text-xl font-semibold text-background-secondary dark:text-blue-400 mb-2">
                  {taller.title}
                </h4>
                <p className="text-sm text-gray-700 dark:text-gray-400">
                  {taller.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
