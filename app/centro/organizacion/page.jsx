"use client";
import React, { useState, useEffect } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import api from "@/utils/api";

export default function Organizacion() {
  const { t } = useLanguage();

  const [personalData, setPersonalData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPersonalData = async () => {
      try {
        const response = await api.get("/personal");
        const data = response.data;

        const formattedData = data.map((item) => ({
          id: item._id,
          name: item.name,
          position: item.position,
          email: item.email,
        }));

        setPersonalData(formattedData);
      } catch (err) {
        setError(err.message || "Error al obtener los datos");
      } finally {
        setLoading(false);
      }
    };

    fetchPersonalData();
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-background-primary">
        <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-blue-500"></div>
      </div>
    );
  }

  if (error) {
    return (
      <p className="text-center text-red-500">
        Error: {error}
      </p>
    );
  }

  return (
    <div className="bg-background-primary dark:bg-background-tertiary text-white sm:mt-20 mt-10">
      <section className="py-8 px-6 bg-white dark:bg-background-tertiary">
        <h1 className="text-center text-3xl mb-7 font-bold text-background-secondary dark:text-blue-400">
          {t.org.institutoStructureTitle}
        </h1>
        <div className="grid grid-cols-1 smcard:grid-cols-2 md:grid-cols-3 gap-6">
          {personalData.map((persona) => (
            <div
              key={persona.id}
              className="bg-slate-100 dark:bg-gray-800 p-6 rounded-lg shadow-lg text-center"
            >
              <h2 className="text-xl font-bold text-black dark:text-white">
                {persona.name}
              </h2>
              <p className="text-gray-700 dark:text-gray-300">
                {persona.position}
              </p>
              <a
                href={`mailto:${persona.email}`}
                className="hover:text-blue-700 text-blue-600 dark:text-blue-200 underline"
              >
                {persona.email}
              </a>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
