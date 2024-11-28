"use client";
import React from 'react';
import { useLanguage } from "@/contexts/LanguageContext";




export default function Organizacion() {
  const { t } = useLanguage();
  const personalDataEstructura = [
    { nombre: "Carpio Torres, María del Mar", puesto: "Secretaria", correo: "mcartor326@g.educaand.es" },
    { nombre: "Rodríguez Mora, Jesús", puesto: "Director", correo: "jrodmor315@g.educaand.es" },
    { nombre: "Romero Rico, Montserrat", puesto: "Jefa de estudios", correo: "mromric861@g.educaand.es" },
  ];

  const personalData = [
    { nombre: "Aparicio Naranjo, Jerónimo", puesto: "Pes Inglés-Francés", correo: "japanar930@g.educaand.es" },
    { nombre: "Banda Millán, Elena", puesto: "Apoyo al Área Científica o Tecnología", correo: "ebanmil023@g.educaand.es" },
    { nombre: "Caro Saldaña, Victoria", puesto: "Apoyo al Área Científica o Tecnología", correo: "vcarsal978@g.educaand.es" },
    { nombre: "Carpio Torres, María del Mar", puesto: "Orientación Educativa P.E.S.", correo: "mcartor326@g.educaand.es" },
    { nombre: "Carranco Romanco, Fernando", puesto: "Religión", correo: "fcarrom324@g.educaand.es" },
    { nombre: "Carranza González, Isabel", puesto: "Lengua Castellana y Literatura P.E.S.", correo: "icargon804@g.educaand.es" },
    { nombre: "Cienfuegos Izquierdo, Alba", puesto: "Francés P.E.S.", correo: "acieizq594@g.educaand.es" },
    { nombre: "Díaz Garrucho, Dolores", puesto: "Orientación Educativa P.E.S.", correo: "ddiagar914@g.educaand.es" },
    { nombre: "Domínguez Gómez, Agustín", puesto: "Org. y Proy. Fabricación Mecánica P.E.S.", correo: "adomgom082@g.educaand.es" },
    { nombre: "Gago Moreno, José Alberto", puesto: "Tecnología (Francés) P.E.S.", correo: "jgagmor490@g.educaand.es" },
    { nombre: "Gómez Sánchez, Javier", puesto: "Matemáticas P.E.S.", correo: "jgomsan664@g.educaand.es" },
    { nombre: "González Sánchez, Isabel María", puesto: "Biología y Geología P.E.S.", correo: "igonsan665@g.educaand.es" },
    { nombre: "González Valencia, María Carolina", puesto: "Economía P.E.S.", correo: "mgonval815@g.educaand.es" },
    { nombre: "Hidalgo Romero, Marta", puesto: "Religión Evangélica", correo: "mhidrom781@g.educaand.es" },
    { nombre: "Jiménez Romero, Manuel", puesto: "Apoyo al Área de Lengua y C. Sociales", correo: "mjimrom008@g.educaand.es" },
    { nombre: "Juan Gabaldón, Alfonso", puesto: "Religión", correo: "ajuagab082@g.educaand.es" },
    { nombre: "Leal Adorna, María Begoña", puesto: "Pedagogía Terapéutica ESO", correo: "bleaado759@g.educaand.es" },
    { nombre: "Leal Fernández, María Pilar", puesto: "Física y Química P.E.S.", correo: "mleafer515@g.educaand.es" },
    { nombre: "López Pérez, Rubén", puesto: "Música (Francés) P.E.S.", correo: "rlopper791@g.educaand.es" },
    { nombre: "Mazorra González, José Patricio", puesto: "Soldadura", correo: "jmazgon710@g.educaand.es" },
    { nombre: "Medina Carrasco, José Andrés", puesto: "Matemáticas P.E.S.", correo: "jmedcar453@g.educaand.es" },
    { nombre: "Mejías García, Juan Ramón", puesto: "Educación Física P.E.S.", correo: "jmejgar214@g.educaand.es" },
    { nombre: "Meléndez Durán, Laura", puesto: "Dibujo P.E.S.", correo: "lmeldur910@g.educaand.es" },
    { nombre: "Pacheco Cano, Encarnación", puesto: "Pedagogía Terapéutica ESO", correo: "epaccan545@g.educaand.es" },
    { nombre: "Pando Vaque, María Teresa", puesto: "Tecnología P.E.S.", correo: "mpanvaq968@g.educaand.es" },
    { nombre: "Peral Pérez, Salvador", puesto: "Soldadura", correo: "sperper231@g.educaand.es" },
    { nombre: "Pérez Caro, María Mercedes", puesto: "Geografía e Historia (Francés) P.E.S.", correo: "mpercar993k@g.educaand.es" },
    { nombre: "Pizarro Pachón, Julia Pilar", puesto: "Inglés P.E.S.", correo: "jpizpac484@g.educaand.es" },
    { nombre: "Ponce González, Paloma Isabel", puesto: "Lengua Castellana y Literatura P.E.S.", correo: "ppongon405@g.educaand.es" },
    { nombre: "Reyes Cano, María Mercedes", puesto: "Idioma Extranjero-Inglés (Secundaria)", correo: "mreycan070@g.educaand.es" },
    { nombre: "Rico Sabio, Marcelo Tadeo", puesto: "Soldadura", correo: "mricsab502@g.educaand.es" },
    { nombre: "Rodríguez Mora, Jesús", puesto: "Orientación Educativa P.E.S.", correo: "jrodmor315@g.educaand.es" },
    { nombre: "Romero Rico, Montserrat", puesto: "Matemáticas P.E.S.", correo: "mromric861@g.educaand.es" },
    { nombre: "Tesier Rodríguez, María Teresa", puesto: "Inst. Mto. Instal. Térmicas Fluidos", correo: "mtesrod359@g.educaand.es" },
    { nombre: "Vega Castilla, María del Pilar de la", puesto: "Orientación Educativa P.E.S.", correo: "mvegcas737@g.educaand.es" }
  ];
  
  return (
    <div className="bg-background-primary dark:bg-background-tertiary text-white sm:mt-20 mt-10">
      <section className="py-8 px-6 bg-white dark:bg-background-tertiary">
        
        {/* Título de la sección */}
        <h1 className="text-center text-3xl mb-7 font-bold text-background-secondary dark:text-blue-400">
          {t.org.institutoStructureTitle}
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-10">
          {personalDataEstructura.map((persona, index) => (
            <div
              key={index}
              className="bg-slate-100 text-black dark:bg-gray-800 p-6 rounded-lg shadow-xl flex flex-col items-center"
            >
              <p className="text-xl font-bold text-background-secondary dark:text-blue-400">{persona.puesto}</p>
              <h2 className="text-base font-bold text-black dark:text-white">{persona.nombre}</h2>
              <a
                href={`mailto:${persona.correo}`}
                className="text-gray-600 dark:text-gray-300 hover:text-gray-500 underline"
              >
                {persona.correo}
              </a>
            </div>
          ))}
        </div>

        <hr className="border-gray-400 dark:border-gray-600 my-6" />

        {/* Lista de personal */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {personalData.map((persona, index) => (
            <div key={index} className="bg-slate-100 dark:bg-gray-800 p-6 rounded-lg shadow-lg text-center">
              <h2 className="text-xl font-bold text-black dark:text-white">{persona.nombre}</h2>
              <p className="text-gray-700 dark:text-gray-300">{persona.puesto}</p>
              <a href={`mailto:${persona.correo}`} className="hover:text-blue-700 text-blue-600 dark:text-blue-200 underline">{persona.correo}</a>
            </div>
          ))}
        </div>

      </section>
    </div>
  );
}
