import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";
import { cn } from "@/libs/utils";
import { useTranslation } from "react-i18next";

const SidebarItem = ({ href, label, icon }) => {
    const Icon = icon;
    const { t } = useTranslation();

    return (
        <NavLink
            to={href}
            className={({ isActive }) =>
                cn(
                    "flex items-center space-x-4 px-4 py-2 rounded-lg opacity-60",
                    "hover:bg-gray-900 hover:bg-opacity-20 hover:opacity-100 dark:hover:bg-gray-100 dark:hover:bg-opacity-10 dark:hover:opacity-100",
                    isActive &&
                        "bg-gray-900 bg-opacity-20 opacity-100 dark:bg-gray-100 dark:bg-opacity-10 dark:opacity-100"
                )
            }
        >
            {icon && <Icon size={20} />}
            <span>{t(label)}</span>
        </NavLink>
    );
};

SidebarItem.propTypes = {
    href: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    icon: PropTypes.elementType,
};

export default SidebarItem;
