import { Outlet } from "react-router-dom";

import NoteList from "@/components/Note/NoteList";
import Sidebar from "@/components/Sidebar/Sidebar";

import PropTypes from "prop-types";

const NoteLayout = ({ archived }) => {
    return (
        <div className="flex flex-col w-full xl:flex-row">
            <aside className="w-full border-r border-gray-200 xl:w-80 shrink-0 dark:border-gray-700">
                <Sidebar />
            </aside>

            <div className="w-full border-r border-gray-200 dark:border-gray-700 xl:w-96 shrink-0">
                <NoteList archived={archived} />
            </div>

            <div className="flex-1 w-full px-10">
                <Outlet />
            </div>
        </div>
    );
};

NoteLayout.propTypes = {
    archived: PropTypes.bool,
};

NoteLayout.defaultProps = {
    archived: false,
};

export default NoteLayout;
