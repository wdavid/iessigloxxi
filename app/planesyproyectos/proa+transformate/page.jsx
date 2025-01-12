"use client";
import React from "react";
import { useLanguage } from "@/contexts/LanguageContext";

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

        {/* Pasos Enumerados */}
        <div>
          <h2 className="text-2xl font-bold text-center text-background-secondary dark:text-blue-300 mb-6">
            Pasos Clave del Proyecto
          </h2>
          <ol className="list-decimal pl-8 space-y-4 text-lg text-gray-800 dark:text-gray-300">
            {t.proat.steps.map((step, index) => (
              <li key={index} className="flex items-start space-x-2">
                <span className="text-blue-500 font-bold">{`${index + 1}.`}</span>
                <p>{step}</p>
              </li>
            ))}
          </ol>
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
