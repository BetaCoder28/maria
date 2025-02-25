import { useContext } from 'react';
//Importaciones para multilenguaje
import { LanguageContext } from '../../locale/languageProvider';
import { translations } from '../../locale/translations';


const Footer = () => {

    const {language} = useContext(LanguageContext);
    const t = translations[language];

    return(
        <footer className="bg-[#2E0F3A] text-gray-300">
            <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
            <div className="lg:flex lg:items-center lg:justify-between">
                <div className="flex justify-center lg:order-2 lg:justify-start">
                {/* Botón para subir */}
                <a
                    href="#top"
                    className="ml-6 inline-flex items-center rounded-full p-2 text-[#F4D03F] transition hover:bg-[#4A235A]"
                >
                    <span className="sr-only">Back to top</span>
                    <svg 
                    className="h-6 w-6" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                    >
                    <path 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        strokeWidth={2} 
                        d="M5 15l7-7 7 7" 
                    />
                    </svg>
                </a>
                </div>
                
                {/* Logo y redes */}
                <div className="mt-8 lg:order-1 lg:mt-0 lg:w-1/3">
                <div className="flex justify-center space-x-6 lg:justify-start">
                    <svg 
                    className="h-8 w-8 text-[#F4D03F]" 
                    viewBox="0 0 24 24" 
                    fill="currentColor"
                    >
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/>
                    <path d="M12 17l-5-5h3V8h4v4h3l-5 5z"/>
                    </svg>
                    
                    <span className="text-2xl font-bold text-[#F4D03F]">HelloMaria</span>
                </div>
                
                {/* Redes sociales */}
                <div className="mt-6 flex justify-center space-x-6 lg:justify-start">
                    <a 
                    href="https://github.com/SemiJunior-David-Bautista-Arroyo" 
                    className="text-gray-400 hover:text-[#F4D03F]"
                    >
                    <span className="sr-only">GitHub</span>
                    <svg 
                        className="h-6 w-6" 
                        fill="currentColor" 
                        viewBox="0 0 24 24"
                    >
                        <path
                        fillRule="evenodd"
                        d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                        clipRule="evenodd"
                        />
                    </svg>
                    </a>

                    <a 
                    href="https://www.linkedin.com/in/david-bautista-arroyo-513123305/" 
                    className="text-gray-400 hover:text-[#F4D03F]"
                    >
                    <span className="sr-only">LinkedIn</span>
                    <svg 
                        className="h-6 w-6" 
                        fill="currentColor" 
                        viewBox="0 0 24 24"
                    >
                        <path
                        d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"
                        />
                    </svg>
                    </a>

                    <a 
                    href="mailto:davidbaar07@gmail.com" 
                    className="text-gray-400 hover:text-[#F4D03F]"
                    >
                    <span className="sr-only">Email</span>
                    <svg 
                        className="h-6 w-6" 
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                    >
                        <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                        />
                    </svg>
                    </a>
                </div>
                </div>

                {/* Enlaces */}
                <div className="mt-8 grid grid-cols-2 gap-8 md:grid-cols-3 lg:mt-0 lg:w-2/3">

                <div className="col-span-1">
                    <h3 className="text-sm font-semibold uppercase tracking-wider text-[#F4D03F]">
                    {t.Home.Footer.legal.title}
                    </h3>
                    <ul className="mt-4 space-y-2">
                    <li>
                        <a href="#" className="text-base hover:text-[#F4D03F] transition-colors">
                        {t.Home.Footer.legal.privacy}
                        </a>
                    </li>
                    <li>
                        <a href="#" className="text-base hover:text-[#F4D03F] transition-colors">
                        {t.Home.Footer.legal.terms}
                        </a>
                    </li>
                    </ul>
                </div>

                <div className="col-span-1">
                    <h3 className="text-sm font-semibold uppercase tracking-wider text-[#F4D03F]">
                    {t.Home.Footer.contact.title}
                    </h3>
                    <ul className="mt-4 space-y-2">
                    <li>
                        <span className="text-base">David Bautista Arroyo</span>
                    </li>
                    <li>
                        <span className="text-base">+52 221-987-5281</span>
                    </li>
                    <li>
                        <a 
                        href="mailto:davidbaar07@gmail.com" 
                        className="hover:text-[#F4D03F] transition-colors"
                        >
                        davidbaar07@gmail.com
                        </a>
                    </li>
                    </ul>
                </div>
                </div>
            </div>

            {/* Copyright */}
            <div className="mt-12 border-t border-[#4A235A] pt-8">
                <p className="text-center text-sm text-gray-400">
                {t.Home.Footer.copyright}
                </p>
            </div>
            </div>
            </footer>
    );

}


export default Footer;