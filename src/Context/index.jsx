import { createContext, useState } from "react";

// se crea el contexto
export const MariaContext = createContext();


export const MariaProvider = ({children}) => {

    const [isListening, setIsListening] = useState(false);
    const [isSpeaking, setIsSpeaking] = useState(false);
    const [transcript, setTranscript] = useState('');
    const [recognition, setRecognition] = useState(null);

    //Del contexto crear un proveedor que va a encapsular todos los componentes de app
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
        }}>
            {children}
        </MariaContext.Provider>
    )
}