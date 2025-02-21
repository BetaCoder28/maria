import {useState } from "react";


const Translator = () => {

    const [inputText, setInputText] = useState('');
    const [translatedText, setTranslatedText] = useState('');

    const clearText = () => {
        setInputText('');
        setTranslatedText('');
    };

    // TODO -> Función para mandar al endpoint a traducir el texto
    const translateText = () => {
        setTranslatedText(inputText); 
    };

    return (
        <section className="px-4 py-10 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-screen-xl">
                {/* Contenedor principal con títulos */}
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                    
                    {/* Sección de Input */}
                    <div className="flex flex-col">
                        <h2 className="text-xl md:text-2xl font-bold text-center mb-3">Insert Text</h2>
                        <div className="rounded-lg border border-gray-200 shadow-xs focus-within:border-white focus-within:ring-1 focus-within:ring-white">
                            <textarea
                                id="OrderNotes"
                                className="w-full min-h-[200px] md:min-h-[320px] h-auto bg-[#4A235A] p-4 resize-none border-none align-top text-white placeholder-gray-300 focus:ring-0 sm:text-sm"
                                rows="4"
                                placeholder="Enter any text..."
                                value={inputText}
                                onChange={(e) => setInputText(e.target.value)}
                            ></textarea>
                        </div>
                        <div className="flex flex-col sm:flex-row items-center justify-end gap-2 bg-[#4A235A] p-3">
                            <button
                                type="button"
                                className="w-full sm:w-auto rounded-sm bg-gray-200 px-4 py-2 text-sm font-medium text-gray-700 hover:text-white hover:bg-black"
                                onClick={clearText}
                            >
                                Clear
                            </button>
                            <button
                                type="button"
                                className="w-full sm:w-auto rounded-sm bg-[#F4D03F] px-4 py-2 text-sm font-medium text-white hover:bg-yellow-700"
                                onClick={translateText}
                            >
                                Translate
                            </button>
                        </div>
                    </div>

                    {/* Sección de Output */}
                    <div className="flex flex-col">
                        <h2 className="text-xl md:text-2xl font-bold text-center mb-3">Translated Text</h2>
                        <div className="overflow-hidden p-4 bg-[#4A235A] rounded-lg border border-gray-200 shadow-xs focus-within:border-white focus-within:ring-1 focus-within:ring-white">
                            <textarea
                                id="TranslatedNotes"
                                className="w-full min-h-[200px] md:min-h-[320px] h-auto resize-none border-none align-top text-white placeholder-gray-300 focus:ring-0 sm:text-sm"
                                rows="4"
                                placeholder="Translation will appear here..."
                                value={translatedText}
                                readOnly
                            ></textarea>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Translator;
