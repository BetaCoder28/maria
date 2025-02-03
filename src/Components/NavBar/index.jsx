import { NavLink } from "react-router-dom";

const NavBar = () => {
    let activeStyle = 'text-orange-500 underline underline-offset-4';
    const colorText = 'text-white hover:text-orange-500';

    return (
        <nav className="flex h-20 w-4/5 mt-6 mx-auto justify-center  bg-[#003366] rounded-xl p-6">
            <ul className="flex space-x-68 text-2xl font-bold">
                {/* Lessons */}
                <li>
                    <NavLink
                        to="/lessons"
                        className={({ isActive }) =>
                            isActive ? activeStyle : colorText
                        }
                    >
                        Lesson
                    </NavLink>
                </li>

                {/* Maria */}
                <li>
                    <NavLink
                        to="/maria"
                        className={({ isActive }) =>
                            isActive ? activeStyle : colorText
                        }
                    >
                        Maria
                    </NavLink>
                </li>

                {/* Translate */}
                <li>
                    <NavLink
                        to="/translate"
                        className={({ isActive }) =>
                            isActive ? activeStyle : colorText
                        }
                    >
                        Translate
                    </NavLink>
                </li>
            </ul>
        </nav>
    );
};

export default NavBar;
