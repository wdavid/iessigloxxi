"use client";
import React from 'react';
import { useLanguage } from "@/contexts/LanguageContext";

export default function Biblioteca() {
  const { t } = useLanguage();
  
  return (
    <div className="bg-background-primary dark:bg-background-tertiary text-white sm:mt-20 mt-10">
      <section className="py-12 px-6 space-y-8 max-w-7xl mx-auto">
        
        {/* Título de la Biblioteca */}
        <h1 className="text-center text-3xl font-bold text-background-secondary dark:text-blue-400">
          {t.biblio.title}
        </h1>

        {/* Descripción General */}
        <div className="space-y-4 text-lg text-gray-800 dark:text-gray-300">
          {t.biblio.description.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>

        {/* Servicios */}
        <div className="space-y-6">
          <h2 className="text-center text-2xl font-semibold text-background-secondary dark:text-blue-400">
            {t.biblio.servicesTitle}
          </h2>
          <div className="grid grid-cols-1 smcard:grid-cols-2 md:grid-cols-3 gap-6">
            {t.biblio.services.map((service, index) => (
              <div key={index} className="bg-background-secondary dark:bg-gray-800 p-6 rounded-lg shadow-lg flex flex-col items-center text-center">
                <div className="text-3xl text-white dark:text-blue-400 mb-4">
                  {React.createElement(service.icon)}
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{service.title}</h3>
                <p className="text-white dark:text-gray-300">{service.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Fomento de la Lectura y Actividades */}
        <div className="space-y-4 text-lg text-gray-800 dark:text-gray-300">
          <h2 className="text-2xl font-semibold text-background-secondary dark:text-blue-400">
            {t.biblio.focusTitle}
          </h2>
          {t.biblio.focus.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>

        {/* Competencias Transversales */}
        <div className="space-y-4 text-lg text-gray-800 dark:text-gray-300">
          <h2 className="text-2xl font-semibold text-background-secondary dark:text-blue-400">
            {t.biblio.benefitsTitle}
          </h2>
          {t.biblio.benefits.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>
        
      </section>
    </div>
  );
}
