import { useContext } from "react";
import { Link } from "react-router";

import {LanguageContext} from '../../locale/languageProvider';
import { translations } from '../../locale/translations';


const Login = () => {

        const {language} = useContext(LanguageContext);
        const t = translations[language];

    return (
        <div className="min-h-screen bg-gradient-to-b from-[#1A1A1A] to-[#4A235A] flex items-center justify-center p-4">
            <div className="bg-[#4A235A] border-2 border-[#F4D03F] rounded-lg p-6 w-full max-w-md">
                <h2 className="text-3xl font-bold text-center mb-8 text-white">{t.Login.mainTitle}</h2>
                
                <form className="space-y-6">
                    <div>
                        <label className="block text-white font-medium mb-2">{t.Login.email}</label>
                        <input 
                            type="email"
                            className="w-full px-4 py-2 bg-[#6C3483] border border-[#F4D03F] rounded-lg 
                                   focus:outline-none focus:ring-2 focus:ring-[#F4D03F] text-white"
                            placeholder={t.Login.placeholders.emailPlaceholder}
                        />
                    </div>

                    <div>
                        <label className="block text-white font-medium mb-2">{t.Login.password}</label>
                        <input 
                            type="password"
                            className="w-full px-4 py-2 bg-[#6C3483] border border-[#F4D03F] rounded-lg 
                                   focus:outline-none focus:ring-2 focus:ring-[#F4D03F] text-white"
                            placeholder={t.Login.placeholders.passwordPlaceholder}
                        />
                    </div>
                    <Link to='/maria' className="w-full">
                        <button 
                            type="submit"
                            className="w-full py-2 bg-[#F4D03F] hover:bg-[#F1C40F] text-white font-bold 
                            rounded-lg transition duration-300"
                            >
                            {t.Login.signButton}
                        </button>
                    </Link>

                    <div className="text-center mt-4">
                        <a href="#" className="text-[#F4D03F] hover:text-[#F1C40F] text-sm">
                            {t.Login.forgot}
                        </a>
                    </div>
                </form>

                <div className="mt-6 text-center text-white">
                    <p>{t.Login.dontAccount} {' '}
                        <a href="#" className="text-[#F4D03F] hover:text-[#F1C40F] font-medium">
                            {t.Login.signUp}
                        </a>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Login;