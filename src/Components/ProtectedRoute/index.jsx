import { Navigate } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";

const ProtectedRoute = ({ children }) => {
    const { isAuthenticated, isLoading } = useAuth();

    if (isLoading) return <div>Loading...</div>; // O un Spinner

    return isAuthenticated ? children : <Navigate to="/login" replace />;
};

export default ProtectedRoute;
