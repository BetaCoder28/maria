import { Link } from 'react-router-dom';
import NotFoundIcon from '../../assets/svgs/NotFound'

const NotFound = () => {
    return (
        <div className="m-12">
                <h2 className="text-4xl text-center"> 404 Page Not Found </h2>

                <p className="text-2xl text-center mt-2"> We are sorry, the page you are looking for is not found. </p>
                <NotFoundIcon />
                {/* Regresar al home */}
                <div className="flex flex-col w-auto items-center h-auto p-6 rounded-lg bg-[#4A235A] shadow-lg border-2 border-white ">
                        <Link to='/' className="w-full">
                            <button className="w-full px-4 py-2 bg-[#F4D03F] text-white font-bold rounded transition hover:bg-yellow-600 text-sm md:text-base">
                                Go to Home
                            </button>
                        </Link>
                    </div>
        </div>
        
    )
}

export default NotFound;