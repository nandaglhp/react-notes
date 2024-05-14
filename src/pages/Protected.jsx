import { Navigate, Outlet, useLocation } from "react-router-dom";

import { useAuth } from "@/hooks/useAuth";

const Protected = () => {
    const { user } = useAuth();
    const location = useLocation();

    return user ? (
        <Outlet />
    ) : (
        <Navigate to="/auth/login" state={{ from: location.pathname }} />
    );
};

export default Protected;
