import "./Button.css";
import PropTypes from "prop-types";

function Button(props) {
  const { id, type, value, handleClick } = props;

  return (
    <button className={`button ${type}`} type={type} onClick={id ? () => handleClick(id) : handleClick}>
      {value}
    </button>
  );
}

Button.propTypes = {
  type: PropTypes.string,
  id: PropTypes.string,
  value: PropTypes.string,
  handleClick: PropTypes.func,
};

export default Button;
