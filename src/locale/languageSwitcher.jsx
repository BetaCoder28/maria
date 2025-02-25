import React, { useContext } from 'react';
import { LanguageContext } from './languageProvider';


const LanguageSwitcher = () => {
    const { language, setLanguage } = useContext(LanguageContext);

    const handleChangeLanguage = (e) => {
        setLanguage(e.target.value);
    };

    return (
        <select 
            value={language} 
            onChange={handleChangeLanguage}
            className="bg-[#4A235A] text-white rounded-lg px-4 py-2 focus:outline-none focus:border-[#F4D03F] transition-colors"
        >
            <option value="en">English</option>
            <option value="es">Spanish</option>
        </select>
    );
};

export default LanguageSwitcher;