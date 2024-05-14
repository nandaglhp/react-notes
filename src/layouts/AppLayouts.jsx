import { Outlet } from "react-router-dom";
import Sidebar from "@/components/Sidebar/Sidebar";

const AppLayouts = () => {
    return (
        <div className="flex flex-col w-full xl:flex-row">
            <aside className="w-full border-r border-gray-200 xl:w-80 shrink-0 dark:border-gray-700">
                <Sidebar />
            </aside>

            <div className="flex-1 w-full px-10">
                <Outlet />
            </div>
        </div>
    );
};

export default AppLayouts;
