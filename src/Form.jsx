import "./Form.css";
import Input from "./Input";
import Button from "./Button";
import PropTypes from "prop-types";
import initialState from "./initial-state";
import { useState } from "react";

function Form() {
  const [cv, setCv] = useState(initialState);

  function handlePersonalInfoChange(event) {
    const { name, value } = event.target;
    setCv({
      ...cv,
      personalInformation: {
        ...cv.personalInformation,
        [name]: value,
      },
    });
    console.log(cv);
  }

  function handleEducationChange(event) {
    const { name, value } = event.target;
    setCv({
      ...cv,
      education: {
        ...cv.education,
        [name]: value,
      },
    });
    console.log(cv);
  }

  function handleExperienceChange(event) {
    const { name, value } = event.target;
    setCv({
      ...cv,
      experience: {
        ...cv.experience,
        [name]: value,
      },
    });
  }

  return (
    // stavit options u novi file i onda loop
    <form className="form" action="" onChange={handlePersonalInfoChange}>
      <div
        className="personal-information input-container"
        data="personalInformation"
      >
        <h3>Personal Information</h3>
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
        <h3>Education</h3>
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
        <h3>Experience</h3>
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
