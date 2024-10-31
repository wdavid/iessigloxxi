"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { BsChevronDown, BsGear } from "react-icons/bs";
import { BsMoon, BsSun } from "react-icons/bs";

export default function Navbar() {
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

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle("dark", !isDarkMode);
  };

  const toggleDropdown = (menu, string) => {
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
    <nav className="dark:bg-black bg-background-primary border-b-2 border-background-secondary fixed w-full top-0 left-0 z-50">
      <div className="mx-auto sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between h-16 sm:h-24">
          {/* Mobile Menu Button */}
          <div className="absolute inset-y-0 left-2 flex items-center sm:hidden">
            <button
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 "
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
                {/* Desktop Dropdown Menus */}
                <div className="relative group">
                  <button
                    className={`flex items-center hover:bg-background-secondary hover:text-white px-3 py-2 rounded-md font-medium ${
                      pathname === "/centro"
                        ? "bg-background-secondary text-white"
                        : "text-black dark:text-white"
                    }`}
                  >
                    Centro <BsChevronDown className="ml-2" />
                  </button>
                  <div className="absolute hidden group-hover:block bg-white dark:bg-black text-black dark:text-white py-2 rounded-md shadow-lg min-w-[150px]">
                    <Link
                      href="/centro/uno"
                      className="block rounded-md px-4 py-2 whitespace-nowrap hover:text-white hover:bg-background-secondary"
                    >
                      Centro Uno
                    </Link>
                    <Link
                      href="/centro/dos"
                      className="block rounded-md px-4 py-2 whitespace-nowrap hover:text-white hover:bg-background-secondary"
                    >
                      Centro Dos
                    </Link>
                  </div>
                </div>

                <div className="relative group">
                  <button
                    className={`flex items-center hover:bg-background-secondary hover:text-white px-3 py-2 rounded-md font-medium ${
                      pathname === "/documentacion"
                        ? "bg-background-secondary text-white"
                        : "text-black dark:text-white"
                    }`}
                  >
                    Documentación <BsChevronDown className="ml-2" />
                  </button>
                  <div className="absolute hidden group-hover:block bg-white dark:bg-black text-black dark:text-white py-2 rounded-md shadow-lg min-w-[150px]">
                    <Link
                      href="/documentacion/uno"
                      className="block rounded-md px-4 py-2 whitespace-nowrap hover:text-white hover:bg-background-secondary"
                    >
                      Doc Uno
                    </Link>
                    <Link
                      href="/documentacion/dos"
                      className="block rounded-md px-4 py-2 whitespace-nowrap hover:text-white hover:bg-background-secondary"
                    >
                      Doc Dos
                    </Link>
                  </div>
                </div>

                <div className="relative group">
                  <button
                    className={`flex items-center hover:bg-background-secondary hover:text-white px-3 py-2 rounded-md font-medium ${
                      pathname === "/planesyproyectos"
                        ? "bg-background-secondary text-white"
                        : "text-black dark:text-white"
                    }`}
                  >
                    Planes y Proyectos <BsChevronDown className="ml-2" />
                  </button>
                  <div className="absolute hidden group-hover:block bg-white dark:bg-black text-black dark:text-white py-2 rounded-md shadow-lg min-w-[150px]">
                    <Link
                      href="/planesyproyectos/uno"
                      className="block rounded-md px-4 py-2 whitespace-nowrap hover:text-white hover:bg-background-secondary"
                    >
                      Proyecto Uno
                    </Link>
                    <Link
                      href="/planesyproyectos/dos"
                      className="block rounded-md px-4 py-2 whitespace-nowrap hover:text-white hover:bg-background-secondary"
                    >
                      Proyecto Dos
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="hidden sm:flex space-x-2">
            <img className="h-6" src="/france-flag.png" alt="france flag" />
            <img className="h-6" src="/spain-flag.png" alt="spain flag" />
            <img className="h-6" src="/logoJunta-2.png" alt="Junta logo" />
          </div>

          {/* <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            <button
              onClick={toggleTheme}
              className="ml-4 p-1 rounded-full text-gray-400 hover:text-black dark:hover:text-white"
            >
              {isDarkMode ? (
                <BsSun className="text-xl" />
              ) : (
                <BsMoon className="text-xl" />
              )}
            </button>
          </div> */}

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
                      setSettingsOpen(false); // Cierra el menú al hacer clic en la opción
                    }}
                    className="block w-full text-left px-4 py-2 text-sm text-black dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700"
                  >
                    {isDarkMode ? 'Modo Claro' : 'Modo Oscuro'}
                  </button>

                  
                  <button
                    onClick={() => setSettingsOpen(false)} // Cierra el menú al hacer clic en la opción
                    className="block w-full text-left px-4 py-2 text-sm text-black dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700"
                  >
                    Cambiar Idioma
                  </button>
                </div>
              )}
          </div> 

         </div>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      <div
        className={`sm:hidden ${isMobileMenuOpen ? "block " : "hidden"}`}
        id="mobile-menu"
      >
        <div className="px-2 pt-2 pb-3 space-y-1">
          <Link
            href="/"
            className="block text-black dark:text-white px-3 py-2 rounded-md text-base font-medium"
            onClick={closeMobileMenu}
          >
            Inicio
          </Link>

          {/* Dropdown Cascading for Centro */}
          <div>
            <button
              className="flex text-black dark:text-white items-center justify-between w-full text-left px-3 py-2 rounded-md text-base font-medium hover:bg-background-secondary hover:text-white"
              onClick={() => toggleDropdown("centro")}
            >
              Centro <BsChevronDown className="ml-2" />
            </button>
            {dropdownOpen.centro && (
              <div className="pl-4">
                <Link
                  href="/centro/uno"
                  className="block text-black dark:text-white px-3 py-2 hover:bg-background-secondary hover:text-white"
                >
                  Centro Uno
                </Link>
                <Link
                  href="/centro/dos"
                  className="block text-black dark:text-white px-3 py-2 hover:bg-background-secondary hover:text-white"
                >
                  Centro Dos
                </Link>
              </div>
            )}
          </div>

          {/* Dropdown Cascading for Documentación */}
          <div>
            <button
              className="flex text-black dark:text-white items-center justify-between w-full text-left px-3 py-2 rounded-md text-base font-medium hover:bg-background-secondary hover:text-white"
              onClick={() => toggleDropdown("documentacion")}
            >
              Documentación <BsChevronDown className="ml-2 " />
            </button>
            {dropdownOpen.documentacion && (
              <div className="pl-4">
                <Link
                  href="/documentacion/uno"
                  className="block text-black dark:text-white px-3 py-2 hover:bg-background-secondary hover:text-white"
                >
                  Doc Uno
                </Link>
                <Link
                  href="/documentacion/dos"
                  className="block text-black dark:text-white px-3 py-2 hover:bg-background-secondary hover:text-white"
                >
                  Doc Dos
                </Link>
              </div>
            )}
          </div>

          {/* Dropdown Cascading for Planes y Proyectos */}
          <div>
            <button
              className="flex text-black dark:text-white items-center justify-between w-full text-left px-3 py-2 rounded-md text-base font-medium hover:bg-background-secondary hover:text-white"
              onClick={() => toggleDropdown("planes")}
            >
              Planes y Proyectos <BsChevronDown className="ml-2" />
            </button>
            {dropdownOpen.planes && (
              <div className="pl-4">
                <Link
                  href="/planesyproyectos/uno"
                  className="block text-black dark:text-white px-3 py-2 hover:bg-background-secondary hover:text-white"
                >
                  Proyecto Uno
                </Link>
                <Link
                  href="/planesyproyectos/dos"
                  className="block text-black dark:text-white px-3 py-2 hover:bg-background-secondary hover:text-white"
                >
                  Proyecto Dos
                </Link>
              </div>
            )}
          </div>

          {/* Dropdown Cascading for Enlaces de Interés */}
          <div>
            <button
              className="flex text-black dark:text-white items-center justify-between w-full text-left px-3 py-2 rounded-md text-base font-medium hover:bg-background-secondary hover:text-white"
              onClick={() => toggleDropdown("enlaces")}
            >
              Enlaces de Interés <BsChevronDown className="ml-2" />
            </button>
            {dropdownOpen.enlaces && (
              <div className="pl-4">
                <Link
                  href="/enlacesdeinteres/uno"
                  className="block text-black dark:text-white px-3 py-2 hover:bg-background-secondary hover:text-white"
                >
                  Enlace Uno
                </Link>
                <Link
                  href="/enlacesdeinteres/dos"
                  className="block text-black dark:text-white px-3 py-2 hover:bg-background-secondary hover:text-white"
                >
                  Enlace Dos
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}
