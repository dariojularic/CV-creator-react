import "./Button.css"
import PropTypes from "prop-types";


function Button(props) {
  const {type, value} = props
  return (
    <button type={type}>{value}</button>
  )
}

Button.propTypes = {
  type: PropTypes.string,
  value: PropTypes.string
};


export default Button;
