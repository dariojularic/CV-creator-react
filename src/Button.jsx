import "./Button.css";
import PropTypes from "prop-types";

function Button(props) {
  const { id, type, value, handleClick } = props;
  // console.log("handleClick", handleClick);
  // console.log("id", id);
  if (id === undefined) {
    return (
      <button type={type} onClick={handleClick}>
        {value}
      </button>
    );
  } else {
    return (
      <button type={type} onClick={() => handleClick(id)}>
        {value}
      </button>
    );
  }
}

Button.propTypes = {
  type: PropTypes.string,
  id: PropTypes.string,
  value: PropTypes.string,
  handleClick: PropTypes.func,
};

export default Button;
