const Translator = () => {

    return(
            <section className="m-20">
                <div class="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 lg:px-8">
                    <div className="flex flex-row justify-between mb-8">
                        <h2 className="text-2xl font-bold ml-54">Insert Text</h2>
                        <h2 className="text-2xl font-bold mr-54">Translated Text</h2>
                    </div>

                    <div class="grid grid-cols-1 gap-4 md:grid-cols-2 md:items-center md:gap-8">
                    
                        <div>
                            <div
                                class=" rounded-lg border border-gray-200 shadow-xs focus-within:border-white focus-within:ring-1 focus-within:ring-white"
                            >
                                <textarea
                                id="OrderNotes"
                                class="w-full min-h-80 h-auto bg-[#4A235A] p-8 resize-none border-none align-top focus:ring-0 sm:text-sm"
                                rows="4"
                                placeholder="Enter any text..."
                                ></textarea>

                                <div class="flex items-center justify-end gap-2 bg-[#4A235A] p-3">
                                <button
                                    type="button"
                                    class="rounded-sm bg-gray-200 px-3 py-1.5 text-sm font-medium text-gray-700 hover:text-gray-600"
                                >
                                    Clear
                                </button>

                                <button
                                    type="button"
                                    class="rounded-sm bg-indigo-600 px-3 py-1.5 text-sm font-medium text-white hover:bg-indigo-700"
                                >
                                    Add
                                </button>
                                </div>
                            </div>
                        </div>
                    {/* Translated part */}
                        <div>
                            <div
                                class="overflow-hidden p-8 bg-[#4A235A] rounded-lg border border-gray-200 shadow-xs focus-within:border-white focus-within:ring-1 focus-within:ring-white"
                            >
                                    <textarea
                                    id="OrderNotes"
                                    class="w-full min-h-78 h-auto resize-none border-none align-top focus:ring-0 sm:text-sm"
                                    rows="4"
                                    ></textarea>
                                </div>
                            </div>
                        </div>
                    


                </div>
            </section>

    );

}


export default Translator;