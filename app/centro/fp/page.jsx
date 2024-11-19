"use client";
import React from "react";
import { useLanguage } from "@/contexts/LanguageContext";

export default function FormacionProfesional() {
  const { t } = useLanguage();

  // Datos de las tablas para cada programa
  const programasData = [
    {
      title: "Ciclo Formativo Grado Básico Fabricación y Montaje",
      modules: [
        { code: "3020", name: "Operaciones Básicas de Fabricación", hours: 160, firstYear: 5, secondYear: "" },
        { code: "3021", name: "Soldadura y carpintería metálica", hours: 160, firstYear: 5, secondYear: "" },
        { code: "3024", name: "Fontanería y calefacción básica", hours: 192, firstYear: 6, secondYear: "" },
        { code: "3159", name: "Itinerario Personal", hours: 96, firstYear: 3, secondYear: "" },
        { code: "3161", name: "Comunicación y Ciencias Sociales I", hours: 192, firstYear: 6, secondYear: "" },
        { code: "3163", name: "Ciencias Aplicadas I", hours: 128, firstYear: 4, secondYear: "" },
        { code: "9990", name: "Tutoría", hours: 32, firstYear: 1, secondYear: "" },
        { code: "3022", name: "Carpintería de aluminio y PVC", hours: 245, firstYear: "", secondYear: 7 },
        { code: "3023", name: "Redes de evacuación", hours: 245, firstYear: "", secondYear: 7 },
        { code: "3025", name: "Montaje de equipos de climatización", hours: 140, firstYear: "", secondYear: 4 },
        { code: "3160", name: "Proyecto intermodular de aprendizaje colaborativo", hours: 70, firstYear: "", secondYear: 2 },
        { code: "3162", name: "Comunicación y Ciencias Sociales II", hours: 175, firstYear: "", secondYear: 5 },
        { code: "3164", name: "Ciencias Aplicadas II", hours: 140, firstYear: "", secondYear: 4 },
        { code: "9990", name: "Tutoría", hours: 35, firstYear: "", secondYear: 1 },
      ],
    },
    {
      title: "Ciclo Formativo Grado Medio Soldadura y Calderería",
      modules: [
        { code: "0007", name: "Interpretación Gráfica", hours: 96, firstYear: 3, secondYear: "" },
        { code: "0091", name: "Trazado, Corte y Conformado", hours: 256, firstYear: 8, secondYear: "" },
        { code: "0092", name: "Mecanizado", hours: 192, firstYear: 6, secondYear: "" },
        { code: "0093", name: "Soldadura en Atmósfera Natural", hours: 256, firstYear: 8, secondYear: "" },
        { code: "1664", name: "Digitalización aplicada al sistema productivo GM", hours: 32, firstYear: 1, secondYear: "" },
        { code: "1708", name: "Sostenibilidad aplicada al sistema productivo", hours: 32, firstYear: 1, secondYear: "" },
        { code: "1709", name: "Itinerario personal para la empleabilidad I", hours: 96, firstYear: 3, secondYear: "" },
        { code: "0006", name: "Metrología y Ensayos", hours: 175, firstYear: "", secondYear: 5 },
        { code: "0094", name: "Soldadura en Atmósfera Protegida", hours: 350, firstYear: "", secondYear: 10 },
        { code: "0095", name: "Montaje", hours: 175, firstYear: "", secondYear: 5 },
        { code: "0156", name: "Inglés profesional GM", hours: 70, firstYear: "", secondYear: 2 },
        { code: "1710", name: "Itinerario personal para la empleabilidad II", hours: 105, firstYear: "", secondYear: 3 },
        { code: "1713", name: "Proyecto Intermodular", hours: 70, firstYear: "", secondYear: 2 },
        { code: "CTOP", name: "Optativa", hours: 105, firstYear: "", secondYear: 3 },
      ],
    },
  ];

  return (
    <div className="bg-background-primary dark:bg-background-tertiary text-white sm:mt-20 mt-10">
      <section className="py-12 px-6 bg-white dark:bg-background-tertiary space-y-6">
        <h1 className="text-background-secondary dark:text-blue-400 text-2xl font-bold sm:text-center mb-4">
          {t.formp.title}
        </h1>

        {/* Programas */}
        {t.formp.programas.map((programa, index) => (
          <div key={index} className="sm:mx-20 flex flex-col items-center">
            <h2 className="text-black dark:text-white font-bold text-lg sm:text-center">{programa.title}</h2>
            <p className="text-black dark:text-white text-lg text-justify mb-4">{programa.description}</p>

            <div className="mt-6 w-full">
              <h3 className="text-black dark:text-white text-lg font-bold text-center mb-4">
                {t.formp.distrib}
              </h3>
              <div className="overflow-x-auto">
                <table className="table-auto w-full text-left border-collapse border border-gray-300 dark:border-gray-700">
                  <thead>
                    <tr className="bg-gray-100 dark:bg-gray-800">
                      <th className="border border-gray-300 dark:border-gray-700 text-black dark:text-white px-4 py-2">
                        Código
                      </th>
                      <th className="border border-gray-300 dark:border-gray-700 text-black dark:text-white px-4 py-2">
                        Módulo
                      </th>
                      <th className="border border-gray-300 dark:border-gray-700 text-black dark:text-white px-4 py-2">
                        Horas Anuales
                      </th>
                      <th className="border border-gray-300 dark:border-gray-700 text-black dark:text-white px-4 py-2">
                        1º Año
                      </th>
                      <th className="border border-gray-300 dark:border-gray-700 text-black dark:text-white px-4 py-2">
                        2º Año
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {programasData[index].modules.map((module, moduleIndex) => (
                      <tr
                        key={moduleIndex}
                        className={`${
                          moduleIndex % 2 === 0
                            ? "bg-gray-50 dark:bg-gray-900"
                            : "bg-white dark:bg-gray-800"
                        }`}
                      >
                        <td className="border border-gray-300 text-black dark:text-white dark:border-gray-700 px-4 py-2">
                          {module.code}
                        </td>
                        <td className="border border-gray-300 text-black dark:text-white dark:border-gray-700 px-4 py-2">
                          {module.name}
                        </td>
                        <td className="border border-gray-300 text-black dark:text-white dark:border-gray-700 px-4 py-2">
                          {module.hours}
                        </td>
                        <td className="border border-gray-300 text-black dark:text-white dark:border-gray-700 px-4 py-2">
                          {module.firstYear}
                        </td>
                        <td className="border border-gray-300 text-black dark:text-white dark:border-gray-700 px-4 py-2">
                          {module.secondYear}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
            <a
              href={programa.link}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-background-hover px-5 py-2 rounded-xl mt-8"
            >
              {t.formp.moreInfo}
            </a>

            {index < t.formp.programas.length - 1 && (
              <hr className="border-t-1 border-background-secondary w-full my-8" />
            )}
          </div>
        ))}
      </section>
    </div>
  );
}
