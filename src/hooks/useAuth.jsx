import { useEffect, useState } from "react";
import { isTokenExpired, refreshToken } from "../services/authService";
import useLogout from "./logout";

export const useAuth = () => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    const logout = useLogout(); // Hook de logout

    useEffect(() => {
        const checkAuth = async () => {
            let accessToken = localStorage.getItem("access_token");

            if (!accessToken || isTokenExpired(accessToken)) {
                accessToken = await refreshToken(logout);
                if (!accessToken) {
                    setIsAuthenticated(false);
                    return;
                }
            }

            setIsAuthenticated(true);
        };

        checkAuth().finally(() => setIsLoading(false));
    }, [logout]);

    return { isAuthenticated, isLoading };
};
