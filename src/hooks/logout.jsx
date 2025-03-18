import { useNavigate, useLocation } from "react-router";

const useLogout = () => {
    const navigate = useNavigate();
    const location = useLocation(); 

    return () => {
        localStorage.removeItem("access_token");
        localStorage.removeItem("refresh_token");

        
        if (location.pathname !== "/login") {
            navigate("/login", { replace: true });
        }
    };
};

export default useLogout;
