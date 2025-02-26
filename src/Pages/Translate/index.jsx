import {useContext } from "react";
import { MariaContext } from "../../Context";
import { translate } from "../../services/translator";


const Translator = () => {

    const context = useContext(MariaContext);
    
    const languagesToTranslate = `${context.sourceLang}|${context.targetLang}`;

    const clearText = () => {
        context.setInputText('');
        context.setTranslatedText('');
    };

    // TODO -> Función para mandar al endpoint a traducir el texto
    const translateText = async e => {

        //TODO opciones para traducir en diferentes idiomas
        const transText = await translate(context.inputText, languagesToTranslate);
        context.setTranslatedText(transText.responseData.translatedText); 

    };

    return (
        <section className="px-4 py-10 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-screen-xl">
                {/* Contenedor principal con títulos */}
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                    
                    {/* Sección de Input */}
                    <div className="flex flex-col">
                        <h2 className="text-xl md:text-2xl font-bold text-center mb-3">Insert Text</h2>
                        {/**Input */}
                        <div className="flex p-2 justify-center space-x-64 border-1 rounded-md border-white w-full bg-[#4A235A]">
                            <button className={`hover:text-[#F4D03F]" ${context.sourceLang === 'en' ? 'text-[#F4D03F]' : '' }`} onClick={() => {context.setSourceLang('en')}}>English</button>
                            <button className={`hover:text-[#F4D03F]" ${context.sourceLang === 'es' ? 'text-[#F4D03F]' : '' }`} onClick={() => {context.setSourceLang('es')}}>Spanish</button>
                        </div>
                        <br></br>
                        <div className="rounded-lg border border-gray-200 shadow-xs focus-within:border-white focus-within:ring-1 focus-within:ring-white">
                            <textarea
                                id="OrderNotes"
                                className="w-full min-h-[200px] md:min-h-[320px] h-auto bg-[#4A235A] p-4 resize-none border-none align-top text-white placeholder-gray-300 focus:ring-0 sm:text-sm"
                                rows="4"
                                placeholder="Enter any text..."
                                value={context.inputText}
                                onChange={(e) => context.setInputText(e.target.value)}
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
                        {/**OUTPUT */}
                        <div className="flex p-2 justify-center space-x-64 border-1 rounded-md border-white w-full bg-[#4A235A]">
                            <button className={`hover:text-[#F4D03F]" ${context.targetLang === 'en' ? 'text-[#F4D03F]' : '' }`} onClick={() => {context.setTargetLang('en')}}>English</button>
                            <button className={`hover:text-[#F4D03F]" ${context.targetLang === 'es' ? 'text-[#F4D03F]' : '' }`} onClick={() => {context.setTargetLang('es')}}>Spanish</button>
                        </div>
                        <br></br>
                        <div className="overflow-hidden p-4 bg-[#4A235A] rounded-lg border border-gray-200 shadow-xs focus-within:border-white focus-within:ring-1 focus-within:ring-white">
                            <textarea
                                id="TranslatedNotes"
                                className="w-full min-h-[200px] md:min-h-[320px] h-auto resize-none border-none align-top text-white placeholder-gray-300 focus:ring-0 sm:text-sm"
                                rows="4"
                                placeholder="Translation will appear here..."
                                value={context.translatedText}
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
