import { AxiosError } from "axios";
import Button from "@/components/Form/Button";
import FormError from "@/components/Form/Error";
import Input from "@/components/Form/Input";
import Label from "@/components/Form/Label";
import toast from "react-hot-toast";
import { useAuth } from "@/hooks/useAuth";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

const Register = () => {
    const { signup } = useAuth();
    const navigate = useNavigate();
    const { t } = useTranslation();

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        mode: "onBlur",
        defaultValues: {
            name: "",
            email: "",
            password: "",
        },
    });

    const onSubmit = async (data) => {
        try {
            await signup(data);
            navigate("/auth/login", { replace: true });
            toast.success(t("auth.signup.success"));
        } catch (error) {
            if (error instanceof AxiosError)
                toast.error(error.response.data?.message);
            else toast.error(error.message);
        }
    };

    return (
        <div className="w-full">
            <div className="flex flex-col mb-6 space-y-2">
                <h1 className="text-4xl font-patua text-pretty">
                    {t("auth.signup.label")}
                </h1>
                <p className="text-gray-400">{t("auth.signup.description")}</p>
            </div>

            <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col">
                <div className="flex flex-col w-full mb-4 space-y-1">
                    <Label htmlFor="name">{t("fields.name.label")}</Label>
                    <Input
                        id="name"
                        type="text"
                        {...register("name", {
                            required: t("fields.name.error"),
                        })}
                    />
                    <FormError>{errors.name?.message}</FormError>
                </div>

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
                    {t("auth.signup.label")}
                </Button>
                <p className="text-sm text-center text-gray-400">
                    {t("auth.signup.question")}{" "}
                    <a href="/auth/login" className="text-primary">
                        {t("auth.signin.label")}
                    </a>
                </p>
            </form>
        </div>
    );
};

export default Register;
