import "./Button.css"
import PropTypes from "prop-types";


function Button(props) {
  const {type, value, handleClick} = props
  return (
    <button type={type} onClick={handleClick}>{value}</button>
  )
}

Button.propTypes = {
  type: PropTypes.string,
  value: PropTypes.string,
  handleClick: PropTypes.func
};


export default Button;
