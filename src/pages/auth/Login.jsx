import { useLocation, useNavigate } from "react-router-dom";

import { AxiosError } from "axios";
import Button from "@/components/Form/Button";
import FormError from "@/components/Form/Error";
import Input from "@/components/Form/Input";
import Label from "@/components/Form/Label";
import toast from "react-hot-toast";
import { useAuth } from "@/hooks/useAuth";
import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";

const Login = () => {
    const { signin } = useAuth();
    const { t } = useTranslation();

    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from || "/";

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        mode: "onBlur",
        defaultValues: {
            email: "",
            password: "",
        },
    });

    const onSubmit = async (data) => {
        try {
            await signin(data);
            navigate(from, { replace: true });
            toast.success(t("auth.signin.success"));
        } catch (error) {
            if (error instanceof AxiosError)
                toast.error(error.response.data.message);
            else toast.error(error.message);
        }
    };

    return (
        <div className="w-full">
            <div className="flex flex-col mb-6 space-y-2">
                <h1 className="text-4xl font-patua text-pretty">
                    {t("auth.signin.label")}
                </h1>
                <p className="text-gray-400">{t("auth.signin.description")}</p>
            </div>

            <form
                onSubmit={handleSubmit(onSubmit)}
                className="flex flex-col w-full"
            >
                <div className="flex flex-col w-full mb-4 space-y-1">
                    <Label htmlFor="email">{t("fields.email.label")}</Label>
                    <Input
                        id="email"
                        type="email"
                        {...register("email", {
                            required: t("fields.email.error"),
                        })}
                    />
                    <FormError>{errors.email?.message}</FormError>
                </div>

                <div className="flex flex-col w-full mb-6 space-y-1">
                    <Label htmlFor="password">
                        {t("fields.password.label")}
                    </Label>
                    <Input
                        id="password"
                        type="password"
                        {...register("password", {
                            required: t("fields.password.error"),
                        })}
                    />
                    <FormError>{errors.password?.message}</FormError>
                </div>

                <Button type="submit" className="mb-4">
                    {t("auth.signin.label")}
                </Button>
                <p className="text-sm text-center text-gray-400">
                    {t("auth.signin.question")}{" "}
                    <a href="/auth/register" className="text-primary">
                        {t("auth.signup.label")}
                    </a>
                </p>
            </form>
        </div>
    );
};

export default Login;
