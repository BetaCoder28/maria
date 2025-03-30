import { Navigate, useLocation } from "react-router-dom"; // Añade useLocation
import { useAuth } from "../../hooks/useAuth";

const ProtectedRoute = ({ children }) => {
    const { isAuthenticated, isLoading } = useAuth();
    const location = useLocation(); // Obtiene la ubicación actual

    if (isLoading) return <div>Loading...</div>;

    return isAuthenticated ? (
        children
    ) : (
        <Navigate 
            to="/login" 
            state={{ from: location }} // Envía la ubicación protegida
            replace 
        />
    );
};

export default ProtectedRoute;