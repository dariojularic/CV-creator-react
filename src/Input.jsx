import "./Input.css";
import PropTypes from "prop-types";

// type, id, name, required, minlegth, maxlength, size, placeholder, autocapitalize
function Input(props) {
  const { id, type, placeholder, name, handleChange } = props;

  return (
    <input
      required={type === "date"}
      hidden={type === "file"}
      type={type}
      placeholder={placeholder}
      name={name}
      onChange={id ? (event) => handleChange(id, event) : handleChange}
      // onCHange check type file - if true setAttribute("readOnly", true)
    />
  );


  // (event) => {
  //   handleChange(() => console.log("radi jbt"));
  //   console.log(event);
  //   console.log(event.target);
  //   console.log(event.target.files);
  //   // inputElement
  //   event.target.value = "Click to change photo.";
  //   event.target.setAttribute("tabIndex", "-1");
  //   event.target.setAttribute("readOnly", true);
  //   // console.log(event.target);
  //   // this.value = personalInfo.photo.value
  // }



}

Input.propTypes = {
  type: PropTypes.string,
  id: PropTypes.string,
  placeholder: PropTypes.string,
  name: PropTypes.string,
  handleChange: PropTypes.func,
};

export default Input;
