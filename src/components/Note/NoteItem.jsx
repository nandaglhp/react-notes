import { Link, useLocation } from "react-router-dom";

import { cn } from "@/libs/utils";
import { formatDuration } from "@/libs/utils";
import { useTranslation } from "react-i18next";
import PropTypes from "prop-types";

const NoteItem = ({ id, title, body, createdAt, archived }) => {
    const { t, i18n } = useTranslation();

    const location = useLocation();
    const pathname = location.pathname;

    const url = archived ? `/archived/${id}` : `/notes/${id}`;
    const active = archived
        ? pathname === `/archived/${id}`
        : pathname === `/notes/${id}`;

    return (
        <Link to={url} title={title}>
            <div
                className={cn(
                    "p-6 flex hover:bg-white border-t border-gray-200 cursor-pointer items-end dark:border-gray-700 dark:hover:bg-gray-900",
                    active && "bg-white dark:bg-gray-900"
                )}
            >
                <div className="w-2/3">
                    <h3 className="line-clamp-1">{title}</h3>
                    <p className="text-gray-500 line-clamp-1">{body}</p>
                </div>

                <div className="flex items-center justify-end w-1/3">
                    <span className="text-sm text-gray-400">
                        {formatDuration(createdAt, i18n.language)} {t("ago")}
                    </span>
                </div>
            </div>
        </Link>
    );
};

NoteItem.propTypes = {
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
    createdAt: PropTypes.string.isRequired,
    archived: PropTypes.bool.isRequired,
};

export default NoteItem;
