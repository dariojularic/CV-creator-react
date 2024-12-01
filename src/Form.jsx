import "./Form.css";
import Input from "./Input";
import Button from "./Button";
import PropTypes from "prop-types";
import Education from "./Education";
import Experience from "./Experience";
import PersonalInformation from "./PersonalInformation";
import { initialState, emptyEducation, emptyExperience } from "./initial-state";
import { useState } from "react";
// import { personalInformationOptions, educationOptions, experienceOptions } from "./options";

// handleEducationChange
// handleExperienceChange
// personalInfo preko petlje

function Form() {
  const [cv, setCv] = useState(initialState);

  function handlePersonalInfoChange(event) {
    const { name, value } = event.target;

    setCv((prev) => {
      return {
        ...prev,
        personalInformation: {
          ...prev.personalInformation,
          [name]: {
            ...cv.personalInformation[name],
            value: value,
          },
        },
      };
    });
    console.log(cv);
  }

  function handleEducationChange(id, event) {
    const { name, value } = event.target;

    setCv((prev) => {
      return {
        ...prev,
        education: [...prev.education].map((edu) => {
          if (id === edu.id) {
            return {
              ...edu,
              [name]: {
                ...edu[name],
                value: value,
              },
            };
          }
        }),
      };
    });
    console.log(cv);
  }

  function handleExperienceChange(event) {
    const { name, value } = event.target;
    console.log(event.target);
    setCv({
      ...cv,
      experience: {
        ...cv.experience,
        [name]: value,
      },
    });
    console.log(cv);
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

  return (
    <form className="form" action="">
      <div className="personal-information input-container">
        <h3>Personal Information</h3>
        <PersonalInformation
          personalInfo={cv.personalInformation}
          handleChange={handlePersonalInfoChange}
        />
      </div>

      <div className="education input-container">
        <h3>Education</h3>

        <Education
          handleChange={handleEducationChange}
          education={cv.education}
        />

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
              key={crypto.randomUUID()}
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
