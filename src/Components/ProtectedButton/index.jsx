import { useNavigate } from "react-router-dom";

const ProtectedButton = ({ to, children }) => {
    const navigate = useNavigate();

    const handleClick = () => {
        const token = localStorage.getItem("access_token");
        if (token) {
            navigate(to);
        } else {
            navigate("/login");
        }
    };

    return (
        <button 
            onClick={handleClick}
            className="w-full px-4 py-2 bg-[#F4D03F] text-white font-bold rounded transition hover:bg-yellow-600 text-sm md:text-base"
        >
            {children}
        </button>
    );
};

export default ProtectedButton;
