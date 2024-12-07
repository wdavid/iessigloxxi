"use client";
import React from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import Image from "next/image";

export default function AboutPage() {
  const { t } = useLanguage();

  return (
    <div className="bg-background-primary dark:bg-background-tertiary text-white sm:mt-16 mt-10">
      <section className="py-8 px-6 bg-white dark:bg-background-tertiary">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
            <div className="md:col-span-2 mb-2">
              <div className="sm:flex items-center mb-5">
                <h2 className="text-3xl font-bold text-background-secondary dark:text-blue-400">
                  {t.about.title}
                </h2>
              </div>

              {/* Mapear cada párrafo en su propia línea */}
              {t.about.paragraphs.map((paragraph, index) => (
                <p
                  key={index}
                  className="text-lg mb-6 text-black sm:text-justify dark:text-gray-300"
                >
                  {paragraph}
                </p>
              ))}
            </div>

            <div className="sm:px-6 sm:pb-6 sm:border-l-2 border-gray-200 dark:border-gray-700 text-black dark:text-white">
              {/* Imagenes con preview y placeholder */}
              <div className="py-4">
                <Image
                  src="/mural-fachada.jpg"
                  alt="fachada del instituto"
                  width={500}
                  height={350}
                  className="rounded-md w-full h-[350px] object-cover"
                  placeholder="blur" // Activa el placeholder de desenfoque
                  blurDataURL="data:image/jpeg;base64,/9j/2wCEA..." // Agrega una URL de datos base64 para un preview ligero
                />
              </div>

              <div className="py-4">
                <Image
                  src="/instituto.jpg"
                  alt="instalaciones del instituto"
                  width={500}
                  height={350}
                  className="rounded-md w-full h-[350px] object-cover"
                  placeholder="blur"
                  blurDataURL="data:image/jpeg;base64,/9j/2wCEA..."
                />
              </div>

              <div className="py-4">
                <Image
                  src="/multiculturalidad.jpeg"
                  alt="multiculturalidad en el instituto"
                  width={500}
                  height={350}
                  className="rounded-md w-full h-[350px] object-cover"
                  placeholder="blur"
                  blurDataURL="data:image/jpeg;base64,/9j/2wCEA..."
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
