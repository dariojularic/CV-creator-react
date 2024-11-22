import "./Label"

function Label(props) {
  const {value} = props;
  console.log(props)
  return (
    <label htmlFor="">{value}</label>
  )
}

export default Label;

