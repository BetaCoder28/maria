import { Link } from 'react-router-dom';

import './home.css';

const Home = () => {

    return (
        <div className='bg-image fixed h-screen w-screen'>
            <div className="absolute inset-0 bg-black opacity-70"></div> {/* Fondo con opacidad */}
            {/* Contenido */}
            <div className="flex justify-center mt-12 relative z-10"> 
                <h1 className="font-bold text-9xl text-white">MARIA</h1>
                
            </div>
            <div className='flex flex-col items-center m-4 relative z-10'>
                <p className='m-4 text-justify'>Maria&rsquo;s main goal is to provide you with a comprehensive and effective approach to learning and practicing a new language. She achieves this by offering a structured program that includes a variety of lessons focused on real-life conversations. These lessons are designed to simulate authentic scenarios, allowing you to develop practical language skills in a meaningful context. After each lesson, you will have the opportunity to apply what you&rsquo;ve learned by engaging in guided conversations that reinforce the key concepts and vocabulary covered. This hands-on practice ensures that you not only understand the material but also gain the confidence to use the language in real-world situations. Through this method, Maria aims to create an immersive and interactive learning experience that supports your progress and helps you achieve fluency over time.</p>
                
                <p className='m-4'>We also have one more service, the translator.</p>
                
                <h2 className='text-white font-bold text-2xl'>Our services </h2>
            </div>
            {/* SERVICES */}
            <div className='m-12 relative z-10'>
                <div className="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-8">
                    {/* Card 1 */}
                    <div className="flex flex-col items-center h-48 rounded-lg bg-[#4A235A] justify-center p-4">
                        <h2 className='text-white text-lg font-semibold'>Lessons</h2>
                        <p className='text-white text-justify text-lg m-2'>Begin your learning journey with the lessons we have thoughtfully prepared for you.</p>
                        <Link to='/lessons' className="flex justify-center">
                            <button className="relative px-6 py-2 bg-[#F4D03F] text-white font-bold rounded overflow-hidden shadow-lg transition hover:bg-yellow-600">
                                <span className="relative z-10">Go to Lessons</span>
                            </button>
                        </Link>
                    </div>

                    {/* Card 2 */}
                    <div className="flex flex-col items-center h-48 rounded-lg bg-[#4A235A] justify-center p-4">
                        <h2 className='text-white text-lg font-semibold'>Maria</h2>
                        <p className='text-white text-justify text-lg m-2'>Try the virtual assistant Maria by starting a conversation.</p>
                        <Link to='/maria' className="flex justify-center">
                            <button className="relative px-6 py-2 bg-[#F4D03F] text-white font-bold rounded overflow-hidden shadow-lg transition hover:bg-yellow-600">
                                <span className="relative z-10">Try Maria</span>
                            </button>
                        </Link>
                    </div>

                    {/* Card 3 */}
                    <div className="flex flex-col items-center h-48 rounded-lg bg-[#4A235A] justify-center p-4">
                        <h2 className='text-white text-lg font-semibold'>Translator</h2>
                        <p className='text-white text-justify text-lg m-2'>Utilize our translator to accurately translate any text or content with ease.</p>
                        <Link to='/translate' className="flex justify-center">
                            <button className="relative px-6 py-2 bg-[#F4D03F] text-white font-bold rounded overflow-hidden shadow-lg transition hover:bg-yellow-600">
                                <span className="relative z-10">Go to Translate</span>
                            </button>
                        </Link>
                    </div>
                </div>
            </div>


        </div>
    )

}

export default Home;