import * as React from "react";

import NoteItem from "@/components/Note/NoteItem";
import { useFetch } from "@/hooks/useFetch";
import { Plus } from "lucide-react";
import toast from "react-hot-toast";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

import PropTypes from "prop-types";

const NoteList = ({ archived }) => {
    const { t } = useTranslation();

    const {
        data: response,
        loading,
        error,
    } = useFetch(archived ? "/notes/archived" : "/notes");

    React.useEffect(() => {
        if (error) toast.error(error.message);
    }, [error, response]);

    return (
        <div className="flex flex-col w-full pt-10 text-gray-900 bg-gray-100 xl:h-screen dark:bg-gray-800 dark:text-gray-100">
            <div className="flex items-center justify-between px-6 mb-10">
                <h1 className="text-lg">
                    {archived ? t("notes.archived") : t("notes.all")}
                </h1>
                <div className="flex items-center space-x-4 text-gray-400 dark:text-gray-600">
                    <Link to="/create" title={t("notes.create")}>
                        <Plus size={20} />
                    </Link>
                </div>
            </div>

            <div className="flex flex-col">
                {loading &&
                    [...Array(5)].map((_, index) => (
                        <div
                            key={index}
                            className="flex items-end p-6 border-t border-gray-200 cursor-pointer dark:border-gray-700"
                        >
                            <div className="flex flex-col w-2/3 space-y-1">
                                <div className="w-2/3 h-5 bg-gray-200 rounded-md dark:bg-gray-700 animate-pulse"></div>
                                <div className="w-full h-5 bg-gray-200 rounded-md dark:bg-gray-700 animate-pulse"></div>
                            </div>

                            <div className="flex items-center justify-end w-1/3">
                                <div className="w-1/2 h-5 bg-gray-200 rounded-md dark:bg-gray-700 animate-pulse"></div>
                            </div>
                        </div>
                    ))}
            </div>

            <div className="flex flex-col">
                {!loading ? (
                    response.data.length > 0 ? (
                        response.data.map((note) => (
                            <NoteItem key={note.id} {...note} />
                        ))
                    ) : (
                        <div className="flex items-center justify-center w-full py-6 rounded-md">
                            <p className="text-gray-400">
                                {archived
                                    ? "No archived notes"
                                    : "No notes available"}
                            </p>
                        </div>
                    )
                ) : null}
            </div>
        </div>
    );
};

NoteList.propTypes = {
    archived: PropTypes.bool.isRequired,
};

NoteList.defaultProps = {
    archived: false,
};

export default NoteList;
