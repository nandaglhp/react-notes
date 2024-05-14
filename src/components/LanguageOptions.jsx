import { cn } from "@/libs/utils";
import { languages } from "@/libs/constants";
import { useTranslation } from "react-i18next";

const LanguageOptions = () => {
    const { t, i18n } = useTranslation();

    return (
        <div className="flex justify-between">
            <span className="text-gray-500">{t("languages.choose")}</span>
            <div className="flex space-x-4">
                {languages.map(({ code, icon }) => (
                    <button
                        key={code}
                        type="button"
                        title="Change language"
                        onClick={() => i18n.changeLanguage(code)}
                        className={cn(
                            "p-1 rounded-full bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-700",
                            i18n.language === code &&
                                "ring-2 ring-primary dark:ring-secondary"
                        )}
                    >
                        <img src={icon} className="w-6" alt={code} />
                    </button>
                ))}
            </div>
        </div>
    );
};

export default LanguageOptions;
