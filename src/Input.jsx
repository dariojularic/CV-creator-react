import "./Input.css";
import PropTypes from "prop-types";

// type, id, name, required, minlegth, maxlength, size, placeholder, autocapitalize
function Input(props) {
  const { type, placeholder, name } = props;
  return (
    <input
      required={type === "date"}
      type={type}
      placeholder={placeholder}
      name={name}
    />
  );
}

Input.propTypes = {
  type: PropTypes.string,
  placeholder: PropTypes.string,
  name: PropTypes.string
};

export default Input;
