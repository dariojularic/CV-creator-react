import "./Input.css";
import PropTypes from "prop-types";

function Input(props) {
  const { id, type, placeholder, name, handleChange } = props;

  return (
    <input
      // required={type === "date"}
      hidden={type === "file"}
      type={type}
      placeholder={placeholder}
      name={name}
      autoComplete={name === "email" || name === "company" ? "on" : "off"}
      onChange={id ? (event) => handleChange(id, event) : handleChange}
    />
  );
}

Input.propTypes = {
  type: PropTypes.string,
  id: PropTypes.string,
  placeholder: PropTypes.string,
  name: PropTypes.string,
  handleChange: PropTypes.func,
};

export default Input;
