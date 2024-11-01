"use client";
import React from 'react';
import { useLanguage } from "@/contexts/LanguageContext"; 

export default function Eso() {
  const { t } = useLanguage();

  return (
    <div className="bg-background-primary dark:bg-background-tertiary text-white sm:mt-20 mt-10">
      <section className="py-12 px-6 bg-white dark:bg-background-tertiary space-y-6">
        <h1 className="text-background-secondary dark:text-blue-400 text-2xl font-bold sm:text-center mb-4">
          {t.esob.title}
        </h1>

        {t.esob.programas.map((programa, index) => (
          <div key={index} className="sm:mx-20 sm:flex flex-col items-center">
            <h2 className="text-black dark:text-white font-bold text-lg">
              {programa.title}
            </h2>
            <div className="text-black dark:text-white text-lg mb-1">
              <ul className="list-disc list-inside space-y-1">
                <li>{programa.description1}</li>
                <li>{programa.description2}</li>
              </ul>
            </div>
            {index < t.formp.programas.length - 1 && (
              <hr className="border-t-1 border-background-secondary w-full my-8" />
            )}
          </div>
        ))}
      </section>
    </div>
  );
}
