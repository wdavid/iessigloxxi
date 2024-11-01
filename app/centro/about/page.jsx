"use client";
import React from 'react';
import { useLanguage } from '/contexts/LanguageContext';
import Image from 'next/image';

export default function page() {
  const { t } = useLanguage();
  return (
    <div className="bg-background-primary dark:bg-background-tertiary text-white mt-10">
      <section className="py-12 px-6 bg-white dark:bg-background-tertiary">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
            <div className="md:col-span-2 mb-2">
              <div className="sm:flex items-center mb-5">
                <h2 className="text-3xl font-bold text-black dark:text-white">{t.about.title}</h2>
              </div>
              
              {/* Mapear cada párrafo en su propia línea */}
              {t.about.paragraphs.map((paragraph, index) => (
                <p key={index} className="text-lg mb-6 text-black dark:text-gray-300">{paragraph}</p>
              ))}
            </div>

            <div className="sm:px-6 sm:pb-6 sm:border-l-2 border-gray-200 dark:border-gray-700 text-black dark:text-white">
            <div className="py-4">
                <img
                  src="/mural-fachada.jpg"
                  alt="Paisaje de Chiltiupán"
                  width={500}
                  height={200}  // Cambia la altura para que coincida con el ancho
                  className="rounded-md w-full h-[350px] object-cover"
                />
              </div>

              <div className="py-4">
                <img
                  src="/instituto.jpg"
                  alt="Paisaje de Chiltiupán"
                  width={500}
                  height={200}  // Cambia la altura para que coincida con el ancho
                  className="rounded-md w-full h-[350px] object-cover"
                />
              </div>

              <div className="py-4">
                <img
                  src="/multiculturalidad.jpeg"
                  alt="Paisaje de Chiltiupán"
                  width={500}
                  height={200}  // Cambia la altura para que coincida con el ancho
                  className="rounded-md w-full h-[350px] object-cover"
                />
              </div>


            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
