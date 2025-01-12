"use client";
import React from "react";
import { useLanguage } from "@/contexts/LanguageContext";

export default function Bilinguismo() {
  const { t } = useLanguage();

  return (
    <div className="bg-background-primary dark:bg-background-tertiary text-white sm:mt-16 mt-10">
      <section className="py-12 px-6 space-y-8 max-w-7xl mx-auto">
        <h1 className="text-center text-3xl font-bold text-background-secondary dark:text-blue-400">
          {t.bilinguis.title}
        </h1>

        <div className="space-y-4 text-lg text-gray-800 dark:text-gray-300">
          {t.bilinguis.description1.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div className="relative w-full h-64 sm:h-80">
            <img
              src="/muralSanValentin.jpg"
              alt="Mural San Valentín"
              className="absolute inset-0 w-full h-full object-cover rounded-xl"
            />
          </div>
          <div className="relative w-full h-64 sm:h-80">
            <img
              src="/diaAndalucia.jpg"
              alt="Día de Andalucía"
              className="absolute inset-0 w-full h-full object-cover rounded-xl"
            />
          </div>
        </div>

        <div className="space-y-4 text-lg text-gray-800 dark:text-gray-300">
          {t.bilinguis.description2.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>

        <div className="space-y-4 text-lg text-black dark:text-gray-300">
          {t.bilinguis.talleres.map((paragraph, index) => (
            <div
              key={index}
              className="bg-slate-100 shadow-xl dark:bg-gray-800 rounded-xl p-3"
            >
              <p className="text-center">{paragraph}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
