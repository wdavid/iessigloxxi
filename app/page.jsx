import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-background-primary dark:bg-background-tertiary text-white">
      {/* Hero Section */}
      <section className="relative h-screen flex  items-center justify-center bg-cover bg-center">
        <div className="text-center">
          <h1 className="text-4xl text-background-hover  md:text-6xl font-bold">IES Siglo XXI</h1>
          <p className="text-lg text-black dark:text-white md:text-xl mt-4">Formando futuro con educación de calidad</p>
        </div>
    </section>
    </div>
  );
}
