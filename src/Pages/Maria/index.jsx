import { useContext, useEffect } from "react";
import { MariaContext } from "../../Context";

import MariaImage from "../../Components/Maria";
import Feedback from "../../Components/Feedback";
import Listening from "../../Components/Listening";
import Microphone from "../../Components/Microphone";

import { sendChatMessage } from "../../services/chat";


const Maria = () => {
    // leer el contexto global
    const context = useContext(MariaContext);

    useEffect(() => {
        // configurar el api de reconocimiento de voz
        const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
        if (SpeechRecognition){
            const recog = new SpeechRecognition();
            recog.continuous = true
            recog.interimResults = true;
            recog.lang = 'en-US';

            let finalTranscript = ''; //transcripción final

            recog.onresult = (event) => {
                const transcriptText = Array.from(event.results)
                .map(result => result[0].transcript)
                .join('');

                //detectar si es el resultado final
                if (event.results[0].isFinal){
                    finalTranscript = transcriptText
                }

            context.setTranscript(prev => transcriptText); //actualizar el estado
            console.log('Detected Text: ', transcriptText);
            };

            recog.onend = async() => {
                if(finalTranscript){
                    try{
                        // mandar mensaje al api
                        const apiResponse = await sendChatMessage(finalTranscript);
                        
                        console.log('Respuesta del api: ', apiResponse);

                        //Limpiar transcripción
                        context.setTranscript('');
                    }
                    catch(error){
                        console.error('Error processing response:', error )
                    }
                }
            }
            context.setRecognition(recog);
        } else {
            console.warn('Speech recognition not supported in this browser.');
        }
    }, []
    ); 

    
    const toggleMicrophone = () => {
        if(!context.recognition) return;
        if (context.isListening) {
            context.recognition?.stop();
            console.log('stop');
        } else {
            context.recognition?.start();
            console.log('active');
        }
        context.setIsListening(!context.isListening);
    };


    return(
        <div className="flex flex-col md:flex-row justify-between w-full h-auto p-4 md:p-8">
            {/* Animación del listening */}
            <div className="w-full mt-18 md:w-3/5 mb-4 md:mb-0 md:mr-4 lg:ml-48">
                <aside className="text-center">
                    <MariaImage />

                    {/* Listening Part */}
                    {context.isListening && (
                        <>
                            <Listening />
                            <p className="text-pink-200 text-xl font-semibold">Listening...</p>
                        </>
                    )}

                    {/* Microphone Part */}
                    <div className="flex justify-center">
                        <Microphone
                            onClick={toggleMicrophone}
                            isListening={context.isListening}
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