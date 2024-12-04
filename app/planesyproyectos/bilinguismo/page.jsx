"use client";
import React from 'react'
import { useLanguage } from "@/contexts/LanguageContext"; 

export default function Bilinguismo() {
  const { t } = useLanguage();

  return (
    <div className="bg-background-primary dark:bg-background-tertiary text-white sm:mt-16 mt-10">
      <section className="py-12 px-6 space-y-8 max-w-7xl mx-auto">
        {/* Título de Proa */}
        <h1 className="text-center text-3xl font-bold text-background-secondary dark:text-blue-400">
          {t.bilinguismo.title}
        </h1>

        {/* Descripción General */}
        <div className="space-y-4 text-lg text-gray-800 dark:text-gray-300">
          {t.bilinguismo.description.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}

          {/* Lista de pasos numerados */}
          <ol className="list-decimal pl-6 space-y-2">
            {t.proat.steps.map((step, index) => (
              <li key={index} className="text-gray-800 dark:text-gray-300">
                {step}
              </li>
            ))}
          </ol>
          <img
            src="/ProaTrans.png"
            alt="Logo PROA+Transformate"
            width={1197}
            height={844}  // Cambia la altura para que coincida con el ancho
            className="rounded-md w-[600px] h-[422px] object-cover mx-auto"
          />
        </div>
        
      </section>
    </div>
  )
}
