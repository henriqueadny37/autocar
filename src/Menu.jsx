/* eslint-disable @next/next/no-img-element */
"use client";
import { useState } from "react";
import bars from "./Icons/bars.svg";
import close from "./Icons/close.svg";
import Estoque from "./Conferir/Estoque";

const Menu = () => {
  const [isClick, setIsclick] = useState(false);

  const bots = () => {
    setIsclick(!isClick);
  };

  return (
    <>
      <nav className="bg-orange-600">
        <div className="max-w-7xl m-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0 font-semibold text-3xl">
                <a href="#">Auto Car</a>
              </div>
            </div>
            <div className="hidden md:block">
              <div className="ml-4 items-center space-x-4">
                <a
                  href="#"
                  className="text-white hover:bg-white hover:text-orange-700 rounded-lg p-2">
                  Inicio
                </a>
                <a
                  href="/Estoque"
                  className="text-white hover:bg-white hover:text-orange-700 rounded-lg p-2">
                  Estoque
                </a>
                <a
                  href="#"
                  className="text-white hover:bg-white hover:text-orange-700 rounded-lg p-2">
                  Financiamento
                </a>
                <a
                  href="/User/Usuario"
                  className="text-white hover:bg-white hover:text-orange-700 rounded-lg p-2">
                  Fale Conosco
                </a>
                <a
                  href="#"
                  className="text-white hover:bg-white hover:text-orange-700 rounded-lg p-2">
                  Sobre
                </a>
              </div>
            </div>
            <div className="md:hidden flex items-center">
              <button
                className="inline-flex items-center justify-center p-2 rounded-md text-white
               hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                onClick={bots}>
                {isClick ? (
                  <img src={close.src} alt="" className="w-10 h-10" />
                ) : (
                  <img src={bars.src} alt="" className="w-10 h-10" />
                )}
              </button>
            </div>
          </div>
        </div>
        {isClick && (
          <div className="md:hidden">
            <div className="px-2 pb-3 pt-2 space-x-1 sm:px-3">
              <a
                href="#"
                className="text-white hover:text-orange-700 rounded-lg p-2 ml-1 block">
                Inicio
              </a>
              <a
                href="User/Usuario"
                className="text-white hover:text-orange-700 rounded-lg p-2 block">
                Estoque
              </a>
              <a
                href="#"
                className="text-white hover:text-orange-700 rounded-lg p-2 block">
                Financiamento
              </a>
              <a
                href="#"
                className="text-white hover:text-orange-700 rounded-lg p-2 block">
                Fale Conosco
              </a>
              <a
                href="#"
                className="text-white hover:text-orange-700 rounded-lg p-2 block">
                Sobre
              </a>
            </div>
          </div>
        )}
      </nav>
    </>
  );
};
export default Menu;
