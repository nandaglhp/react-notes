import * as React from "react";

import { Archive, ArchiveX, Trash2 } from "lucide-react";
import { AxiosError, axios } from "@/libs/axios";
import { useNavigate, useParams } from "react-router-dom";

import NoteContent from "@/components/Note/NoteContent";
import NoteSkeleton from "@/components/Note/NoteSkeleton";
import toast from "react-hot-toast";
import { useFetch } from "@/hooks/useFetch";
import { useTranslation } from "react-i18next";

const SingleNote = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const { t } = useTranslation();

    const { data: response, error, loading } = useFetch(`/notes/${id}`);
    const [archived, setArchived] = React.useState(false);
    const Icon = archived ? Archive : ArchiveX;

    React.useEffect(() => {
        if (error) toast.error(error.message);
        else if (response) setArchived(response.data.archived);
    }, [error, response]);

    const changeStatus = async (url, state) => {
        try {
            const key = state ? "archived" : "unarchived";

            await axios.post(url);
            setArchived(state);
            toast.success(t(`notes.success.${key}`));
            navigate(state ? `/archived/${id}` : `/notes/${id}`, {
                replace: true,
            });
        } catch (error) {
            if (error instanceof AxiosError)
                toast.error(error.response.data.message);
            else toast.error(error.message);
        }
    };

    const archiveNote = () => changeStatus(`/notes/${id}/archive`, true);
    const unarchiveNote = () => changeStatus(`/notes/${id}/unarchive`, false);

    const deleteNote = async () => {
        try {
            await axios.delete(`/notes/${id}`);
            toast.success(t("notes.success.deleted"));
            navigate("/notes", { replace: true });
            window.location.reload();
        } catch (error) {
            if (error instanceof AxiosError)
                toast.error(error.response.data.message);
            else toast.error(error.message);
        }
    };

    return (
        <div className="w-full h-screen max-w-4xl px-6 mx-auto">
            <div className="flex items-center justify-between py-10">
                <h1 className="text-lg">{t("notes.content")}</h1>
                <div className="flex items-center space-x-4">
                    <Icon
                        size={20}
                        onClick={archived ? unarchiveNote : archiveNote}
                        className="cursor-pointer dark:text-white text-primary me-2"
                    />
                    <Trash2
                        size={20}
                        onClick={deleteNote}
                        className="text-red-500 cursor-pointer dark:text-white"
                    />
                </div>
            </div>

            {loading ? <NoteSkeleton /> : <NoteContent {...response.data} />}
        </div>
    );
};

export default SingleNote;
