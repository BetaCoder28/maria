import MariaImage from "../../Components/Maria";
import Feedback from "../../Components/Feedback";
import Listening from "../../Components/Listening";
import Microphone from "../../Components/Microphone";

const Maria = () => {
    return(
        <div className="flex flex-col md:flex-row justify-between w-full h-auto p-4 md:p-8">
            {/* Animación del listening */}
            <div className="w-full mt-18 md:w-3/5 mb-4 md:mb-0 md:mr-4 lg:ml-48">
                <aside className="text-center">
                    <MariaImage />
                    {/* Listening Part */}
                    <Listening />
                    <p className="text-pink-200 text-xl font-semibold">Listening...</p>
                    <Microphone />
                </aside>
            </div>

            {/* Feedback space */}
            <div className="h-auto md:w-4/5 md:mr-12 lg:w-4/5 lg:mr-12 ">
                <Feedback />
            </div>
        </div>
    );
}

export default Maria;