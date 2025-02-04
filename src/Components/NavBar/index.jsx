import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";

const NavBar = () => {
    const [isOpen, setIsOpen] = useState(false);
    let activeStyle = "text-[#F4D03F] underline underline-offset-4";
    const colorText = "text-white hover:text-[#F4D03F]";

    return (
        <nav className="bg-[#4A235A] p-6 rounded-xl w-4/5 mx-auto mt-6">
            {/* Desktop Navigation */}
            <div className="hidden md:flex justify-between px-34 space-x-16 text-2xl font-bold">
                <NavLink to="/lessons" className={({ isActive }) => isActive ? activeStyle : colorText}>Lesson</NavLink>
                <NavLink to="/maria" className={({ isActive }) => isActive ? activeStyle : colorText}>Maria</NavLink>
                <NavLink to="/translate" className={({ isActive }) => isActive ? activeStyle : colorText}>Translate</NavLink>
            </div>

            {/* Mobile Navigation */}
            <div className="md:hidden flex justify-between items-center">
                <button onClick={() => setIsOpen(!isOpen)} className="text-white">
                    {isOpen ? <X size={30} /> : <Menu size={30} />}
                </button>
            </div>

            {isOpen && (
                <div className="md:hidden flex flex-col items-center mt-4 space-y-4 text-xl font-bold bg-[#4A235A] p-4 rounded-lg">
                    <NavLink to="/lessons" className={({ isActive }) => isActive ? activeStyle : colorText} onClick={() => setIsOpen(false)}>Lesson</NavLink>
                    <NavLink to="/maria" className={({ isActive }) => isActive ? activeStyle : colorText} onClick={() => setIsOpen(false)}>Maria</NavLink>
                    <NavLink to="/translate" className={({ isActive }) => isActive ? activeStyle : colorText} onClick={() => setIsOpen(false)}>Translate</NavLink>
                </div>
            )}
        </nav>
    );
};

export default NavBar;