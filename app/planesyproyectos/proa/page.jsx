"use client";
import React from 'react';
import { useLanguage } from "@/contexts/LanguageContext";

export default function Page() {
  const { t } = useLanguage();

  return (
    <div className="bg-background-primary dark:bg-background-tertiary text-white sm:mt-20 mt-10">
      <section className="py-12 px-6 space-y-8 max-w-7xl mx-auto">
        <div className="space-y-2 text-lg text-gray-800 dark:text-gray-300">
          <h2 className="text-3xl font-bold text-background-secondary dark:text-blue-400 text-center">
            {t.proaproyecto.title}
          </h2>
          <h3 className='text-2xl font-medium text-background-secondary dark:text-blue-400 text-center'>
            {t.proaproyecto.titleobjetivos}
          </h3>

          <div className="grid grid-cols-1 smcard:grid-cols-2 md:grid-cols-3 gap-6">
            {t.proaproyecto.objetivos.map((objetivo, index) => (
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
          <div className='w-full flex flex-col items-center'>
            <img src="/proaFondoEU.jpg" alt="image" className='my-6 rounded-lg w-96'/>
          </div>
          {t.proaproyecto.descripcion.map((paragraph, index) => (
            <p key={index} className="text-base text-gray-800 dark:text-gray-300 mt-6">
              {paragraph}
            </p>
          ))}
        </div>
      </section>
    </div>
  );
}
