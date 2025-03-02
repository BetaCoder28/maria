import { createContext, useState } from "react";

// se crea el contexto
export const MariaContext = createContext();


export const MariaProvider = ({children}) => {

    const [isListening, setIsListening] = useState(false);
    const [isSpeaking, setIsSpeaking] = useState(false);
    const [transcript, setTranscript] = useState('');
    const [recognition, setRecognition] = useState(null);
    const [audioUrl, setAudioUrl] = useState(null);

    //estados del traductor
    const [inputText, setInputText] = useState('');
    const [translatedText, setTranslatedText] = useState('');

    //estados de los idiomas seleccionados
    const [sourceLang, setSourceLang] = useState('en');
    const [targetLang, setTargetLang] = useState('es');

    //estados del feedback
    const [isFeedback, setIsFeedback] = useState('Feedback should appears here when you finish the conversation');

    // Proveedor que va a encapsular todos los componentes de app
    // para proveerlos de información
    return(
        <MariaContext.Provider value={{
            // objeto de valores que va a proveer
            isListening,
            setIsListening,
            transcript,
            setTranscript,
            recognition,
            setRecognition,
            isSpeaking,
            setIsSpeaking,
            audioUrl,
            setAudioUrl,
            inputText,
            setInputText,
            translatedText,
            setTranslatedText,
            sourceLang,
            setSourceLang,
            targetLang,
            setTargetLang,
            isFeedback,
            setIsFeedback,
        }}>
            {children}
        </MariaContext.Provider>
    )
}