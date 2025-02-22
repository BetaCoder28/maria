import { useState, useEffect } from "react";

import MariaImage from "../../Components/Maria";
import Feedback from "../../Components/Feedback";
import Listening from "../../Components/Listening";
import Microphone from "../../Components/Microphone";


const Maria = () => {

    const [isListening, setIsListening] = useState(false);
    const [transcript, setTranscript] = useState('');
    const [recognition, setRecognition] = useState(null);

    useEffect(() => {
        // configurar el api de reconocimiento de voz
        const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
        if (SpeechRecognition){
            const recog = new SpeechRecognition();
            recog.continuous = true
            recog.interimResults = true;
            recog.lang = 'en-US';

            recog.onresult = (event) =>{
                const transcriptText = Array.from(event.results)
                .map(result => result[0].transcript)
                .join('');
            setTranscript(prev => transcriptText); //actualizar el estado
            console.log('Detected Text: ', transcriptText);
            };
            
            recog.onerror = (event) => {
                console.error('Error :', event.error);
            };

            setRecognition(recog);

        } else {
            console.warn('Speech recognition not supported in this browser.');
        }
    }, []
    ); 

    
    const toggleMicrophone = () => {
        if(!recognition) return;
        if (isListening) {
            recognition?.stop();
            console.log('stop');
        } else {
            recognition?.start();
            console.log('active');
        }
        setIsListening(!isListening);
    };


    return(
        <div className="flex flex-col md:flex-row justify-between w-full h-auto p-4 md:p-8">
            {/* Animación del listening */}
            <div className="w-full mt-18 md:w-3/5 mb-4 md:mb-0 md:mr-4 lg:ml-48">
                <aside className="text-center">
                    <MariaImage />

                    {/* Listening Part */}
                    <Listening />
                    <p className="text-pink-200 text-xl font-semibold">Listening...</p>

                    {/* Microphone Part */}
                    <div className="flex justify-center">
                        <Microphone
                            onClick={toggleMicrophone}
                            isListening={isListening}
                            />
                    </div>
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