import "./Input";
// type, id, name, required, minlegth, maxlength, size, placeholder, autocapitalize
function Input(props) {
  const {type, placeholder} = props;
  return (
    <input type={type} placeholder={placeholder}/>
  )
}

export default Input;
