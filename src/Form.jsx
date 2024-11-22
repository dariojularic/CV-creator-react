import "./Form.css"
import Label from "./Label"
import Input from "./Input"
import Button from "./Button"

function Form() {
  return(
    <form className="form" action="">
      <Label value="Personal Information"/>
      <Input type="text" placeholder="First Name"/>
      <Input type="text" placeholder="Last Name"/>
      <Input type="text" placeholder="Title"/>
      <Input type="text" placeholder="Photo"/>
      <Input type="text" placeholder="Adress"/>
      <Input type="text" placeholder="Phone Number"/>
      <Input type="text" placeholder="Email"/>
      <Input type="text" placeholder="About me"/>

      <Label value="Education" />
      <Input type="text" placeholder="University name"/>
      <Input type="text" placeholder="City"/>
      <Input type="text" placeholder="Degree"/>
      <Input type="text" placeholder="Subject"/>
      <Input type="date" placeholder="From (dd/mm/yyyy)"/>
      <Input type="date" placeholder="To (dd/mm/yyyy)"/>
      <Button type="submit" value="Delete" />
      <Button type="submit" value="Add Education" />

      <Label value="Experience" />
      <Input type="text" placeholder="Position"/>
      <Input type="text" placeholder="Company"/>
      <Input type="text" placeholder="City"/>
      <Input type="date" placeholder="From (dd/mm/yyyy)"/>
      <Input type="date" placeholder="To (dd/mm/yyyy)"/>
      <Button type="submit" value="Delete" />
      <Button type="submit" value="Add Experience" />

      <div className="submit-btns">
        <Button type="submit" value="Preview"/>
        <Button type="submit" value="Reset"/>
      </div>
    </form>
  )
}

export default Form;
