"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { BsChevronDown, BsGear } from "react-icons/bs";
import { BsMoon, BsSun } from "react-icons/bs";
import { useLanguage } from "../contexts/LanguageContext";
import { isAuthenticated } from "@/utils/auth";
import { useRouter } from "next/navigation";

export default function Navbar() {
  const [isUserAuthenticated, setIsUserAuthenticated] = useState(false);
  const { language, setLanguage, t } = useLanguage();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState({
    centro: false,
    documentacion: false,
    planes: false,
    enlaces: false,
  });
  const pathname = usePathname();
  const [settingsOpen, setSettingsOpen] = useState(false);

  useEffect(() => {
    setIsUserAuthenticated(isAuthenticated());
  }, []);

  const router = useRouter();
  const logout = () => {
    localStorage.removeItem("token"); 
    router.push("/");
    window.location.reload();
  };
  

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle("dark", !isDarkMode);
  };

  const toggleDropdown = (menu) => {
    setDropdownOpen((prev) => ({ ...prev, [menu]: !prev[menu] }));
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
    setDropdownOpen({
      centro: false,
      documentacion: false,
      planes: false,
      enlaces: false,
    });
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!event.target.closest(".settings-menu") && settingsOpen) {
        setSettingsOpen(false);
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [settingsOpen]);

  return (
    <>
      {isMobileMenuOpen && <div className="blur-background"></div>}
      <nav className="dark:bg-black bg-background-primary border-b-2 border-background-secondary fixed w-full top-0 left-0 z-50">
        <div className="mx-auto sm:px-6 lg:px-8">
          <div className="relative flex items-center justify-between h-16 sm:h-24">
            {/* Mobile Menu Button */}
            <div className="absolute inset-y-0 left-2 flex items-center sm:hidden">
              <button
                type="button"
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 "
                aria-controls="mobile-menu"
                aria-expanded={isMobileMenuOpen}
                onClick={toggleMobileMenu}
              >
                <span className="sr-only">Open main menu</span>
                <svg
                  className={`block h-6 w-6 ${
                    isMobileMenuOpen ? "hidden" : "block"
                  }`}
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
                <svg
                  className={`block h-6 w-6 ${
                    isMobileMenuOpen ? "block" : "hidden"
                  }`}
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>

            {/* Logo */}
            <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
              <div className="flex-shrink-0">
                <Link href="/">
                  <img
                    className="h-12 sm:h-20 dark:hidden"
                    src="/LogoXXI.png"
                    alt="Logo Claro"
                  />
                  <img
                    className="h-12 sm:h-20 hidden dark:block"
                    src="/LogoXXIBlanco.png"
                    alt="Logo Oscuro"
                  />
                </Link>
              </div>

              <div className="hidden sm:block sm:ml-6 text-base">
                <div className="flex space-x-4 items-center h-full">
                  {/* Navbar para escritorio */}

                  {/* Dropdown Cascading for Centro */}
                  <div className="relative group">
                    <button
                      className={`flex items-center hover:bg-background-secondary hover:text-white px-3 py-2 rounded-md font-semibold ${
                        pathname === "/centro"
                          ? "bg-background-secondary text-white"
                          : "text-black dark:text-white"
                      }`}
                    >
                      {t.centro} <BsChevronDown className="ml-2" />
                    </button>
                    <div className="absolute hidden group-hover:block bg-white dark:bg-black text-black dark:text-white py-2 rounded-md shadow-lg min-w-[150px]">
                      <Link
                        href="/centro/about"
                        className="block rounded-md px-4 py-2 whitespace-nowrap hover:text-white hover:bg-background-secondary"
                      >
                        {t.quienesSomos}
                      </Link>
                      <Link
                        href="/centro/organizacion"
                        className="block rounded-md px-4 py-2 whitespace-nowrap hover:text-white hover:bg-background-secondary"
                      >
                        {t.organizacion}
                      </Link>
                      <Link
                        href="/centro/fp"
                        className="block rounded-md px-4 py-2 whitespace-nowrap hover:text-white hover:bg-background-secondary"
                      >
                        {t.fp}
                      </Link>
                      <Link
                        href="/centro/eso"
                        className="block rounded-md px-4 py-2 whitespace-nowrap hover:text-white hover:bg-background-secondary"
                      >
                        {t.eso}
                      </Link>
                      <Link
                        href="/centro/secretaria"
                        className="block rounded-md px-4 py-2 whitespace-nowrap hover:text-white hover:bg-background-secondary"
                      >
                        {t.secretaria}
                      </Link>
                    </div>
                  </div>

                  {/* Dropdown Cascading for Documentacion */}
                  <div className="relative group">
                    <button
                      className={`flex items-center hover:bg-background-secondary hover:text-white px-3 py-2 rounded-md font-semibold ${
                        pathname === "/documentacion"
                          ? "bg-background-secondary text-white"
                          : "text-black dark:text-white"
                      }`}
                    >
                      {t.documentacion} <BsChevronDown className="ml-2" />
                    </button>
                    <div className="absolute hidden group-hover:block bg-white dark:bg-black text-black dark:text-white py-2 rounded-md shadow-lg min-w-[150px]">
                      <Link
                        href="https://drive.google.com/drive/folders/1zZJPH6JJ2DS61YtqxntTcjQYHOHayELx?usp=drive_link"
                        className="block rounded-md px-4 py-2 whitespace-nowrap hover:text-white hover:bg-background-secondary"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {t.programaciones}
                      </Link>
                      <Link
                        href="https://drive.google.com/drive/folders/1ADkGPoQXLvVv0eb7PHB89NI64RxEmjBU?usp=drive_link"
                        className="block rounded-md px-4 py-2 whitespace-nowrap hover:text-white hover:bg-background-secondary"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {t.proyectoEducativo}
                      </Link>
                      <Link
                        href="https://drive.google.com/drive/folders/1kfFCmPCEiZbr_z6hCu1sbPjDSP6w6pjf?usp=drive_link"
                        className="block rounded-md px-4 py-2 whitespace-nowrap hover:text-white hover:bg-background-secondary"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {t.planDeCentro}
                      </Link>
                    </div>
                  </div>

                  {/* Dropdown Cascading for Planes y Proyectos */}
                  <div className="relative group">
                    <button
                      className={`flex items-center hover:bg-background-secondary hover:text-white px-3 py-2 rounded-md font-semibold ${
                        pathname === "/planesyproyectos"
                          ? "bg-background-secondary text-white"
                          : "text-black dark:text-white"
                      }`}
                    >
                      {t.planes} <BsChevronDown className="ml-2" />
                    </button>
                    <div className="absolute hidden group-hover:block bg-white dark:bg-black text-black dark:text-white py-2 rounded-md shadow-lg min-w-[150px]">
                      <Link
                        href="/planesyproyectos/proa+transformate"
                        className="block rounded-md px-4 py-2 whitespace-nowrap hover:text-white hover:bg-background-secondary"
                      >
                        {t.ProaTransformate}
                      </Link>
                      <Link
                        href="/planesyproyectos/aula-emprendimiento"
                        className="block rounded-md px-4 py-2 whitespace-nowrap hover:text-white hover:bg-background-secondary"
                      >
                        {t.auladeEmprendimiento}
                      </Link>
                      <Link
                        href="/planesyproyectos/bilinguismo"
                        className="block rounded-md px-4 py-2 whitespace-nowrap hover:text-white hover:bg-background-secondary"
                      >
                        {t.bilinguismo}
                      </Link>
                      <Link
                        href="/planesyproyectos/erasmus"
                        className="block rounded-md px-4 py-2 whitespace-nowrap hover:text-white hover:bg-background-secondary"
                      >
                        {t.erasmus}
                      </Link>
                      <Link
                        href="/planesyproyectos/comunidad-de-aprendizaje"
                        className="block rounded-md px-4 py-2 whitespace-nowrap hover:text-white hover:bg-background-secondary"
                      >
                        {t.comunidadaprendizaje}
                      </Link>
                      <Link
                        href="/planesyproyectos/mas-equidad"
                        className="block rounded-md px-4 py-2 whitespace-nowrap hover:text-white hover:bg-background-secondary"
                      >
                        {t.masequidad}
                      </Link>
                      <Link
                        href="/planesyproyectos/proa"
                        className="block rounded-md px-4 py-2 whitespace-nowrap hover:text-white hover:bg-background-secondary"
                      >
                        {t.proa}
                      </Link>
                      <Link
                        href="/planesyproyectos/biblioteca"
                        className="block rounded-md px-4 py-2 whitespace-nowrap hover:text-white hover:bg-background-secondary"
                      >
                        {t.biblioteca}
                      </Link>
                    </div>
                  </div>

                  {/* Dropdown Cascading for Enlaces de Interes */}
                  <div className="relative group">
                    <button
                      className={`flex items-center hover:bg-background-secondary hover:text-white px-3 py-2 rounded-md font-semibold ${
                        pathname === "/planesyproyectos"
                          ? "bg-background-secondary text-white"
                          : "text-black dark:text-white"
                      }`}
                    >
                      {t.enlacesInteres} <BsChevronDown className="ml-2" />
                    </button>
                    <div className="absolute hidden group-hover:block bg-white dark:bg-black text-black dark:text-white py-2 rounded-md shadow-lg min-w-[150px]">
                      <Link
                        href="https://seneca.juntadeandalucia.es/seneca/jsp/portalpasen/"
                        className="block rounded-md px-4 py-2 whitespace-nowrap hover:text-white hover:bg-background-secondary"
                        target="_blank"
                      >
                        {t.iPasen}
                      </Link>
                      <Link
                        href="https://www.juntadeandalucia.es/educacion/secretariavirtual/solicitudes/"
                        className="block rounded-md px-4 py-2 whitespace-nowrap hover:text-white hover:bg-background-secondary"
                        target="_blank"
                      >
                        {t.secretariaVirtual}
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Settings Menu */}
            <div className="hidden sm:flex space-x-2">
              <img className="h-6" src="/france-flag.png" alt="france flag" />
              <img className="h-6" src="/spain-flag.png" alt="spain flag" />
              <img className="h-6" src="/logoJunta-2.png" alt="Junta logo" />
            </div>

            {/* Theme Toggle */}
            <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
              <div className="relative settings-menu">
                <button
                  className="ml-4 p-1 rounded-full text-gray-400 hover:text-black dark:hover:text-white"
                  onClick={() => setSettingsOpen(!settingsOpen)}
                >
                  <BsGear className="text-2xl" />
                </button>

                {settingsOpen && (
                  <div className="absolute right-0 mt-2 w-48 bg-white dark:bg-black rounded-md shadow-lg py-2">
                    <button
                      onClick={() => {
                        toggleTheme();
                        setSettingsOpen(false);
                      }}
                      className="block w-full text-left px-4 py-2 text-sm text-black dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700"
                    >
                      {isDarkMode ? t.modoClaro : t.modoOscuro}
                    </button>

                    <button
                      onClick={() => setLanguage("en")}
                      className="block w-full text-left px-4 py-2 text-sm text-black dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700"
                    >
                      English
                    </button>
                    <button
                      onClick={() => setLanguage("es")}
                      className="block w-full text-left px-4 py-2 text-sm text-black dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700"
                    >
                      Español
                    </button>
                    <button
                      onClick={() => setLanguage("fr")}
                      className="block w-full text-left px-4 py-2 text-sm text-black dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700"
                    >
                      Français
                    </button>
                    <Link
                      href="/auth/login"
                      className="block w-full text-left px-4 py-2 text-sm text-black dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700"
                    >
                      Iniciar Sesión
                    </Link>
                    {isUserAuthenticated && (
                      <>
                        <Link
                          href="/edit/noticiaspost"
                          className="block w-full text-left px-4 py-2 text-sm text-black dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700"
                        >
                          Editar Carrusel
                        </Link>
                        <Link
                          href="/edit/personalpost"
                          className="block w-full text-left px-4 py-2 text-sm text-black dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700"
                        >
                          Editar Organización
                        </Link>
                        <button
                          onClick={logout}
                          className="block w-full text-left px-4 py-2 text-sm text-black dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700"
                        >
                          Cerrar Sesión
                        </button>
                      </>
                    )}
                    
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Menu responsivo para movil */}
        <div
          className={`sm:hidden ${isMobileMenuOpen ? "block" : "hidden"}`}
          id="mobile-menu"
        >
          <div className="px-2 pt-2 pb-3 space-y-1 max-h-screen overflow-y-auto">
            <Link
              href="/"
              className="block text-black dark:text-white px-3 py-2 rounded-md text-base font-semibold"
              onClick={closeMobileMenu}
            >
              Inicio
            </Link>
            {/* Dropdown Cascading for Centro */}
            <div>
              <button
                className="flex text-black dark:text-white items-center justify-between w-full text-left px-3 py-2 rounded-md text-base font-semibold hover:bg-background-secondary hover:text-white"
                onClick={() => toggleDropdown("centro")}
              >
                {t.centro} <BsChevronDown className="ml-2" />
              </button>
              {dropdownOpen.centro && (
                <div className="pl-4">
                  <Link
                    href="/centro/about"
                    className="block text-black dark:text-white px-3 py-2 hover:bg-background-secondary hover:text-white"
                    onClick={closeMobileMenu}
                  >
                    {t.quienesSomos}
                  </Link>
                  <Link
                    href="/centro/organizacion"
                    className="block text-black dark:text-white px-3 py-2 hover:bg-background-secondary hover:text-white"
                    onClick={closeMobileMenu}
                  >
                    {t.organizacion}
                  </Link>
                  <Link
                    href="/centro/fp"
                    className="block text-black dark:text-white px-3 py-2 hover:bg-background-secondary hover:text-white"
                    onClick={closeMobileMenu}
                  >
                    {t.fp}
                  </Link>
                  <Link
                    href="/centro/eso"
                    className="block text-black dark:text-white px-3 py-2 hover:bg-background-secondary hover:text-white"
                    onClick={closeMobileMenu}
                  >
                    {t.eso}
                  </Link>
                  <Link
                    href="/centro/secretaria"
                    className="block text-black dark:text-white px-3 py-2 hover:bg-background-secondary hover:text-white"
                    onClick={closeMobileMenu}
                  >
                    {t.secretaria}
                  </Link>
                </div>
              )}
            </div>

            {/* Dropdown Cascading for Documentacion */}
            <div>
              <button
                className="flex text-black dark:text-white items-center justify-between w-full text-left px-3 py-2 rounded-md text-base font-semibold hover:bg-background-secondary hover:text-white"
                onClick={() => toggleDropdown("documentacion")}
              >
                {t.documentacion} <BsChevronDown className="ml-2" />
              </button>
              {dropdownOpen.documentacion && (
                <div className="pl-4">
                  <Link
                    href="https://drive.google.com/drive/folders/1zZJPH6JJ2DS61YtqxntTcjQYHOHayELx?usp=drive_link"
                    className="block text-black dark:text-white px-3 py-2 hover:bg-background-secondary hover:text-white"
                    onClick={closeMobileMenu}
                  >
                    {t.programaciones}
                  </Link>
                  <Link
                    href="https://drive.google.com/drive/folders/1ADkGPoQXLvVv0eb7PHB89NI64RxEmjBU?usp=drive_link"
                    className="block text-black dark:text-white px-3 py-2 hover:bg-background-secondary hover:text-white"
                    onClick={closeMobileMenu}
                  >
                    {t.proyectoEducativo}
                  </Link>
                  <Link
                    href="https://drive.google.com/drive/folders/1kfFCmPCEiZbr_z6hCu1sbPjDSP6w6pjf?usp=drive_link"
                    className="block text-black dark:text-white px-3 py-2 hover:bg-background-secondary hover:text-white"
                    onClick={closeMobileMenu}
                  >
                    {t.planDeCentro}
                  </Link>
                </div>
              )}
            </div>

            {/* Dropdown Cascading for Planes y Proyectos */}
            <div>
              <button
                className="flex text-black dark:text-white items-center justify-between w-full text-left px-3 py-2 rounded-md text-base font-semibold hover:bg-background-secondary hover:text-white"
                onClick={() => toggleDropdown("planes")}
              >
                {t.planes} <BsChevronDown className="ml-2" />
              </button>
              {dropdownOpen.planes && (
                <div className="pl-4">
                  <Link
                    href="/planesyproyectos/proa+transformate"
                    className="block text-black dark:text-white px-3 py-2 hover:bg-background-secondary hover:text-white"
                    onClick={closeMobileMenu}
                  >
                    {t.PROAEmprendimiento}
                  </Link>
                  <Link
                    href="/planesyproyectos/aula-emprendimiento"
                    className="block text-black dark:text-white px-3 py-2 hover:bg-background-secondary hover:text-white"
                    onClick={closeMobileMenu}
                  >
                    {t.auladeEmprendimiento}
                  </Link>
                  <Link
                    href="/planesyproyectos/bilinguismo"
                    className="block text-black dark:text-white px-3 py-2 hover:bg-background-secondary hover:text-white"
                    onClick={closeMobileMenu}
                  >
                    {t.bilinguismo}
                  </Link>
                  <Link
                    href="/planesyproyectos/erasmus"
                    className="block text-black dark:text-white px-3 py-2 hover:bg-background-secondary hover:text-white"
                    onClick={closeMobileMenu}
                  >
                    {t.erasmus}
                  </Link>
                  <Link
                    href="/planesyproyectos/comunidad-de-aprendizaje"
                    className="block text-black dark:text-white px-3 py-2 hover:bg-background-secondary hover:text-white"
                    onClick={closeMobileMenu}
                  >
                    {t.comunidadaprendizaje}
                  </Link>
                  <Link
                    href="/planesyproyectos/mas-equidad"
                    className="block text-black dark:text-white px-3 py-2 hover:bg-background-secondary hover:text-white"
                    onClick={closeMobileMenu}
                  >
                    {t.masequidad}
                  </Link>
                  <Link
                    href="/planesyproyectos/proa"
                    className="block text-black dark:text-white px-3 py-2 hover:bg-background-secondary hover:text-white"
                    onClick={closeMobileMenu}
                  >
                    {t.proa}
                  </Link>
                  <Link
                    href="/planesyproyectos/biblioteca"
                    className="block text-black dark:text-white px-3 py-2 hover:bg-background-secondary hover:text-white"
                    onClick={closeMobileMenu}
                  >
                    {t.biblioteca}
                  </Link>
                </div>
              )}
            </div>

            {/* Dropdown Cascading for Enlaces de Interes */}
            <div>
              <button
                className="flex text-black dark:text-white items-center justify-between w-full text-left px-3 py-2 rounded-md text-base font-semibold hover:bg-background-secondary hover:text-white"
                onClick={() => toggleDropdown("enlaces")}
              >
                {t.enlacesInteres} <BsChevronDown className="ml-2" />
              </button>
              {dropdownOpen.enlaces && (
                <div className="pl-4">
                  <Link
                    href="https://seneca.juntadeandalucia.es/seneca/jsp/portalpasen/"
                    className="block text-black dark:text-white px-3 py-2 hover:bg-background-secondary hover:text-white"
                    onClick={closeMobileMenu}
                  >
                    {t.iPasen}
                  </Link>
                  <Link
                    href="https://www.juntadeandalucia.es/educacion/secretariavirtual/solicitudes/"
                    className="block text-black dark:text-white px-3 py-2 hover:bg-background-secondary hover:text-white"
                    onClick={closeMobileMenu}
                  >
                    {t.secretariaVirtual}
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
