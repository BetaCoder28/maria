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
            const recognition = new SpeechRecognition();
            recognition.continuous = true
            recognition.interimResults = true;
            recognition.lang = 'es-Es';

            recognition.onresult = (event) =>{
                const current = event.resultIndex;
                const transcript = Array.from(event.results)
                .map(result => result[0])
                .map(result => result.transcript)
                .join('');
            setTranscript(transcript);
            console.log('Detected Text: ', transcript);
            };
            
            recognition.onerror = (event) => {
                console.error('Error :', event.error);
            };

            setRecognition(recognition);

        } else {
            console.warn('Voice recognice not compatible');
        }
    }, []
    ); 

    
    const toggleMicrophone = () => {
        if (isListening) {
            recognition?.stop();
        } else {
            recognition?.start();
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
                    <Microphone
                        onClick={toggleMicrophone}
                        isListening={isListening}
                    />
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