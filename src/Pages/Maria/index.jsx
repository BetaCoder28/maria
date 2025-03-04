import { useContext, useEffect, useRef, useState} from "react";
import { MariaContext } from "../../Context";

import MariaImage from "../../Components/Maria";
import Feedback from "../../Components/Feedback";
import Listening from "../../Components/Listening";
import Microphone from "../../Components/Microphone";

import { sendChatMessage } from "../../services/chat";
import {getFeedback} from "../../services/feedback";
import Modal from "./modal";


const Maria = () => {
    // leer el contexto global
    const context = useContext(MariaContext);

    const silenceTimeout = useRef(null);
    const recogRef = useRef(null);
    const audioRef = useRef(null);
    //Historial de la conversación
    const [conversationHistory, setConversationHistory] = useState([]);

    // Estado para controlar la visibilidad del modal
    const [isModalOpen, setIsModalOpen] = useState(true);

    // Cerrar el modal
    const handleCloseModal = () => {
        setIsModalOpen(false);
    };

    // Abrir el modal automáticamente al cargar la página
    useEffect(() => {
        setIsModalOpen(true);
    }, []);


    useEffect(() => {
        // configurar el api de reconocimiento de voz
        const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
        if (SpeechRecognition){
            const recog = new SpeechRecognition();
            recog.continuous = true
            recog.interimResults = true;
            recog.lang = 'en-US';


            recog.onresult = (event) => {
                //reiniciar el temporizador
                clearTimeout(silenceTimeout.current);

                const transcriptText = Array.from(event.results)
                .map(result => result[0].transcript)
                .join('');

                //detectar si es el resultado final
                if (event.results[0].isFinal){
                    sendMessage(transcriptText)
                }

                context.setTranscript(prev => transcriptText); //actualizar el estado
                console.log('Detected Text: ', transcriptText);

                silenceTimeout.current = setTimeout(() => {
                    recog.stop();
                    console.log("Silence detected, stopping recognition...");
                }, 1500);

            };

            recogRef.current = recog;
            context.setRecognition(recog);

        } else {
            console.warn('Speech recognition not supported in this browser.');
        }
    }, []); 


    const sendMessage = async (message) => {
        try{
            // mandar mensaje al api
            const apiResponse = await sendChatMessage(message);

            console.log('Respuesta del api: ', apiResponse);

            //almacenar mensaje y respuesta
            setConversationHistory(prev => {
                const updatedHistory = [
                    ...prev,
                    {role : 'user', content : message},
                    {role : 'assistant', content : apiResponse.text}
                ];
                return updatedHistory;
            });
            //Terminar la conversación
            if (message.toLowerCase().trim() === 'bye'){
                recogRef.current?.stop();
                context.setIsListening(false);
                GetFeedback(conversationHistory);
            }
            //Limpiar transcripción
            context.setTranscript('');
            
            // Reproducir audio de la URL recibida
            if (apiResponse.audio) {
                context.setAudioUrl(apiResponse.audio);
                
                setTimeout(() => {
                    if (audioRef.current) {
                        audioRef.current.play().catch(error => console.error("Error reproducing audio:", error));
                    }
                }, 500); //delay para asegurar que la URL está lista
            }
            
            setTimeout(() => {
                if (!context.isListening) {
                    recogRef.current?.start();
                    context.setIsListening(true);
                    console.log("Microphone reactivated");
                }
            }, 1000);
        }
        catch(error){
            console.error('Error processing response:', error )
        }
    }
    
    //Función para obtener el feedback
    const GetFeedback = async(conversationHistory) => {
        try {
            //convertir a str
            const formattedConversation = conversationHistory
            .map(entry => `${entry.role}: ${entry.content}`)
            .join('\n');

            if (!formattedConversation.trim()) {
                console.error("No conversation history to send.");
                return;
            }
            
            const feedbackResponse = await getFeedback(formattedConversation);
            console.log('Respuesta del api: ', feedbackResponse);

            context.setIsFeedback(feedbackResponse.feedback);
        }
        catch(error){
            console.error('Error processing response:', error)
        }

    }

    //manejar efectos del feedback
    useEffect(() => {
        if (conversationHistory.some(entry => 
            entry.content?.toLowerCase().includes('bye')
          )) {
            GetFeedback(conversationHistory);
          }
        }, [conversationHistory]);

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
                    if (!context.isListening && recogRef.current) { // Solo iniciar si no está escuchando ya
                        recogRef.current.start();
                        context.setIsListening(true);
                    }
                }, 500); //espera para evitar superposición
            };
        }
    }, [context.audioUrl]);
    
    //activar/desactivar micro
    const toggleMicrophone = () => {
        if (!recogRef.current) return;

        if (context.isListening) {
            recogRef.current.stop();
            context.setIsListening(false); 
            console.log('Microphone stopped');
        } else {
            recogRef.current.abort()
            setTimeout(() => {
            recogRef.current.start();
            context.setIsListening(true);
            }, 500);
        }

        context.setIsListening(!context.isListening);
    };


    return(
        <div className="flex flex-col md:flex-row justify-between w-full h-auto p-4 md:p-8">
            <Modal isOpen={isModalOpen} onClose={handleCloseModal} />
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
                    <audio ref={audioRef} src={context.audioUrl} />
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