"use client";
import React from 'react';
import { useLanguage } from "@/contexts/LanguageContext";

export default function MasEquidad() {
  const { t } = useLanguage();
  return (
    <div className="bg-background-primary dark:bg-background-tertiary text-white sm:mt-20 mt-10">
      <section className="py-12 px-6 space-y-8 max-w-7xl mx-auto">
        <div className="space-y-2 text-lg text-gray-800 dark:text-gray-300">
          <h2 className="text-3xl font-bold text-background-secondary dark:text-blue-400 text-center">
            {t.masequid.title}
          </h2>
          <h3 className="text-2xl font-medium text-background-secondary dark:text-blue-400 text-center">
            {t.masequid.titleobjetivos}
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {t.masequid.objetivos.map((objetivo, index) => (
              <div
                key={index}
                className="bg-slate-100 dark:bg-gray-800 text-gray-900 dark:text-gray-300 p-6 rounded-lg shadow-lg"
              >
                <h3 className="text-base text-black dark:text-white mb-3">
                  {objetivo}
                </h3>
              </div>
            ))}
          </div>

          <div className="flex flex-col items-center mt-6">
            <h3 className="text-2xl font-bold text-background-secondary mt-10">{t.masequid.actuaciones}</h3>
            <p className='mb-7'>{t.masequid.descpitactuaciones}</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-8">
            {/* Usando grid para crear 3 columnas */}
            {Object.values(t.masequid.talleres).map((taller, index) => (
              <div
                key={index}
                className="bg-slate-100 dark:bg-gray-800 text-gray-900 dark:text-gray-300 p-6 rounded-lg shadow-lg"
              >
                <h3 className="text-xl font-semibold text-background-secondary dark:text-blue-400 mb-3">
                  {taller.title}
                </h3>
                <p>{taller.description}</p>
                <img
                  src={taller.image}
                  alt={taller.title}
                  className="w-full h-48 object-cover rounded-lg mb-4"
                />
                
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
