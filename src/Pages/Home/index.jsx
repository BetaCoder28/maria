import { Link } from 'react-router-dom';
import './home.css';

const Home = () => {
    return (
        <div className='bg-image fixed sm:h-full w-full md:h-screen w-screen lg:h-screen w-screen '>
            <div className="absolute inset-0 bg-black opacity-70"></div>
            
            {/* Título */}
            <div className="flex justify-center mt-8 md:mt-12 relative z-10"> 
                <h1 className="font-bold text-6xl md:text-9xl text-white text-center">MARIA</h1>
            </div>
            
            {/* Contenido */}
            <div className='flex flex-col items-center m-4 px-4 md:px-0 relative z-10'>
                <p className='m-2 md:m-4 text-justify text-base md:text-lg lg:text-lg'>
                Maria's goal is to help you learn a language effectively through a structured program focused on real-life conversations. Her lessons simulate authentic scenarios to develop practical skills, followed by guided practice to reinforce concepts. This hands-on approach builds confidence for real-world use, fostering fluency via an immersive, interactive method.</p>
                
                <p className='m-2 md:m-2 text-base md:text-lg lg:text-xl text-center'>
                    We also have one more service, the translator.
                </p>
                
                <h2 className='text-white font-bold text-xl md:text-2xl lg:text-3xl mt-2'>Our services</h2>
            </div>
            
            {/* SERVICES */}
            <div className='m-4 md:m-12 px-2 md:px-0 relative z-10'>
                <div className="grid grid-cols-1 gap-4 md:grid-cols-3 lg:gap-8">
                    {/* Card 1 */}
                    <div className="flex flex-col items-center h-auto md:h-48 rounded-lg bg-[#4A235A] justify-center p-4">
                        <h2 className='text-white text-lg md:text-xl font-semibold'>Lessons</h2>
                        <p className='text-white text-center text-sm md:text-base lg:text-lg m-2'>
                            Begin with the lessons we have prepared for you.
                        </p>
                        <Link to='/lessons' className="flex justify-center w-full">
                            <button className="px-4 md:px-6 py-2 bg-[#F4D03F] text-white font-bold rounded overflow-hidden shadow-lg transition hover:bg-yellow-600 text-sm md:text-base whitespace-nowrap">
                                Go to Lessons
                            </button>
                        </Link>
                    </div>

                    {/* Card 2 */}
                    <div className="flex flex-col items-center h-auto md:h-48 rounded-lg bg-[#4A235A] justify-center p-4">
                        <h2 className='text-white text-lg md:text-xl font-semibold'>Maria</h2>
                        <p className='text-white text-center text-sm md:text-base lg:text-lg m-2'>
                            Try the virtual assistant Maria.
                        </p>
                        <Link to='/maria' className="flex justify-center w-full">
                            <button className="px-4 md:px-6 py-2 bg-[#F4D03F] text-white font-bold rounded overflow-hidden shadow-lg transition hover:bg-yellow-600 text-sm md:text-base whitespace-nowrap">
                                Try Maria
                            </button>
                        </Link>
                    </div>

                    {/* Card 3 */}
                    <div className="flex flex-col items-center h-auto md:h-48 rounded-lg bg-[#4A235A] justify-center p-4">
                        <h2 className='text-white text-lg md:text-xl font-semibold'>Translator</h2>
                        <p className='text-white text-center text-sm md:text-base lg:text-lg m-2'>
                            Utilize our translator.
                        </p>
                        <Link to='/translate' className="flex justify-center w-full">
                            <button className="px-4 md:px-6 py-2 bg-[#F4D03F] text-white font-bold rounded overflow-hidden shadow-lg transition hover:bg-yellow-600 text-sm md:text-base whitespace-nowrap">
                                Go to Translate
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home;