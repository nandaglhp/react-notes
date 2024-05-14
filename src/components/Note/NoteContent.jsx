import PropTypes from "prop-types";

import { formatDuration } from "@/libs/utils";
import { useTranslation } from "react-i18next";

const NoteContent = ({ title, body, createdAt }) => {
    const { t, i18n } = useTranslation();

    const getDuration = () => {
        return [
            t("created"),
            formatDuration(createdAt, i18n.language),
            t("ago"),
        ].join(" ");
    };

    return (
        <>
            <div className="flex flex-col mb-6 border-b border-gray-200 dark:border-gray-700">
                <h3 className="w-4/5 mb-6 text-3xl font-patua">{title}</h3>
                <p className="mb-3 text-justify break-all text-ellipsis">
                    {body}
                </p>
            </div>
            <span className="text-sm text-gray-400">{getDuration()}</span>
        </>
    );
};

NoteContent.propTypes = {
    title: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
    createdAt: PropTypes.string.isRequired,
};

export default NoteContent;
