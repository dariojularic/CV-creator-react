import "./Input.css";
import PropTypes from "prop-types";

// type, id, name, required, minlegth, maxlength, size, placeholder, autocapitalize
function Input(props) {
  const { type, placeholder, name, handleChange } = props;
  return (
    <input
      required={type === "date"}
      type={type}
      placeholder={placeholder}
      name={name}
      onChange={handleChange}
    />
  );
}

Input.propTypes = {
  type: PropTypes.string,
  placeholder: PropTypes.string,
  name: PropTypes.string,
  handleChange: PropTypes.func
};

export default Input;
