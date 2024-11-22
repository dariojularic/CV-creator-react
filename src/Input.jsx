import "./Input.css";

// type, id, name, required, minlegth, maxlength, size, placeholder, autocapitalize
function Input(props) {
  const {type, placeholder} = props;
  return (
    <input required={type === "date"} type={type} placeholder={placeholder}/>
  )
}

export default Input;
