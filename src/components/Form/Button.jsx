import * as React from "react";

import PropTypes from "prop-types";
import { cn } from "@/libs/utils";

const Button = React.forwardRef(({ children, className, ...props }, ref) => (
    <button
        ref={ref}
        {...props}
        className={cn(
            "px-4 py-3 text-sm font-medium text-white uppercase rounded-md bg-primary focus:outline-none dark:bg-gray-800",
            className
        )}
    >
        {children}
    </button>
));

Button.displayName = "Button";

Button.propTypes = {
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
};

export default Button;
