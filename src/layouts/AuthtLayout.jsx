import * as React from "react";

import { Outlet, useLocation, useNavigate } from "react-router-dom";

import LanguageOptions from "@/components/LanguageOptions";
import { useAuth } from "@/hooks/useAuth";

const AuthLayout = () => {
    const { user } = useAuth();

    const navigate = useNavigate();
    const location = useLocation();

    React.useEffect(() => {
        if (user) {
            navigate("/", {
                replace: true,
                state: { from: location.pathname },
            });
        }
    }, [user, navigate, location.pathname]);

    return (
        <main className="grid justify-center lg:grid-cols-2">
            <div className="relative w-full h-screen">
                <div className="flex items-center h-full mx-auto max-w-96">
                    <Outlet />
                </div>
                <div className="absolute w-full bottom-4">
                    <div className="w-full mx-auto max-w-96">
                        <LanguageOptions />
                    </div>
                </div>
            </div>
            <div className="relative hidden w-full h-screen pattern lg:block">
                <p className="absolute w-full text-center text-white text-opacity-50 bottom-4">
                    &copy; 2024 All rights reserved
                </p>
            </div>
        </main>
    );
};

export default AuthLayout;
