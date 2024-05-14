import { AxiosError, axios } from "@/libs/axios";

import Button from "@/components/Form/Button";
import FormError from "@/components/Form/Error";
import Input from "@/components/Form/Input";
import Label from "@/components/Form/Label";
import Textarea from "@/components/Form/Textarea";
import toast from "react-hot-toast";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

const FormNote = () => {
    const navigate = useNavigate();
    const { t } = useTranslation();

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        mode: "onBlur",
        defaultValues: {
            title: "",
            body: "",
        },
    });

    const onSubmit = async (data) => {
        try {
            const { data: response } = await axios.post("/notes", data);
            toast.success(t("notes.success.created"));
            navigate(`/notes/${response.data.id}`, { replace: true });
            window.location.reload();
        } catch (error) {
            if (error instanceof AxiosError)
                toast.error(error.response.data.message);
            else toast.error(error.message);
        }
    };

    return (
        <div className="w-full h-screen max-w-3xl mx-auto">
            <div className="pt-10">
                <div className="flex items-center justify-between mb-10">
                    <h1 className="text-lg">{t("notes.create")}</h1>
                </div>
            </div>

            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="flex flex-col w-full mb-4 space-y-1">
                    <Label htmlFor="title">{t("fields.title.label")}</Label>
                    <Input
                        id="title"
                        type="text"
                        placeholder={t("fields.title.placeholder")}
                        {...register("title", {
                            required: t("fields.title.error"),
                        })}
                    />
                    <FormError>{errors.title?.message}</FormError>
                </div>

                <div className="flex flex-col w-full mb-6 space-y-1">
                    <Label htmlFor="body">{t("fields.body.label")}</Label>
                    <Textarea
                        id="body"
                        rows={5}
                        placeholder={t("fields.body.placeholder")}
                        {...register("body", {
                            required: t("fields.body.error"),
                        })}
                    />
                    <FormError>{errors.body?.message}</FormError>
                </div>

                <p className="mb-6 text-sm text-gray-500">
                    {t("notes.caution")}
                </p>

                <div className="flex space-x-4">
                    <Button
                        type="submit"
                        className="dark:bg-white dark:text-gray-800"
                    >
                        {t("notes.submit")}
                    </Button>
                    <Button
                        type="reset"
                        className="text-gray-800 bg-gray-200 dark:bg-gray-800 dark:text-white"
                    >
                        {t("notes.reset")}
                    </Button>
                </div>
            </form>
        </div>
    );
};

export default FormNote;
