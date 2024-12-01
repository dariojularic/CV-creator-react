import "./Input.css";
import PropTypes from "prop-types";

function Input(props) {
  const { id, type, placeholder, name, handleChange } = props;

  if (id === undefined) {
    return (
      <input
        required={type === "date"}
        type={type}
        placeholder={placeholder}
        name={name}
        onChange={handleChange}
      />
    );
  } else {
    return (
      <input
        required={type === "date"}
        type={type}
        placeholder={placeholder}
        name={name}
        onChange={(event) => handleChange(id, event)}
      />
    );
  }
}

Input.propTypes = {
  type: PropTypes.string,
  id: PropTypes.string,
  placeholder: PropTypes.string,
  name: PropTypes.string,
  handleChange: PropTypes.func,
};

export default Input;
