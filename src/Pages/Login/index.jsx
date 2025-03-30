import { useContext } from "react";
import { useNavigate, Link, useLocation } from "react-router";
import { LanguageContext } from '../../locale/languageProvider';
import { translations } from '../../locale/translations';
import { LoginService } from "../../services/login";
import { MariaContext } from "../../Context";

const Login = () => {

    const context = useContext(MariaContext);
    const navigate = useNavigate();
    const location = useLocation();
    
    const { language } = useContext(LanguageContext);
    const t = translations[language];

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await LoginService(context.email, context.password);

            localStorage.setItem("access_token", response.access);
            localStorage.setItem("refresh_token", response.refresh);

            // Redirige a la ruta solicitada o a maria por defecto
            const redirectPath = location.state?.from?.pathname || '/maria';
            navigate(redirectPath, { replace: true });
        } catch (err) {
            context.setError(t.Login.errorMessage);
        }
    };

    return (
        <div className="min-h-screen bg-gradient-to-b from-[#1A1A1A] to-[#4A235A] flex items-center justify-center p-4">
            <div className="bg-[#4A235A] border-2 border-[#F4D03F] rounded-lg p-6 w-full max-w-md">
                <h2 className="text-3xl font-bold text-center mb-8 text-white">{t.Login.mainTitle}</h2>
                
                <form className="space-y-6" onSubmit={handleSubmit} >

                    {context.error && (
                        <div className="text-red-400 text-center mb-4">
                            {context.error}
                        </div>
                    )}

                    <div>
                        <label className="block text-white font-medium mb-2">{t.Login.email}</label>
                        <input 
                            type="email"
                            value={context.email}
                            onChange={(e) => context.setEmail(e.target.value)}
                            className="w-full px-4 py-2 bg-[#6C3483] border border-[#F4D03F] rounded-lg 
                                   focus:outline-none focus:ring-2 focus:ring-[#F4D03F] text-white"
                            placeholder={t.Login.placeholders.emailPlaceholder}
                            required
                        />
                    </div>

                    <div>
                        <label className="block text-white font-medium mb-2">{t.Login.password}</label>
                        <input 
                            type="password"
                            value={context.password}
                            onChange={(e) => context.setPassword(e.target.value)}
                            className="w-full px-4 py-2 bg-[#6C3483] border border-[#F4D03F] rounded-lg 
                                   focus:outline-none focus:ring-2 focus:ring-[#F4D03F] text-white"
                            placeholder={t.Login.placeholders.passwordPlaceholder}
                            required
                        />
                    </div>

                    <button 
                        type="submit"
                        className="w-full py-2 bg-[#F4D03F] hover:bg-[#F1C40F] text-white font-bold 
                        rounded-lg transition duration-300"
                    >
                        {t.Login.signButton}
                    </button>

                    {/* <div className="text-center mt-4">
                        <a href="#" className="text-[#F4D03F] hover:text-yellow-700 text-sm">
                            {t.Login.forgot}
                        </a>
                    </div> */}
                </form>

                <div className="mt-6 text-center text-white">
                    <p>{t.Login.dontAccount} {' '}
                    <Link to="/register" className="text-[#F4D03F] hover:text-yellow-600 font-medium">
                        {t.Login.signUp}
                    </Link>
                    </p>
                    <p>
                    <Link to="/" className="text-[#F4D03F] hover:text-yellow-600 font-medium">
                        {t.General.back} {' '}
                    </Link>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Login;
