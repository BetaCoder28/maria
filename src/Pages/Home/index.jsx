import { Link } from 'react-router-dom';

import Footer from '../../Components/Footer';
import './home.css';


const Home = () => {
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

                {/* Descripción */}
                <div className='max-w-3xl text-white text-center'>
                    <p className='mb-4 text-justify text-base md:text-lg  lg:text-xl'>
                    Maria&rsquo;s goal is to offer a structured and effective way to learn a new language through real-life conversation lessons. These lessons simulate authentic scenarios, helping you develop practical skills in meaningful contexts. After each lesson, guided conversations reinforce key concepts and vocabulary, ensuring you not only understand but also gain confidence to use the language in real-world situations. Maria&rsquo;s immersive and interactive approach supports your progress toward fluency over time.
                    </p>
                    <p className='mb-6 text-base md:text-lg lg:text-xl'>
                        We also have one more service, the translator.
                    </p>
                    <h2 className='text-xl md:text-2xl lg:text-3xl font-bold'>
                        Our Services
                    </h2>
                </div>

                {/* Tarjetas de servicios */}
                <div className='w-full max-w-6xl grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-8 px-4'>
                    {/* Card 1 */}
                    <div className="flex flex-col items-center h-auto p-6 rounded-lg bg-[#4A235A] shadow-lg border-2 border-white ">
                        <h2 className='text-white text-lg md:text-xl font-semibold'>Lessons</h2>
                        <p className='text-white text-center text-sm md:text-base lg:text-lg my-2'>
                            Begin your learning journey with the lessons we have thoughtfully prepared for you.
                        </p>
                        <Link to='/lessons' className="w-full">
                            <button className="w-full px-4 py-2 bg-[#F4D03F] text-white font-bold rounded transition hover:bg-yellow-600 text-sm md:text-base">
                                Go to Lessons
                            </button>
                        </Link>
                    </div>

                    {/* Card 2 */}
                    <div className="flex flex-col items-center h-auto p-6 rounded-lg bg-[#4A235A] shadow-lg border-2 border-white ">
                        <h2 className='text-white text-lg md:text-xl font-semibold'>Maria</h2>
                        <p className='text-white text-center text-sm md:text-base lg:text-lg my-2'>
                            Start a conversation with virtual assistant Maria and discover your full potential.
                        </p>
                        <Link to='/maria' className="w-full">
                            <button className="w-full px-4 py-2 bg-[#F4D03F] text-white font-bold rounded transition hover:bg-yellow-600 text-sm md:text-base">
                                Try Maria.
                            </button>
                        </Link>
                    </div>

                    {/* Card 3 */}
                    <div className="flex flex-col items-center h-auto p-6 rounded-lg bg-[#4A235A] shadow-lg border-2 border-white ">
                        <h2 className='text-white text-lg md:text-xl font-semibold'>Translator</h2>
                        <p className='text-white text-center text-sm md:text-base lg:text-lg my-2'>
                            Utilize our translator to accurately translate any text or content with ease.
                        </p>
                        <Link to='/translate' className="w-full">
                            <button className="w-full px-4 py-2 bg-[#F4D03F] text-white font-bold rounded transition hover:bg-yellow-600 text-sm md:text-base">
                                Go to Translate
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
