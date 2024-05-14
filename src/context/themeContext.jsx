import * as React from "react";

import { Moon, Sun } from "lucide-react";

import PropTypes from "prop-types";
import { useLocalStorage } from "../hooks/useLocalStorage";

export const ThemeContext = React.createContext();

const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useLocalStorage("darkMode", false);
    const ThemeIcon = theme === "light" ? Sun : Moon;

    React.useEffect(() => {
        document.documentElement.classList.toggle("dark", theme === "dark");
    }, [theme]);

    const toggleTheme = () => {
        setTheme((prev) => (prev === "light" ? "dark" : "light"));
    };

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme, ThemeIcon }}>
            {children}
        </ThemeContext.Provider>
    );
};

ThemeProvider.propTypes = {
    children: PropTypes.node.isRequired,
};

export default ThemeProvider;
