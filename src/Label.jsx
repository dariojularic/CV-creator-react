import "./Label.css"
import PropTypes from "prop-types";

function Label(props) {
  const {value} = props;

  return (
    <label htmlFor="">{value}</label>
  )
}

Label.propTypes = {
  value: PropTypes.string
};


export default Label;
