import * as React from "react";

import { ThemeContext } from "@/context/themeContext";

export const useTheme = () => {
    const context = React.useContext(ThemeContext);
    if (!context)
        throw new Error("useTheme must be used within a ThemeProvider");
    return context;
};
