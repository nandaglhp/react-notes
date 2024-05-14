import { LogOut, UserCircle } from "lucide-react";
import { useLocation, useNavigate } from "react-router-dom";

import { AxiosError } from "@/libs/axios";
import Button from "@/components/Form/Button";
import SidebarGroup from "@/components/Sidebar/SidebarGroup";
import SidebarItem from "@/components/Sidebar/SidebarItem";
import { links } from "@/libs/constants";
import toast from "react-hot-toast";
import { useTranslation } from "react-i18next";
import { useAuth } from "@/hooks/useAuth";
import { useTheme } from "@/hooks/useTheme";

export default function Sidebar() {
    const { t } = useTranslation();
    const navigate = useNavigate();
    const location = useLocation();

    const { user, signout } = useAuth();
    const { ThemeIcon, toggleTheme } = useTheme();

    const handleLogout = async () => {
        try {
            await signout();
            navigate("/auth/login", {
                replace: true,
                state: { from: location.pathname },
            });
            toast.success(t("auth.signout.success"));
        } catch (error) {
            if (error instanceof AxiosError)
                toast.error(error.response.data?.message);
            else toast.error(error.message);
        }
    };

    return (
        <div className="flex flex-col justify-between px-6 py-10 text-white xl:h-screen pattern dark:pattern-dark">
            <div className="mb-10">
                <div className="flex justify-center mb-10">
                    <span className="text-3xl font-patua">
                        Notes<span className="text-secondary">App</span>
                    </span>
                </div>

                <nav className="flex flex-col space-y-4">
                    {links.map((link) => {
                        return link.childrens ? (
                            <SidebarGroup {...link} key={link.label} />
                        ) : (
                            <SidebarItem {...link} key={link.label} />
                        );
                    })}
                </nav>
            </div>

            <div className="flex-col space-y-4">
                <div className="flex items-center px-4 py-2 space-x-4 rounded-lg bg-gray-50 bg-opacity-10">
                    <UserCircle size={28} />
                    <div className="flex flex-col justify-center">
                        <span className="font-semibold">{user.name}</span>
                        <span className="text-sm opacity-60">{user.email}</span>
                    </div>
                </div>

                <div className="flex space-x-4">
                    <Button
                        type="button"
                        onClick={handleLogout}
                        className="flex items-center justify-center w-full bg-white dark:bg-white text-primary dark:text-gray-900"
                    >
                        <LogOut size={20} className="mr-2" />
                        {t("auth.signout.label")}
                    </Button>
                    <Button
                        type="button"
                        onClick={toggleTheme}
                        className="text-white bg-white dark:bg-white bg-opacity-10 dark:bg-opacity-10 aspect-square"
                    >
                        <ThemeIcon size={20} />
                        <span className="sr-only">{t("theme.toggle")}</span>
                    </Button>
                </div>
            </div>
        </div>
    );
}
