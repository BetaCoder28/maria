import { useEffect, useState } from "react";
import { isTokenExpired, refreshToken, logoutUser } from "../services/authService";

export const useAuth = () => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    useEffect(() => {
        const checkAuth = async () => {
            let accessToken = localStorage.getItem("access_token");

            if (!accessToken || isTokenExpired(accessToken)) {
                accessToken = await refreshToken();
                if (!accessToken) {
                    logoutUser();
                    setIsAuthenticated(false);
                    return;
                }
            }

            setIsAuthenticated(true);
        };

        checkAuth();
    }, []);

    return isAuthenticated;
};
