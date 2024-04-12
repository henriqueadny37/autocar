/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import amarok from "./Fotos/SecaoCarros/amarok.png";
import fiattoro from "./Fotos/SecaoCarros/fiattoro.png";
import undraw from "./Fotos/undraw.png";
import carsertao from "./Fotos/carsertao.gif";

const Section = () => {
  return (
    <>
      <section>
        <div className="grid py-16 justify-center items-center text-3xl font-semibold">
          <p className="text-center xl:text-6xl">A PARTIR DE 1,5% AO MES</p>
          <p className="sm:text-base xl:text-md text-center p-2">
            taxa de financiamento de veículos
          </p>
        </div>
        {/*Ofertas abaixo*/}
        <div className="max-w-7xl m-auto px-5">
          <div className="flex-wrap justify-center items-center lg:px-8">
            <div className="px-2 font-semibold text-center text-white">
              <h1 className="text-4xl lg:text-6xl">OFÉRTAS</h1>
              <p className="text-sm">
                A sua procura acaba aqui, venha conferir as melhores ofertas
                para voce sair de carro novo!
              </p>
              <img
                src={amarok.src}
                alt=""
                className="my-3 md:mx-auto rounded-md justify-center items-center"
              />
              <img
                src={fiattoro.src}
                alt=""
                className="my-3 md:mx-auto rounded-md justify-center items-center"
              />
            </div>
          </div>
        </div>
        {/*DIV DO FINANCIAMENTO E BOTÕES ABAIXO */}
        <div className="max-w-7xl mx-auto items-center justify-around text-center font-semibold">
          <p className="text-3xl">CONFIRA</p>
          <div className="px-5 my-10 mx-28 sm:mx-0 sm:flex sm:justify-center sm:items-center text-center sm:gap-4">
            <div className="bg-orange-500 text-white hover:bg-black hover:text-orange-500 md:hover:bg-white md:hover:text-orange-500 rounded-md p-2 w-32 cursor-pointer">
              <button>
                <Link href="conferir/Estoque">Estoque</Link>
              </button>
            </div>
            <div className="bg-orange-500 text-white hover:bg-black hover:text-orange-500 md:hover:bg-white md:hover:text-orange-500 rounded-md p-2 w-32 my-3 cursor-pointer">
              <button>
                <Link href="#">Financiamento</Link>
              </button>
            </div>
          </div>
        </div>
        {/*FIM DA DIV BOTÕES ACIMA*/}
        <div className="bg-amber-200">
          <div className="max-w-7xl m-auto px-4 sm:px-6 lg:px-8">
            <div className="flex-1 justify-center items-center text-center">
              <h1 className="font-semibold my-32 text-3xl text-black p-3">
                PORQUE NÓS?
              </h1>
              <div className="max-4-xl mx-auto grid grid-cols-1 justify-center items-center">
                <img
                  src={carsertao.src}
                  alt=""
                  className="w-32 h-32 lg:w-52 lg:h-52"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default Section;

{
  /* */
}

{
  /* <div className="flex-col sm:flex py-16 justify-center items-center font-semibold">
          <div className="sm:flex gap-4">
            <div
              className="text-center bg-red-700 text-white hover:bg-white
             hover:text-red-700 p-4 rounded-md w-60 cursor-pointer">
              <button>
                <Link href="/">
                  Estoque <br />
                  <p className="text-xs">confira nosso estoque de semi-novos</p>
                </Link>
              </button>
            </div>
            <div
              className="text-center bg-red-700 text-white hover:bg-white
             hover:text-red-700 p-4 rounded-md w-60 cursor-pointer">
              <button>
                <Link href="/">
                  Financiamento <br />
                  <p className="text-xs">simule seu financiamento conosco</p>
                </Link>
              </button>
            </div>
          </div>
        </div> */
}
{
  /* <div className="">
          <div className="max-w-7xl m-auto px-4">
            <div className="flex-col items-center md:justify-around">
              <div className="flex-col justify-center items-center text-center">
                Confira o nosso estoque
                <div className="bg-red-700 rounded-md p-2">
                  <button>Estoque</button>
                </div>
              </div>
              <div className="flex-col justify-center items-center text-center my-4">
                Simule seu financiamento conosco
                <div className="bg-red-700 rounded-md p-2">
                  <button>Financiamento</button>
                </div>
              </div>
            </div>
          </div>
        </div> */
}
