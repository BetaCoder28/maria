import { useContext, useEffect, useRef, useState } from "react";
import { MariaContext } from "../../Context";

import MariaImage from "../../Components/Maria";
import Feedback from "../../Components/Feedback";
import Listening from "../../Components/Listening";
import Microphone from "../../Components/Microphone";

import { sendChatMessage } from "../../services/chat";
import { getFeedback } from "../../services/feedback";
import Modal from "./modal";

const Maria = () => {
    const context = useContext(MariaContext);

    const silenceTimeout = useRef(null);
    const recogRef = useRef(null);
    const audioRef = useRef(null);
    const [conversationHistory, setConversationHistory] = useState([]);
    const [isModalOpen, setIsModalOpen] = useState(true);

    const handleCloseModal = () => setIsModalOpen(false);

    useEffect(() => setIsModalOpen(true), []);

    useEffect(() => {
        const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
        if (!SpeechRecognition) {
            console.warn('Speech recognition not supported in this browser.');
            return;
        }

        const recog = new SpeechRecognition();
        recog.continuous = true;
        recog.interimResults = true;
        recog.lang = 'en-US';

        recog.onresult = (event) => {
            resetSilenceTimeout();
            const transcriptText = Array.from(event.results).map(result => result[0].transcript).join('');

            if (event.results[0].isFinal) sendMessage(transcriptText);

            context.setTranscript(transcriptText);
            console.log('Detected Text: ', transcriptText);
        };

        recogRef.current = recog;
        context.setRecognition(recog);
    }, []);

    const resetSilenceTimeout = () => {
        clearTimeout(silenceTimeout.current);
        silenceTimeout.current = setTimeout(() => {
            recogRef.current?.stop();
            console.log("Silence detected, stopping recognition...");
        }, 1500);
    };

    const sendMessage = async (message) => {
        try {
            const apiResponse = await sendChatMessage(message);
            console.log('Respuesta del api: ', apiResponse);

            setConversationHistory(prev => [
                ...prev,
                { role: 'user', content: message },
                { role: 'assistant', content: apiResponse.text }
            ]);

            if (message.toLowerCase().trim() === 'bye' || message.toLowerCase().trim() === 'goodbye') {
                recogRef.current?.stop();
                context.setIsListening(false);
                getFeedbackFromHistory();
                return;
            }

            context.setTranscript('');

            if (apiResponse.audio) {
                context.setAudioUrl(apiResponse.audio);
                setTimeout(() => audioRef.current?.play().catch(err => console.error("Error reproducing audio:", err)), 500);
            }

            setTimeout(() => {
                if (!context.isListening) {
                    recogRef.current?.start();
                    context.setIsListening(true);
                    console.log("Microphone reactivated");
                }
            }, 1000);
        } catch (error) {
            console.error('Error processing response:', error);
        }
    };

    const getFeedbackFromHistory = async () => {
        try {
            const formattedConversation = conversationHistory.map(entry => `${entry.role}: ${entry.content}`).join('\n');
            if (!formattedConversation.trim()) return console.error("No conversation history to send.");

            const feedbackResponse = await getFeedback(formattedConversation);
            console.log('Respuesta del api: ', feedbackResponse);
            
            context.setIsFeedback(feedbackResponse.feedback);
            recogRef.current?.stop();
            context.setIsListening(false);
        } catch (error) {
            console.error('Error processing response:', error);
        }
    };

    useEffect(() => {
        if (conversationHistory.some(entry => ['bye', 'goodbye'].some(word => entry.content?.toLowerCase().includes(word)))) {
            getFeedbackFromHistory();
        }
    }, [conversationHistory]);

    useEffect(() => {
        if (!audioRef.current) return;
        
        audioRef.current.onplay = () => {
            context.setIsSpeaking(true);
            context.setIsListening(false);
            context.recognition?.stop();
            context.setTranscript('');
        };

        audioRef.current.onended = () => {
            context.setIsSpeaking(false);
            setTimeout(() => {
                if (!context.isListening && recogRef.current) {
                    recogRef.current.start();
                    context.setIsListening(true);
                }
            }, 500);
        };
    }, [context.audioUrl]);

    const toggleMicrophone = () => {
        if (!recogRef.current) return;
        
        if (context.isListening) {
            recogRef.current.stop();
            console.log('Microphone stopped');
        } else {
            recogRef.current.abort();
            setTimeout(() => recogRef.current.start(), 500);
        }
        
        context.setIsListening(!context.isListening);
    };

    return (
        <div className="flex flex-col md:flex-row justify-between w-full h-auto p-4 md:p-8">
            <Modal isOpen={isModalOpen} onClose={handleCloseModal} />
            <div className="w-full mt-18 md:w-3/5 mb-4 md:mb-0 md:mr-4 lg:ml-48">
                <aside className="text-center">
                    <MariaImage />
                    {!context.isSpeaking && context.isListening && (
                        <>
                            <Listening />
                            <p className="text-pink-200 text-xl font-semibold">Listening...</p>
                        </>
                    )}
                    <div className="flex justify-center">
                        <Microphone onClick={toggleMicrophone} isListening={context.isListening} />
                    </div>
                    <audio ref={audioRef} src={context.audioUrl} />
                </aside>
            </div>
            <div className="h-auto md:w-4/5 md:mr-12 lg:w-4/5 lg:mr-12 ">
                <Feedback />
            </div>
        </div>
    );
};

export default Maria;
