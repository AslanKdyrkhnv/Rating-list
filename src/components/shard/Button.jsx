import PropTypes from "prop-types";

const Button = ({
  children,
  type = "submit",
  version = "secondary",
  isDisabled = true,
}) => {
  return (
    <button type={type} className={`btn btn-${version}`} disabled={isDisabled}>
      {children}
    </button>
  );
};

Button.propTypes = {
  type: PropTypes.string,
  version: PropTypes.string,
  isDisabled: PropTypes.bool,
  children: PropTypes.node.isRequired,
};
export default Button;
