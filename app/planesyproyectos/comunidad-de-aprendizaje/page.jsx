"use client";
import React from 'react';
import { useLanguage } from "@/contexts/LanguageContext";

export default function ComunidadA() {
  const { t } = useLanguage();
  return (
    <div className="bg-background-primary dark:bg-background-tertiary text-white sm:mt-20 mt-10">
      <section className="py-12 px-6 space-y-8 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-background-secondary dark:text-blue-400 text-center">
          {t.comapren.title}
        </h2>

        <div className='flex flex-col items-center'>
          <img src="/comunidadAprendizaje.png" alt="comunidad.png" className='w-80 rounded-lg'/>
        </div>

        <div className="grid grid-cols-1 smcard:grid-cols-2 md:grid-cols-3 gap-8 mt-8">
          {t.comapren.objectives.map((objective, index) => {
            const Icon = objective.icon; // Usamos directamente el icono que está importado en `es.js`
            return (
              <div
                key={index}
                className="bg-slate-100 dark:bg-gray-800 text-gray-900 dark:text-gray-300 p-6 rounded-lg shadow-lg"
              >
                <div className="flex items-center mb-4">
                  <Icon className="text-4xl text-background-secondary dark:text-blue-400 mr-4" />
                  <h3 className="text-xl font-semibold text-background-secondary dark:text-blue-400">
                    {objective.title}
                  </h3>
                </div>
                <p className="text-base text-gray-700 dark:text-gray-300">{objective.description}</p>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}
