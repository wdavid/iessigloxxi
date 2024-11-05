"use client";
import React from 'react';
import { useLanguage } from "@/contexts/LanguageContext";

export default function Secretaria() {
  const { t } = useLanguage();

  return (
    <div className="bg-background-primary dark:bg-background-tertiary text-white sm:mt-20 mt-10">
      <section className="py-12 px-6 space-y-8 max-w-7xl mx-auto">
        
        {/* Título de Secretaría */}
        <h1 className="text-center text-3xl font-bold text-background-secondary dark:text-blue-400">
          {t.secret.title}
        </h1>

        {/* Horario de Secretaría */}
        <div className="text-center space-y-4 text-lg text-gray-800 dark:text-gray-300">
          <h2 className="text-2xl font-semibold text-background-secondary dark:text-blue-400">
            {t.secret.scheduleTitle}
          </h2>
          <p>{t.secret.schedule}</p>
        </div>

        {/* Teléfonos de Contacto */}
        <div className="space-y-6">
          <h2 className="text-center text-2xl font-semibold text-background-secondary dark:text-blue-400">
            {t.secret.contactTitle}
          </h2>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
            {t.secret.contactNumbers.map((number, index) => (
              <div key={index} className="bg-background-secondary dark:bg-gray-800 p-6 rounded-lg shadow-lg text-center">
                <h3 className="text-xl font-bold text-white">{number.title}</h3>
                <p className="text-white dark:text-gray-300">{number.phone}</p>
              </div>
            ))}
          </div>
        </div>

      </section>
    </div>
  );
}
