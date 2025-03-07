import { Link } from 'react-router-dom';
import { useContext } from 'react';
//Importaciones para multilenguaje
import { LanguageContext } from '../../locale/languageProvider';
import { translations } from '../../locale/translations';
import LanguageSwitcher from '../../locale/languageSwitcher';

import Footer from '../../Components/Footer';
import './home.css';


const Home = () => {
    const {language} = useContext(LanguageContext);
    const t = translations[language]; //obtener traducciones según el idioma

    return (
        <div className='bg-image relative min-h-screen w-full overflow-auto'>
            {/* Capa de fondo oscura */}
            <div className="absolute inset-0 bg-black opacity-70"></div>

            {/* Contenido principal */}
            <div className="relative z-10 flex flex-col items-center px-4 py-8 md:py-12">
                
                {/* Título */}
                <h1 className="font-bold text-6xl md:text-9xl text-white text-center mb-6 md:mb-10">
                    MARIA
                </h1>

                {/* Selector de lenguajes */}
                <div className='z-10 m-4'>
                    <LanguageSwitcher></LanguageSwitcher> 
                </div>

                {/* Descripción */}
                <div className='max-w-3xl text-white text-center'>
                    <p className='mb-4 text-justify text-base md:text-lg  lg:text-xl'>
                    {t.Home.mainDescription}
                    </p>
                    <p className='mb-6 text-base md:text-lg lg:text-xl'>
                        {t.Home.translatorDescription}
                    </p>
                    <h2 className='text-xl md:text-2xl lg:text-3xl font-bold'>
                        {t.Home.ServicesTitle.mainTitle}
                    </h2>
                </div>

                {/* Tarjetas de servicios */}
                <div className='w-full max-w-6xl grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-8 px-4'>
                    {/* Card 1 */}
                    <div className="flex flex-col items-center h-auto p-6 rounded-lg bg-[#4A235A] shadow-lg border-2 border-white ">
                        <h2 className='text-white text-lg md:text-xl font-semibold'>{t.Home.ServicesTitle.lessonTitle}</h2>
                        <p className='text-white text-center text-sm md:text-base lg:text-lg my-2'>
                            {t.Home.ServicesDescription.lessons}
                        </p>
                        <Link to='/login' className="w-full">
                            <button className="w-full px-4 py-2 bg-[#F4D03F] text-white font-bold rounded transition hover:bg-yellow-600 text-sm md:text-base">
                                {t.Home.ServicesButton.lessons}
                            </button>
                        </Link>
                    </div>

                    {/* Card 2 */}
                    <div className="flex flex-col items-center h-auto p-6 rounded-lg bg-[#4A235A] shadow-lg border-2 border-white ">
                        <h2 className='text-white text-lg md:text-xl font-semibold'>{t.Home.ServicesTitle.mariaTitle}</h2>
                        <p className='text-white text-center text-sm md:text-base lg:text-lg my-2'>
                            {t.Home.ServicesDescription.maria}
                        </p>
                        <Link to='/login' className="w-full">
                            <button className="w-full px-4 py-2 bg-[#F4D03F] text-white font-bold rounded transition hover:bg-yellow-600 text-sm md:text-base">
                                {t.Home.ServicesButton.maria}
                            </button>
                        </Link>
                    </div>

                    {/* Card 3 */}
                    <div className="flex flex-col items-center h-auto p-6 rounded-lg bg-[#4A235A] shadow-lg border-2 border-white ">
                        <h2 className='text-white text-lg md:text-xl font-semibold'>{t.Home.ServicesTitle.translatorTitle}</h2>
                        <p className='text-white text-center text-sm md:text-base lg:text-lg my-2'>
                            {t.Home.ServicesDescription.translator}
                        </p>
                        <Link to='/translate' className="w-full">
                            <button className="w-full px-4 py-2 bg-[#F4D03F] text-white font-bold rounded transition hover:bg-yellow-600 text-sm md:text-base">
                                {t.Home.ServicesButton.translator}
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
            <div className='relative z-10'>
                <Footer />
            </div>
        </div>
    );
};

export default Home;
