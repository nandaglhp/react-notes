import { Outlet } from "react-router-dom";

import NoteList from "@/components/Note/NoteList";
import Sidebar from "@/components/Sidebar/Sidebar";
import PropTypes from "prop-types";

const NoteLayout = ({ archived }) => {
    return (
        <div className="flex w-full">
            <aside className="border-r border-gray-200 w-80 shrink-0">
                <Sidebar />
            </aside>
            <div className="border-r border-gray-200 w-96 shrink-0">
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

export default NoteLayout;
