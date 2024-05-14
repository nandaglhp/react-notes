import PropTypes from "prop-types";

const Label = ({ children, htmlFor }) => {
    return (
        <label className="text-sm" htmlFor={htmlFor}>
            {children}
        </label>
    );
};

Label.propTypes = {
    children: PropTypes.node.isRequired,
    htmlFor: PropTypes.string.isRequired,
};

export default Label;
