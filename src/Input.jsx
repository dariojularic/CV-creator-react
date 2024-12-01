import "./Input.css";
import PropTypes from "prop-types";

// type, id, name, required, minlegth, maxlength, size, placeholder, autocapitalize
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
    // console.log(func)
    return (
      <input
        required={type === "date"}
        type={type}
        placeholder={placeholder}
        name={name}
        // value={value}
        onChange={(event) => handleChange(id, event)}
        // id={eduId}
      />
    );
  }

  // console.log(props)
  // console.log("id", id);
  // if (id === undefined) console.log("jeeeeeeeeeeeje")
  return (
    <input
      required={type === "date"}
      type={type}
      placeholder={placeholder}
      name={name}
      // value={value}
      onChange={(event) => handleChange(event)}
      // id={eduId}
    />
  );
}

Input.propTypes = {
  type: PropTypes.string,
  placeholder: PropTypes.string,
  name: PropTypes.string,
  handleChange: PropTypes.func,
};

export default Input;
