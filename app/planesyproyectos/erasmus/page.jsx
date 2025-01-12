"use client";
import React from "react";
import { useLanguage } from "@/contexts/LanguageContext";

export default function Erasmus() {
  const { t } = useLanguage();

  return (
    <div className="bg-background-primary dark:bg-background-tertiary text-white sm:mt-16 mt-10">
      <section className="py-12 px-6 space-y-8 max-w-7xl mx-auto">
        {/* Título principal */}
        <h1 className="text-center text-4xl font-extrabold text-background-secondary dark:text-blue-400 mb-8">
          {t.erasmusp.title}
        </h1>

        {/* Descripción inicial */}
        <p className="text-lg text-gray-800 dark:text-gray-300 leading-relaxed text-center max-w-4xl mx-auto">
          {t.erasmusp.description}
        </p>

        {/* Objetivos */}
        <div className="mt-12">
          <h2 className="text-2xl font-bold text-center text-background-secondary dark:text-blue-300 mb-6">
            {t.erasmusp.tobjetivo}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8 text-blue-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 10h11M9 21V3m4 18l6-6m-6 0l-6 6"
                    />
                  </svg>
                ),
                title: `${t.erasmusp.tituloobj[0]}`,
                description:
                  `${t.erasmusp.objdescript[0]}`,
              },
              {
                icon: (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8 text-green-500"
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
                ),
                title: `${t.erasmusp.tituloobj[1]}`,
                description:
                  "Mejorar las competencias digitales del profesorado para la transformación digital del centro, fomentando el uso de nuevas tecnologías y métodos de enseñanza innovadores.",
              },
              {
                icon: (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8 text-red-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 4a2 2 0 012-2h3m10 0h3a2 2 0 012 2v3m0 10v3a2 2 0 01-2 2h-3m-10 0H5a2 2 0 01-2-2v-3m0-10V5a2 2 0 012-2h3m10 0v3a2 2 0 01-2 2h-3m-10 0h3a2 2 0 012-2v-3"
                    />
                  </svg>
                ),
                title: `${t.erasmusp.tituloobj[2]}`,
                description:
                  "Explorar metodologías para la enseñanza de materias con idiomas extranjeros y fomentar la cultura de la movilidad europea en el centro.",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg flex flex-col items-center space-y-4 hover:shadow-xl transform hover:scale-105 transition-transform duration-300"
              >
                <div>{item.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100">
                  {item.title}
                </h3>
                <p className="text-gray-700 dark:text-gray-400 text-center">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Documentos Relacionados */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold text-center text-background-secondary dark:text-blue-300 mb-6">
            Documentos Relacionados con ERASMUS+
          </h2>
          <ul className="space-y-4 text-lg text-gray-800 dark:text-gray-300 list-disc list-inside">
            {[
              "Bases de la convocatoria de becas de FP para la realización de prácticas en Europa.",
              "Convenio de subvención del programa ERASMUS+.",
              "Acreditación para coordinador de un consorcio de movilidad.",
              "Baremación de los méritos del profesorado.",
            ].map((doc, index) => (
              <li key={index} className="flex items-start space-x-2">
                <span className="text-blue-500 font-bold">•</span>
                <p>{doc}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
}
