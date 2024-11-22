import "./Label.css"

function Label(props) {
  const {value} = props;

  return (
    <label htmlFor="">{value}</label>
  )
}

export default Label;
