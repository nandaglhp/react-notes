import PropTypes from "prop-types";

const FormError = ({ children }) => {
    if (!children) return null;
    return <span className="text-sm text-red-500">{children}</span>;
};

FormError.propTypes = {
    children: PropTypes.node,
};

export default FormError;
