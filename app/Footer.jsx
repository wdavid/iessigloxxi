"use client";
import React from 'react';
import { FaFacebookF, FaInstagram, FaLinkedin, FaYoutube } from 'react-icons/fa';
import { BsEnvelope, BsPhone } from 'react-icons/bs';
import { MdOutlineLocationOn } from "react-icons/md";
import { useLanguage } from "../contexts/LanguageContext";

export default function Footer() {
  const { t } = useLanguage();
  return (
    <footer id="footer" className="bg-background-secondary dark:bg-black text-white py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-wrap justify-between">
          <div className="w-full md:w-1/3 mb-6">
            <h2 className="text-lg font-bold mb-4">{t.footer.title}</h2>
            <p className=" mb-4">{t.footer.description}</p>
            <div className="flex space-x-4">
              
              <a href="https://youtube.com/@iess.sigloxxi?si=fhyLqhMvjdJLYi_A" target="_blank" className="text-white hover:text-gray-400">
                <FaYoutube className="text-xl" />
                <span className="sr-only">Twitter</span>
              </a>
              <a href="https://www.instagram.com/ies_siglo_xxi?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="_blank" className="text-white hover:text-gray-400">
                <FaInstagram className="text-xl" />
                <span className="sr-only">Instagram</span>
              </a>
              <a href="https://www.linkedin.com/company/sigloxxiemprende/posts/?feedView=all" target="_blank" className="text-white hover:text-gray-400">
                <FaLinkedin className="text-xl" />
                <span className="sr-only">LinkedIn</span>
              </a>
              <a href="https://www.facebook.com/pages/Instituto%20de%20Educaci%C3%B3n%20Secundaria%20Ies%20Siglo%20XXI/891152880980152/" target="_blank" className="text-white hover:text-gray-400">
                <FaFacebookF className="text-xl" />
                <span className="sr-only">Facebook</span>
              </a>
            </div>
          </div>

          <div className="mb-6 block space-y-2">
            <img className="h-8 rounded-md" src="/juntaAndalucia.jpg" alt="Logo Claro" />
            <img className="h-8 rounded-md" src="/LogoUE.jpg" alt="Logo Claro" />
            <img className="h-8 rounded-md" src="/planRecuperacion.jpg" alt="Logo Claro" />
            <img className="h-8 rounded-md" src="/gobierno.jpg" alt="Logo Claro" />
          </div>

          <div className="w-full md:w-1/3 mb-6">
            <h2 className="text-lg font-bold mb-4">{t.footer.contactTitle}</h2>
            <ul>
              <li className="flex items-center mb-2">
                <BsPhone className="mr-2" />
                <a href="tel:+50312345678" className="hover:text-gray-400">955 623 672</a>
              </li>
              <li className="flex items-center mb-2">
                <BsEnvelope className="mr-2" />
                <a href="mailto:41701444.edu@juntadeandalucia.es" className="hover:text-gray-400">41701444.edu@juntadeandalucia.es</a>
              </li>
              <li className="flex items-center">
                <MdOutlineLocationOn className="mr-2" />
                <span href="#" className="hover:text-gray-400">C. Torrelaguna, s/n, 41016 Sevilla</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-white pt-6 text-center">
          <p className="text-sm">&copy; {new Date().getFullYear()} IES Siglo XXI. {t.footer.rights}</p>
        </div>
      </div>
    </footer>
  );
}
