import "./Input.css";
import PropTypes from "prop-types";

// type, id, name, required, minlegth, maxlength, size, placeholder, autocapitalize
function Input(props) {
  const { id, type, placeholder, name, handleChange } = props;
  // console.log(props)
  if (id === undefined) {
    return (
      <input
        required={type === "date"}
        type={type}
        placeholder={placeholder}
        name={name}
        // value={value}
        onChange={handleChange}
        // id={eduId}
      />
    );

    // console.log("func", func)
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
