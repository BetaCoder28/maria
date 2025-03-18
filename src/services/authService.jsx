export const decodeToken = (token) => {
    if (!token) return null;
    try {
        const base64Url = token.split('.')[1]; // Extrae el payload
        const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
        return JSON.parse(atob(base64)); // Decodifica el token
    } catch (error) {
        console.error("Error decoding token:", error);
        return null;
    }
};

export const isTokenExpired = (token) => {
    const decoded = decodeToken(token);
    if (!decoded) return true;
    const now = Date.now() / 1000; // Convertir milisegundos a segundos
    return decoded.exp < now;
};

export const refreshToken = async () => {
    const refresh = localStorage.getItem("refresh_token");
    if (!refresh) {
        logoutUser();
        return null;
    }

    try {
        const response = await fetch("http://localhost:8000/api/token/refresh/", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ refresh }),
        });

        if (!response.ok) throw new Error("Failed to refresh token");

        const data = await response.json();
        localStorage.setItem("access_token", data.access); // Guardar nuevo access token
        return data.access;
    } catch (error) {
        console.error("Error refreshing token:", error);
        logoutUser();
    }
};

export const fetchWithAuth = async (url, options = {}) => {
    let accessToken = localStorage.getItem("access_token");

    if (isTokenExpired(accessToken)) {
        accessToken = await refreshToken();
        if (!accessToken) return; // Si no se pudo refrescar, forzar logout
    }

    return fetch(url, {
        ...options,
        headers: {
            ...options.headers,
            Authorization: `Bearer ${accessToken}`,
        },
    });
};

export const logoutUser = () => {
    localStorage.removeItem("access_token");
    localStorage.removeItem("refresh_token");
    window.location.href = "/login"; // Redirigir a login
};
