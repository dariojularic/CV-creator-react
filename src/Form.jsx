import "./Form.css";
import Label from "./Label";
import Input from "./Input";
import Button from "./Button";
import PropTypes from "prop-types";

function Form(props) {
  const { cv, setCv } = props;

  function handleInputChange(event) {
    const { name, value } = event.target;
    // const section = event.target.closest("div").getAttribute("data")

    setCv({
      ...cv,
      [name]: value,
    });
    // console.log(event.target.closest("div").getAttribute("data"))
    console.log(cv.personalInformation);
  }

  return (
    <form className="form" action="" onChange={handleInputChange}>
      <div className="personal-information input-container" data="personalInformation">
        {/* <h3>Personal Information</h3> */}
        <Label value="Personal Information" />
        <Input type="text" placeholder="First Name" name="firstName" />
        <Input type="text" placeholder="Last Name" name="lastName" />
        <Input type="text" placeholder="Title" name="title" />
        <Input type="text" placeholder="Adress" name="adress" />
        <Input type="text" placeholder="Phone Number" name="phoneNumber" />
        <Input type="text" placeholder="Email" name="email" />
        <Input type="text" placeholder="About me" name="aboutMe" />
        <Input type="file" placeholder="Photo" name="photo" />
      </div>

      <div className="education input-container" data="education">
        <Label value="Education" />
        {/* <h3>Education</h3> */}
        <Input
          type="text"
          placeholder="University name"
          name="universityName"
        />
        <Input type="text" placeholder="City" name="city" />
        <Input type="text" placeholder="Degree" name="degree" />
        <Input type="text" placeholder="Subject" name="subject" />
        <Input type="date" placeholder="From (dd/mm/yyyy)" name="fromDate" />
        <Input type="date" placeholder="To (dd/mm/yyyy)" name="toDate" />
        <Button type="submit" value="Delete" />
        <Button type="submit" value="Add Education" />
      </div>

      <div className="experience input-container" data="experience">
        <Label value="Experience" />
        {/* <h3>Experience</h3> */}
        <Input type="text" placeholder="Position" />
        <Input type="text" placeholder="Company" />
        <Input type="text" placeholder="City" />
        <Input type="date" placeholder="From (dd/mm/yyyy)" />
        <Input type="date" placeholder="To (dd/mm/yyyy)" />
        <Button type="submit" value="Delete" />
        <Button type="submit" value="Add Experience" />
      </div>

      <div className="submit-btns">
        <Button type="submit" value="Preview" />
        <Button type="submit" value="Reset" />
      </div>
    </form>
  );
}

Form.propTypes = {
  cv: PropTypes.object,
  setCv: PropTypes.func,
};

export default Form;
