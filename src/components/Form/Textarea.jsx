import * as React from "react";
import PropTypes from "prop-types";

const Textarea = React.forwardRef(({ id, ...props }, ref) => (
    <textarea
        id={id}
        ref={ref}
        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary dark:bg-gray-800 dark:border-gray-700 dark:focus:ring-gray-600 dark:focus:border-gray-600"
        {...props}
    />
));

Textarea.displayName = "Textarea";

Textarea.propTypes = {
    id: PropTypes.string.isRequired,
};

export default Textarea;
