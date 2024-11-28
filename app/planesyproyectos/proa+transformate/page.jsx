"use client";
import React from 'react'
import { useLanguage } from "@/contexts/LanguageContext"; 

export default function ProaTransformate() {
  const { t } = useLanguage();
  return (
    <div className="bg-background-primary dark:bg-background-tertiary text-white sm:mt-16 mt-10">
      <section className="py-8 px-6 bg-white dark:bg-background-tertiary">
        <div className='flex flex-col items-center'>
          <div className='bg-background-secondary mt-10 w-96 p-5 rounded-xl'>
            <h1 className='text-black dark:text-white font-bold text-3xl'>{t.proat.title}</h1>
          </div>
        </div>
        
        
      </section>
    </div>
  )
}
