import MariaImage from "../../Components/Maria";

const Maria = () => {

    return(
        <div className="flex justify-between w-full h-auto">
            <div className="w-2/5 mr-2">
                <aside className="text-center mt-18 ml-10">
                    <MariaImage />
                    {/* Listening Part */}
                    <div className="flex justify-center mt-4 space-x-2">
                    {[...Array(10)].map((_, index) => (
                        <div
                        key={index}
                        className="bg-pink-200 w-1 h-6 animate-pulse"
                        style={{
                            animationDelay: `${index * 0.1}s`,
                            animationDuration: "1s",
                        }}
                        />
                    ))}
                    </div>
                    <p className="text-pink-200 text-3xl font-semibold">Listening...</p>
                </aside>
            </div>

            {/* Feedback space */}
            
            <div className="w-3/5 h-auto bg-[#003366] mt-18 ml-2 mr-12 rounded-xl">
                <div className="p-8">
                    <h3 className="text-xl font-bold mb-2">Feedback</h3>
                    <hr></hr>

                </div>
            </div>
        </div>
    )

}


export default Maria;