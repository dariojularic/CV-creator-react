import "./Button.css"

function Button(props) {
  const {type, value} = props
  return (
    <button type={type}>{value}</button>
  )
}

export default Button;
