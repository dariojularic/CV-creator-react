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
    setCv((prev) => ({
      ...prev,
      education: [...prev.education, emptyEducation],
    }));
    console.log(cv);
  }

  function handleAddExperience() {
    setCv((prev) => ({
      ...prev,
      experience: [...prev.experience, emptyExperience],
    }));
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
        {Object.keys(initialState.personalInformation).map((elem) => {
          const thing = initialState.personalInformation[elem];
          return (
            <Input
              key={thing}
              type={thing.meta.type}
              placeholder={thing.meta.placeholder}
              onChange={handlePersonalInfoChange}
            />
          );
        })}
      </div>

      <div className="education input-container" data="education">
        <h3>Education</h3>

        {initialState.education.forEach((elem) => {
          Object.keys(elem).map((element) => {
            if (element === "id") return;
            const thing = initialState.education[0][element];
            return (
              <Input
                key={thing}
                placeholder={thing.meta.placeholder}
                type={thing.meta.type}
                onChange={handleEducationChange}
              />
            );
          });
        })}

        {/* {Object.keys(initialState.education[0]).map((elem) => {
          if (elem === "id") return;
          const thing = initialState.education[0][elem];
          return (
            <Input
              key={thing}
              placeholder={thing.meta.placeholder}
              type={thing.meta.type}
              onChange={handleEducationChange}
            />
          );
        })} */}

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
        {Object.keys(initialState.experience[0]).map((elem) => {
          if (elem === "id") return;
          const thing = initialState.experience[0][elem];
          return (
            <Input
              key={thing}
              placeholder={thing.meta.placeholder}
              type={thing.meta.type}
              onChange={handleExperienceChange}
            />
          );
        })}

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
