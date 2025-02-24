import { useContext, useEffect, useRef, useState } from "react";
import { MariaContext } from "../../Context";

import MariaImage from "../../Components/Maria";
import Feedback from "../../Components/Feedback";
import Listening from "../../Components/Listening";
import Speaking from "../../Components/Speaking";
import Microphone from "../../Components/Microphone";

import { sendChatMessage } from "../../services/chat";


const Maria = () => {
    // leer el contexto global
    const context = useContext(MariaContext);
    const [audioUrl, setAudioUrl] = useState(null); // Estado para la URL del audio

    const silenceTimeout = useRef(null);
    const audioRef = useRef(null);

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
                //reiniciar el temporizador
                clearTimeout(silenceTimeout.current);

                const transcriptText = Array.from(event.results)
                .map(result => result[0].transcript)
                .join('');

                //detectar si es el resultado final
                if (event.results[0].isFinal){
                    finalTranscript = transcriptText
                }

            context.setTranscript(prev => transcriptText); //actualizar el estado
            console.log('Detected Text: ', transcriptText);

            silenceTimeout.current = setTimeout(() => {
                recog.stop();
                console.log("Silence detected, stopping recognition...");

                if (finalTranscript){
                    sendMessage(finalTranscript);
                }
            }, 2000);

            };

            const sendMessage = async (message) => {
                try{
                    // mandar mensaje al api
                    const apiResponse = await sendChatMessage(message);

                    console.log('Respuesta del api: ', apiResponse);

                    //Limpiar transcripción
                    context.setTranscript('');

                    // Reproducir audio de la respuesta
                    if (apiResponse.audio) {
                        playAudio(apiResponse.audio);
                    }

                    setTimeout(() => {
                        recog.start();
                        console.log("Microphone reactivated");
                    }, 1000);
                }
                catch(error){
                    console.error('Error processing response:', error )
                }
            }
            context.setRecognition(recog);
        } else {
            console.warn('Speech recognition not supported in this browser.');
        }
    }, []
    ); 

    // Función para convertir Base64 en un audio reproducible
    const playAudio = (base64Audio) => {
        const byteCharacters = atob(base64Audio);
        const byteArrays = [];

        for (let i = 0; i < byteCharacters.length; i++) {
            byteArrays.push(byteCharacters.charCodeAt(i));
        }

        const byteArray = new Uint8Array(byteArrays);
        const blob = new Blob([byteArray], { type: "audio/mp3" });
        const url = URL.createObjectURL(blob);

        setAudioUrl(url); // Guardar la URL en el estado

        setTimeout(() => {
            if (audioRef.current) {
                audioRef.current.play().catch(error => console.error("Error al reproducir audio:", error));
            }
        }, 500); // Pequeño delay para asegurar que la URL está lista
    };


    // Manejo de eventos del audio
    useEffect(() => {
        if (audioRef.current) {
            audioRef.current.onplay = () => {
                context.setIsSpeaking(true);
                context.setIsListening(false); // Desactivar escucha
                context.recognition?.stop(); // Detener la escucha mientras habla
                context.setTranscript(''); // Limpiar el transcriptor
            };

            audioRef.current.onended = () => {
                context.setIsSpeaking(false);
                setTimeout(() => {
                    if (!context.isListening) { // Solo iniciar si no está escuchando ya
                        context.recognition?.start();
                        context.setIsListening(true);
                    }
                }, 500); // Pequeña espera para evitar superposición
            };
        }
    }, [audioUrl]);
    
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
                    {!context.isSpeaking && context.isListening && (
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
                    
                    {/* Reproductor de Audio */}
                    <audio ref={audioRef} src={audioUrl} />
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