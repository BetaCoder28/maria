import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { LanguageContext } from '../../locale/languageProvider';
import { translations } from '../../locale/translations';
import { RegisterService } from "../../services/register";
import { MariaContext } from "../../Context";

const Register = () => {
    const context = useContext(MariaContext);
    const navigate = useNavigate();
    
    const { language } = useContext(LanguageContext);
    const t = translations[language];

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            if (context.password !== context.confirmPassword) {
                context.setError(t.Register.passwordMismatch);
                return;
            }
            
            const response = await RegisterService(
                context.email,
                context.name,
                context.lastname,
                context.password,
                context.age
            );

            console.log('Usuario registrado:', response);
            navigate('/login');
        } catch (err) {
            context.setError(t.Register.errorMessage);
        }
    };

    return (
        <div className="min-h-screen bg-gradient-to-b from-[#1A1A1A] to-[#4A235A] flex items-center justify-center p-4">
            <div className="bg-[#4A235A] border-2 border-[#F4D03F] rounded-lg p-6 w-full max-w-md">
                <h2 className="text-3xl font-bold text-center mb-8 text-white">{t.Register.mainTitle}</h2>
                
                <form className="space-y-6" onSubmit={handleSubmit}>
                    {context.error && (
                        <div className="text-red-400 text-center mb-4">
                            {context.error}
                        </div>
                    )}

                    <div>
                        <label className="block text-white font-medium mb-2">{t.Register.name}</label>
                        <input 
                            type="text"
                            value={context.name}
                            onChange={(e) => context.setName(e.target.value)}
                            className="w-full px-4 py-2 bg-[#6C3483] border border-[#F4D03F] rounded-lg 
                                   focus:outline-none focus:ring-2 focus:ring-[#F4D03F] text-white"
                            placeholder={t.Register.placeholders.namePlaceholder}
                            required
                        />
                    </div>

                    <div>
                        <label className="block text-white font-medium mb-2">{t.Register.lastname}</label>
                        <input 
                            type="text"
                            value={context.lastname}
                            onChange={(e) => context.setLastname(e.target.value)}
                            className="w-full px-4 py-2 bg-[#6C3483] border border-[#F4D03F] rounded-lg 
                                   focus:outline-none focus:ring-2 focus:ring-[#F4D03F] text-white"
                            placeholder={t.Register.placeholders.lastnamePlaceholder}
                            required
                        />
                    </div>

                    <div>
                        <label className="block text-white font-medium mb-2">{t.Register.age}</label>
                        <input 
                            type="number"
                            value={context.age}
                            onChange={(e) => context.setAge(e.target.value)}
                            className="w-full px-4 py-2 bg-[#6C3483] border border-[#F4D03F] rounded-lg 
                                   focus:outline-none focus:ring-2 focus:ring-[#F4D03F] text-white"
                            placeholder={t.Register.placeholders.agePlaceholder}
                            required
                            min="1"
                        />
                    </div>

                    <div>
                        <label className="block text-white font-medium mb-2">{t.Register.email}</label>
                        <input 
                            type="email"
                            value={context.email}
                            onChange={(e) => context.setEmail(e.target.value)}
                            className="w-full px-4 py-2 bg-[#6C3483] border border-[#F4D03F] rounded-lg 
                                   focus:outline-none focus:ring-2 focus:ring-[#F4D03F] text-white"
                            placeholder={t.Register.placeholders.emailPlaceholder}
                            required
                        />
                    </div>

                    <div>
                        <label className="block text-white font-medium mb-2">{t.Register.password}</label>
                        <input 
                            type="password"
                            value={context.password}
                            onChange={(e) => context.setPassword(e.target.value)}
                            className="w-full px-4 py-2 bg-[#6C3483] border border-[#F4D03F] rounded-lg 
                                   focus:outline-none focus:ring-2 focus:ring-[#F4D03F] text-white"
                            placeholder={t.Register.placeholders.passwordPlaceholder}
                            required
                        />
                    </div>

                    <div>
                        <label className="block text-white font-medium mb-2">{t.Register.confirmPassword}</label>
                        <input 
                            type="password"
                            value={context.confirmPassword}
                            onChange={(e) => context.setConfirmPassword(e.target.value)}
                            className="w-full px-4 py-2 bg-[#6C3483] border border-[#F4D03F] rounded-lg 
                                   focus:outline-none focus:ring-2 focus:ring-[#F4D03F] text-white"
                            placeholder={t.Register.placeholders.confirmPasswordPlaceholder}
                            required
                        />
                    </div>

                    <button 
                        type="submit"
                        className="w-full py-2 bg-[#F4D03F] hover:bg-yellow-600 text-white font-bold 
                        rounded-lg transition duration-300"
                    >
                        {t.Register.signUpButton}
                    </button>
                </form>

                <div className="mt-6 text-center text-white space-y-2">
                    <p>
                        {t.Register.existingAccount} {' '}
                        <Link to="/login" className="text-[#F4D03F] hover:text-yellow-600 font-medium">
                            {t.Register.signIn}
                        </Link>
                    </p>
                    <p>
                        <Link to="/" className="text-[#F4D03F] hover:text-yellow-600 font-medium">
                            {t.General.back}
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Register;