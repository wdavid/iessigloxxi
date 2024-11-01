"use client";
import React from 'react';
import { useLanguage } from "@/contexts/LanguageContext";

export default function FormacionProfesional() {
  const { t } = useLanguage();

  return (
    <div className="bg-background-primary dark:bg-background-tertiary text-white sm:mt-20 mt-10">
      <section className="py-12 px-6 bg-white dark:bg-background-tertiary space-y-6">
        <h1 className="text-background-secondary dark:text-blue-400 text-2xl font-bold sm:text-center mb-4">
          {t.formp.title}
        </h1>

        {t.formp.programas.map((programa, index) => (
          <div key={index} className="sm:mx-20 flex flex-col items-center">
            <h2 className="text-black dark:text-white font-bold text-lg sm:text-center">
              {programa.title}
            </h2>
            <p className="text-black dark:text-white text-lg text-justify mb-4">
              {programa.description}
            </p>
            <div className="sm:flex sm:space-x-4">
              <img
                src={programa.image}
                alt={programa.title}
                width={500}
                height={200}
                className="rounded-md w-72 h-[200px] object-cover mb-4"
              />
            </div>
            <a
              href={programa.link}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-background-hover px-5 py-2 rounded-xl"
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
