import * as React from "react";

import { Disclosure, Transition } from "@headlessui/react";

import { ChevronDown } from "lucide-react";
import PropTypes from "prop-types";
import SidebarItem from "@/components/Sidebar/SidebarItem";
import { cn } from "@/libs/utils";
import { useTranslation } from "react-i18next";

const SidebarGroup = ({ label, icon, childrens }) => {
    const Icon = icon;

    const { t } = useTranslation();
    const [open, setOpen] = React.useState(true);

    return (
        <Disclosure>
            <Disclosure.Button
                className="flex items-center px-4 py-2 space-x-4 rounded-lg opacity-60 hover:bg-gray-900 hover:bg-opacity-20 hover:opacity-100 dark:hover:bg-gray-100 dark:hover:bg-opacity-10 dark:hover:opacity-100"
                onClick={() => setOpen(!open)}
            >
                <Icon size={20} />
                <div className="flex items-center justify-between w-full">
                    <span>{t(label)}</span>
                    <ChevronDown
                        size={20}
                        className={cn(
                            "transform transition-transform duration-200",
                            open && "rotate-180"
                        )}
                    />
                </div>
            </Disclosure.Button>
            <Transition
                show={open}
                enter="transition-transform duration-200"
                enterFrom="transform -translate-y-2 opacity-0"
                enterTo="transform translate-y-0 opacity-100"
                leave="transition-transform duration-200"
                leaveFrom="transform translate-y-0 opacity-100"
                leaveTo="transform -translate-y-2 opacity-0"
            >
                <Disclosure.Panel className="space-y-4">
                    {childrens.map((child) => (
                        <SidebarItem {...child} key={child.label} />
                    ))}
                </Disclosure.Panel>
            </Transition>
        </Disclosure>
    );
};

SidebarGroup.propTypes = {
    label: PropTypes.string.isRequired,
    icon: PropTypes.elementType.isRequired,
    childrens: PropTypes.array.isRequired,
};

export default SidebarGroup;
