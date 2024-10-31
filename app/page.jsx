"use client";
import Image from "next/image";
import { useState } from "react";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";


const images = [
  {
    src: "/mural-fachada.jpg",
    title: "IES SIGLO XXI",
    description:
      "Nos encaminamos a ofrecer una educación integral, preparando a nuestro alumnado para el futuro, no solo en conocimientos, sino en habilidades de socialización, integración y convivencia en la sociedad digital del siglo XXI. ¡ÚNETE A NUESTRA GRAN FAMILIA, TE ESPERAMOS!",
  },
  {
    src: "/multiculturalidad.jpeg",
    title: "Título 2",
    description: "Descripción de la imagen 2",
  },
  {
    src: "/diaAndalucia.jpg",
    title: "Título 3",
    description: "Descripción de la imagen 3",
  },
];

export default function Home() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="bg-background-primary dark:bg-background-tertiary text-white">
      <section className="relative h-screen w-full overflow-hidden">
        <div
          className="h-full w-full flex transition-transform duration-500"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {images.map((image, index) => (
            <div key={index} className="relative h-screen w-full flex-shrink-0">
              <Image
                src={image.src}
                alt={image.title}
                layout="fill"
                objectFit="cover"
                quality={100}
              />
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <div className="w-3/4 md:w-1/2 p-5 rounded-xl backdrop-blur-sm bg-black/30">
                  <h2 className="text-4xl font-bold text-center">{image.title}</h2>
                  <p className="text-lg mt-2 text-center">{image.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Botones de navegación con íconos */}
        <button
          onClick={handlePrev}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 text-white sm:text-3xl  text-2xl bg-black bg-opacity-50 sm:p-2 rounded-full hover:bg-opacity-75"
        >
          <FiArrowLeft />
        </button>
        <button
          onClick={handleNext}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 text-white sm:text-3xl text-2xl bg-black bg-opacity-50 sm:p-2 rounded-full hover:bg-opacity-75"
        >
          <FiArrowRight />
        </button>

        {/* Indicadores de puntos */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {images.map((_, index) => (
            <span
              key={index}
              className={`w-3 h-3 rounded-full ${
                index === currentIndex ? "bg-white" : "bg-gray-500"
              }`}
            ></span>
          ))}
        </div>
      </section>

      <section id="learn-more" className="py-12 px-6 bg-white dark:bg-background-tertiary">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
            <div className="md:col-span-2 mb-2">
              <div className="sm:flex items-center mb-5 block">
                <h2 className="text-3xl font-bold text-black dark:text-white">Bienvenidos a </h2>
                <h2 className="text-3xl font-bold sm:ml-2 text-background-secondary">IES SIGLO XXI</h2>
              </div>
              <p className="text-lg mb-6 text-black dark:text-gray-300">
                Nuestra oferta educativa abarca desde la <span className="font-bold">Educación Secundaria Obligatoria (ESO)</span> hasta la <span className="font-bold">Formación Profesional,</span> incluyendo plazas de <span className="font-bold">Formación Profesional Dual.</span> Somos un centro bilingüe en Francés, lo que nos permite ofrecer una educación enriquecida en un entorno multicultural. Actualmente, contamos con Ciclos Formativos de <span className="font-bold"> Grado Medio en Soldadura y Calderería,</span> pertenecientes a la familia profesional de Fabricación y Montaje.
              </p>
              <p className="text-lg mb-6 text-black dark:text-gray-300">
                A partir del curso <span className="font-bold">2024/2025</span>, nuestros estudiantes de FP DUAL tendrán la oportunidad de combinar la formación en el aula con <span className="font-bold">prácticas en empresas colaboradoras,</span> lo que les permitirá adquirir experiencia real en el sector productivo.
              </p>
              <p className="text-lg mb-6 text-black dark:text-gray-300">
                Como parte de nuestro compromiso con el crecimiento profesional, ofrecemos a nuestros estudiantes la posibilidad de obtener <span className="font-bold">certificaciones reconocidas</span> que amplían su currículum y oportunidades laborales. Además, participamos activamente en diversos programas y proyectos educativos que enriquecen la experiencia formativa de nuestro alumnado.
              </p>
              <div className="relative w-full mb-2 h-60 overflow-hidden rounded-md shadow-lg mx-auto">
                <Image
                  src="/fotoPintura.jpg"
                  alt="About IES Siglo XXI"
                  layout="fill"
                  objectFit="cover"
                  className="absolute inset-0"
                />
              </div>
              <h2 className="underline text-sky-700 dark:text-sky-500">Fotografía de IES SIGLO XXI</h2>
            </div>
            <div className="sm:px-6 sm:pb-6 sm:border-l-2 border-gray-200 dark:border-gray-700 text-black dark:text-white">
              <h2 className="font-bold py-3 text-lg">Nuestra Ubicacion</h2>
              <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2868.8723891622067!2d-5.902960624668981!3d37.384930034521815!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd126f42b3a5906f%3A0xdf57a11f75048359!2sInstituto%20de%20Educaci%C3%B3n%20Secundaria%20IES%20Siglo%20XXI!5e1!3m2!1ses-419!2ses!4v1730413688511!5m2!1ses-419!2ses"
                  width="100%"
                  height="100%"
                  frameBorder="0"
                  style={{ border: 0 }}
                  allowFullScreen
                  aria-hidden="false"
                  tabIndex="0"
                  title="Mapa de IES SIGLO XXI"
                  className="rounded-md shadow-lg h-80"
                ></iframe>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
