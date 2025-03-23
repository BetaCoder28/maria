import { useState } from "react";
import { Link } from "react-router-dom";

const Lessons = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => setCurrentIndex(1);
  const prevSlide = () => setCurrentIndex(0);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-2">
        <div className="relative w-full max-w-4xl overflow-hidden flex items-center">
        
            {/* Botón Izquierdo */}
            <button
                onClick={prevSlide}
                className={`absolute left-4 z-10 text-yellow-400 text-4xl md:text-8xl transition-opacity duration-300 ${
                currentIndex === 0 ? "opacity-0 pointer-events-none" : "opacity-100"
                }`}
                >
                &#60;
            </button>

            {/* Contenedor de Carrusel */}
            <div className="overflow-hidden w-full">
                <div
                    className="flex transition-transform duration-500"
                    style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                    >
                    {/* Rectángulo 1 VOCABULARIO */}
                    <div className="w-full flex-shrink-0 flex justify-center">
                        <div className="w-72 h-96 border border-white md:w-[650px] md:h-[680px] bg-[#4A235A] rounded-lg flex flex-col items-center pt-4 transition-opacity duration-500">

                            <div className="flex justify-center z-10 mb-[-60px] md:mb-[-80px]">
                                <img 
                                    src="https://images.vexels.com/media/users/3/145460/isolated/preview/d08a1157100d2e42f31b4a752e71c33b-ilustracion-de-manzana.png" 
                                    className="w-48 md:w-[350px] transform translate-y-12 md:translate-y-16"
                                />
                            </div>

                            <div className="bg-white mt-48 p-6 rounded-lg w-full max-w-[90%] z-20">
                                <p className="text-black text-lg">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Rectángulo 2 EJEMPLOS */}
                    <div className="w-full flex-shrink-0 flex justify-center">
                        <div className="w-72 h-96 border border-white md:w-[650px] md:h-[680px] bg-[#4A235A] rounded-lg flex flex-col items-center pt-4 transition-opacity duration-500">

                            <div className="flex justify-center z-10 mb-[-60px] md:mb-[-80px]">
                                <img 
                                    src="https://images.vexels.com/media/users/3/145460/isolated/preview/d08a1157100d2e42f31b4a752e71c33b-ilustracion-de-manzana.png" 
                                    className="w-48 md:w-[350px] transform translate-y-12 md:translate-y-16"
                                />
                            </div>

                            <div className="bg-white mt-48 p-6 rounded-lg w-full max-w-[90%] z-20">
                                <p className="text-black text-lg">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Botón Derecho */}
            <button
                onClick={nextSlide}
                className={`absolute right-4 z-10 text-yellow-400 text-4xl md:text-8xl transition-opacity duration-300 ${
                currentIndex === 1 ? "opacity-0 pointer-events-none" : "opacity-100"
                }`}
                >   
                &#62;
            </button>
        </div>

        {/* Botón Continuar */}
        <Link to="/">
            <button className="mt-8 px-6 py-3 bg-yellow-400 text-white rounded-lg text-lg font-semibold">
                CONTINUE
            </button>
        </Link>
    </div>
  );
};

export default Lessons;
