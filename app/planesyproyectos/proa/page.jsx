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


          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
            {t.proaproyecto.objetivos.map((objetivo, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:scale-105"
              >
                <div className="flex items-center space-x-4 mb-3">
                  <div className="bg-blue-500 text-white rounded-full p-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12h6m-6 4h6m-6-8h6m-9 8H6a2 2 0 01-2-2V6a2 2 0 012-2h3m3-1h6m0 0a2 2 0 012 2v3m-1 12h3m-3 0a2 2 0 01-2-2v-3"
                      />
                    </svg>
                  </div>
                  <h3 className="text-lg font-bold text-background-secondary dark:text-blue-400">
                    {`Objetivo ${index + 1}`}
                  </h3>
                </div>
                <p className="text-sm text-gray-700 dark:text-gray-400">
                  {objetivo}
                </p>
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
