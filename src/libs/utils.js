import clsx from "clsx";
import humanize from "humanize-duration";
import { twMerge } from "tailwind-merge";

export const cn = (...args) => {
    return twMerge(clsx(...args));
};

export const formatDuration = (date, lang = "en") => {
    const diff = new Date() - new Date(date);
    return humanize(diff, {
        largest: 1,
        round: true,
        language: lang,
    });
};
