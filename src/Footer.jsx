const Footer = () => {
  return (
    <>
      <footer className=" text-white my-12">
        <div className="max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center lg:text-2xl">
            <h1>Nos acompanhe nas redes sociais</h1>
          </div>
          <div className="my-8 text-center items-end sm:flex sm:justify-between sm:items-center">
            <div className="">
              <ul>
                <li>
                  <a
                    href="#"
                    className="font-semibold text-orange-500 text-xl hover:text-yellow-300">
                    Instagram
                  </a>
                  <ul>
                    <li>
                      <a href="#" className="hover:text-rose-500">
                        OLX
                      </a>
                    </li>
                  </ul>
                  <ul>
                    <li>
                      <a href="#" className="hover:text-purple-800">
                        Redes
                      </a>
                    </li>
                  </ul>
                  <ul>
                    <li>
                      <a href="#" className="hover:text-teal-400">
                        contato
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
            <div className="my-2 sm:my-0">
              <ul>
                <li>
                  <a
                    href="#"
                    className="font-semibold text-orange-500 text-xl hover:text-yellow-300">
                    Twitter
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-lime-500">
                    videos
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-blue-600">
                    fotos
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-orange-600">
                    noticias
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <ul>
                <li>
                  <a
                    href="#"
                    className="font-semibold text-xl text-orange-500 hover:text-yellow-300">
                    Shopify
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-emerald-600">
                    Vendas
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-green-500">
                    Carros
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-cyan-600">
                    Blog
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};
export default Footer;
