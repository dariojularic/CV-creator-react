import "./Form.css";
import Input from "./Input";
import Button from "./Button";
import PropTypes from "prop-types";
import { initialState, emptyEducation, emptyExperience } from "./initial-state";
import { useState } from "react";
// import { personalInformationOptions, educationOptions, experienceOptions } from "./options";

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
    // console.log(cv);
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
    // console.log(cv);
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
    // console.log(cv);
  }

  function handleAddEducation() {
    const newEducation = initialState.education[0];
    console.log("newEducation", newEducation);
    setCv({
      ...cv,
      education: [...cv.education, newEducation],
    });
    console.log(cv);
  }

  function handleAddExperience() {
    // koristit prev
    const newExperience = initialState.experience[0];
    console.log("newExperience", newExperience);
    setCv({
      ...cv,
      experience: [...cv.experience, newExperience],
    });
    // {experienceOptions.map(option => {
    //   return <Input key={option.id} type={option.type} placeholder={option.placeholder} name={option.name}/>
    // })}
    console.log(cv);
  }

  // posebne komponente za education, experience i personal Info

  return (
    <form className="form" action="">
      <div
        onChange={handlePersonalInfoChange}
        className="personal-information input-container"
        data="personalInformation"
      >
        <h3>Personal Information</h3>
        {/* {console.log(initialState.personalInformation)} */}
        {Object.keys(initialState.personalInformation).map((elem) => {
            const thing = initialState.personalInformation[elem]
            // console.log("elem", elem);
            // console.log("keyaa", initialState.personalInformation[elem]);
            return <Input key={thing} type={thing.meta.type} placeholder={thing.meta.placeholder} onChange={handlePersonalInfoChange} />;
          }
          // return (
          //   <Input
          //     key={option.id}
          //     type={option.type}
          //     placeholder={option.placeholder}
          //     name={option.name}
          //     onChange={handlePersonalInfoChange}
          //   />
          // );
        )}

        {/* <Input type="text" placeholder="First Name" name="firstName" />
        <Input type="text" placeholder="Last Name" name="lastName" />
        <Input type="text" placeholder="Title" name="title" />
        <Input type="text" placeholder="Adress" name="adress" />
        <Input type="text" placeholder="Phone Number" name="phoneNumber" />
        <Input type="text" placeholder="Email" name="email" />
        <Input type="text" placeholder="About me" name="aboutMe" />
        <Input type="file" placeholder="Photo" name="photo" /> */}
      </div>

      <div className="education input-container" data="education">
        <h3>Education</h3>
        {/* {cv.education.map((option) => {
          return <Input key={option.id} onChange={handleEducationChange} />;
        })} */}

        {/* <Input
          type="text"
          placeholder="University name"
          name="universityName"
        />
        <Input type="text" placeholder="City" name="city" />
        <Input type="text" placeholder="Degree" name="degree" />
        <Input type="text" placeholder="Subject" name="subject" />
        <Input type="date" placeholder="From (dd/mm/yyyy)" name="fromDate" />
        <Input type="date" placeholder="To (dd/mm/yyyy)" name="toDate" /> */}
        <Button type="submit" value="Delete" />
        <Button
          type="submit"
          value="Add Education"
          handleClick={handleAddEducation}
        />
      </div>

      <div
        className="experience input-container"
        data="experience"
        onChange={handleExperienceChange}
      >
        <h3>Experience</h3>
        {/* {experienceOptions.map((option) => {
          return (
            <Input
              key={option.id}
              type={option.type}
              placeholder={option.placeholder}
              name={option.name}
            />
          );
        })} */}

        {/* <Input type="text" placeholder="Position" name="position" />
        <Input type="text" placeholder="Company" name="company"/>
        <Input type="text" placeholder="City" name="city"/>
        <Input type="date" placeholder="From (dd/mm/yyyy)" name="fromDate"/>
        <Input type="date" placeholder="To (dd/mm/yyyy)" name="toDate"/> */}
        <Button type="submit" value="Delete" />
        <Button
          type="submit"
          value="Add Experience"
          handleClick={handleAddExperience}
        />
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
