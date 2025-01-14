"use client";
import React from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { FaPaintBrush, FaLanguage, FaChalkboardTeacher } from "react-icons/fa";

export default function Bilinguismo() {
  const { t } = useLanguage();

  return (
    <div className="bg-background-primary dark:bg-background-tertiary text-white sm:mt-16 mt-10">
      <section className="py-12 px-6 space-y-12 max-w-7xl mx-auto">
        {/* Título principal */}
        <h1 className="text-center text-4xl font-extrabold text-background-secondary dark:text-blue-400">
          {t.bilinguis.title}
        </h1>

        {/* Descripción inicial */}
        <div className="space-y-6 text-lg text-gray-800 dark:text-gray-300 leading-relaxed">
          {t.bilinguis.description1.map((paragraph, index) => (
            <p key={index} className="max-w-4xl mx-auto text-center">
              {paragraph}
            </p>
          ))}
        </div>

        {/* Imágenes representativas */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {[
            {
              src: "/muralSanValentin.jpg",
              alt: "Mural San Valentín",
            },
            {
              src: "/diaAndalucia.jpg",
              alt: "Día de Andalucía",
            },
          ].map((image, index) => (
            <div
              key={index}
              className="relative w-full h-64 sm:h-80 rounded-xl shadow-lg overflow-hidden"
            >
              <img
                src={image.src}
                alt={image.alt}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-300 hover:scale-105"
              />
            </div>
          ))}
        </div>

        {/* Segunda descripción */}
        <div className="space-y-6 text-lg text-gray-800 dark:text-gray-300 leading-relaxed">
          {t.bilinguis.description2.map((paragraph, index) => (
            <p key={index} className="max-w-4xl mx-auto text-center">
              {paragraph}
            </p>
          ))}
        </div>

        {/* Talleres */}
        <div>
          <h2 className="text-2xl font-bold text-center text-background-secondary dark:text-blue-400 mb-6">
            Talleres
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: <FaPaintBrush className="text-red-500 text-4xl" />,
                description: t.bilinguis.talleres[0],
              },
              {
                icon: <FaLanguage className="text-green-500 text-4xl" />,
                description: t.bilinguis.talleres[1],
              },
              {
                icon: <FaChalkboardTeacher className="text-blue-500 text-4xl" />,
                description: t.bilinguis.talleres[2],
              },
            ].map((taller, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-blue-50 to-blue-100 dark:from-gray-800 dark:to-gray-700 p-6 rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-transform duration-300"
              >
                <div className="flex items-center justify-center mb-4">
                  {taller.icon}
                </div>
                <h4 className="text-xl font-semibold text-background-secondary dark:text-blue-400 mb-2 text-center">
                  {taller.title}
                </h4>
                <p className="text-gray-800 dark:text-gray-300 text-center">
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
