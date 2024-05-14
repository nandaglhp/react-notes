import LanguageOptions from "@/components/LanguageOptions";
import { features } from "@/libs/constants";
import { useAuth } from "@/hooks/useAuth";
import { useTranslation } from "react-i18next";

const Home = () => {
    const { t, i18n } = useTranslation();

    const today = new Date().toLocaleDateString(i18n.language, {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
    });

    const { user } = useAuth();

    return (
        <div className="w-full h-screen max-w-4xl px-6 mx-auto">
            <div className="flex items-center justify-between py-10">
                <h1 className="text-lg">{t("greetings")}</h1>
                <span className="text-gray-500">{today}</span>
            </div>

            <div className="mb-10">
                <h1 className="mb-6 text-4xl font-patua">
                    {t("hello", { name: user.name })}
                </h1>
                <p className="text-gray-500">{t("description")}</p>
            </div>

            <div className="mb-10">
                <h2 className="mb-4 text-xl font-medium">{t("feature")}</h2>
                <div className="grid gap-2 lg:grid-cols-3">
                    {features.map((feature, index) => (
                        <div
                            key={index}
                            className="flex p-6 space-x-2 bg-gray-100 border border-gray-200 rounded-md dark:bg-gray-800 dark:border-gray-700"
                        >
                            <feature.icon size={20} />
                            <span>{t(feature.label)}</span>
                        </div>
                    ))}
                </div>
            </div>

            <div className="mb-10">
                <h2 className="mb-4 text-xl font-medium">
                    {t("languages.change")}
                </h2>
                <LanguageOptions />
            </div>
        </div>
    );
};

export default Home;
