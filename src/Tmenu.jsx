/* eslint-disable */
import { useState } from "react";
import close from "./Icons/close.svg";
import bars from "./Icons/bars.svg";

const Tmenu = () => {
  const [glock, setGlock] = useState(false);

  const lockedActress = () => {
    setGlock(!glock);
  };

  return (
    <>
      <nav className="bg-lime-500">
        <div className="max-w-7xl m-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <a href="#">home</a>
              </div>
            </div>
            <div className="hidden md:block">
              <div className="ml-4 items-center space-x-4">
                <a
                  href="#"
                  className="text-blue-500 hover:bg-white hover:text-orange-600 p-2 rounded-md">
                  home
                </a>
                <a
                  href="#"
                  className="text-blue-500 hover:bg-white hover:text-orange-600 p-2 rounded-md">
                  neogcios
                </a>
                <a
                  href="#"
                  className="text-blue-500 hover:bg-white hover:text-orange-600 p-2 rounded-md">
                  aparelhos
                </a>
                <a
                  href="#"
                  className="text-blue-500 hover:bg-white hover:text-orange-600 p-2 rounded-md">
                  usados
                </a>
              </div>
            </div>
            <div className="md:hidden flex items-center ">
              <button
                className="inline-flex items-center justify-center p-2 rounded-md text-white
               hover:text-white focus:outline-none focus-ring-2 focus:ring-inset focus:ring-white"
                onClick={lockedActress}>
                {!glock ? (
                  <img src={close.src} alt="" className="w-12 h-12" />
                ) : (
                  <img src={bars.src} alt="" className="w-12 h-12" />
                )}
              </button>
            </div>
          </div>
        </div>
        {glock && (
          <div className="md:hidden">
            <div className="px-2 pb-3 pt-2 space-x-1 sm:px-3">
              <a
                href="#"
                className="text-blue-500 hover:bg-white hover:text-orange-600 p-2 rounded-md">
                usados
              </a>
              <a
                href="#"
                className="text-blue-500 hover:bg-white hover:text-orange-600 p-2 rounded-md">
                usados
              </a>
              <a
                href="#"
                className="text-blue-500 hover:bg-white hover:text-orange-600 p-2 rounded-md">
                usados
              </a>
            </div>
          </div>
        )}
      </nav>
    </>
  );
};
export default Tmenu;
