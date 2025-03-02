import { useContext } from "react";
import { MariaContext } from "../../Context";

const Feedback = () => {

    const context = useContext(MariaContext);
    
    const parseFeedback = () => {
        try{
            if (typeof context.isFeedback === 'string'){
                return JSON.parse(context.isFeedback);
            }
            return null;

        }catch(error){
            return null;
        }
    }

    const feedbackData = parseFeedback();

    return(
        <div className="w-full border border-white h-auto bg-[#4A235A] mt-18 ml-2 rounded-xl md:w-4/5 lg:w-4/5">
                <div className="p-8">
                    <h3 className="text-xl font-bold mb-2">Feedback</h3>
                    <hr className="mb-4" />
                    {feedbackData ? (
                        <div className="space-y-4 text-white">
                            <div className="bg-purple-800 p-4 rounded-lg">
                                <h4 className="font-bold text-lg mb-2">General</h4>
                                <p>{feedbackData.general}</p>
                            </div>
                            
                            <div className="bg-purple-800 p-4 rounded-lg">
                                <h4 className="font-bold text-lg mb-2">Grammar Tips</h4>
                                <p>{feedbackData.grammar}</p>
                            </div>

                            <div className="bg-purple-800 p-4 rounded-lg">
                                <h4 className="font-bold text-lg mb-2">Example</h4>
                                <p className="font-mono">{feedbackData.example}</p>
                            </div>

                            <div className="bg-pink-100 p-4 rounded-lg text-purple-900">
                                <h4 className="font-bold text-lg mb-2">Motivational Message</h4>
                                <p>{feedbackData.motivational_message}</p>
                            </div>
                        </div>
                    ) : (
                        <p className="text-justify text-gray-200">
                            {context.isFeedback}
                        </p>
                    )}
                </div>
            </div>
    );

}


export default Feedback;