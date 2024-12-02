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
          } else {
            return {
              ...edu,
            };
          }
        }),
      };
    });
    console.log(cv);
  }

  function handleExperienceChange(id, event) {
    const { name, value } = event.target;

    setCv((prev) => {
      return {
        ...prev,
        experience: [...prev.experience].map((exp) => {
          if (id === exp.id) {
            return {
              ...exp,
              [name]: {
                ...exp[name],
                value: value,
              },
            };
          }
        }),
      };
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

  function handleDeleteEducation(id) {
    const newEducation = cv.education.filter((edu) => {
      console.log("id", id);
      if (edu.id !== id) {
        console.log("edu", edu);
        return edu;
      }
    });
    console.log(newEducation);

    setCv((prev) => ({
      ...prev,
      education: [...prev.education].filter((edu) => {
        if (edu.id !== id) return edu;
      }),
    }));
  }

  function handleDeleteExperience(id) {
    setCv((prev) => ({
      ...prev,
      experience: [...prev.experience].filter((exp) => {
        if (exp.id !== id) return exp;
      }),
    }));
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
          handleDelete={handleDeleteEducation}
        />
        {/* <Button
          type="button"
          value="Delete"
          handleClick={handleDeleteEducation}
        /> */}
        <Button
          type="button"
          value="Add Education"
          handleClick={handleAddEducation}
        />
      </div>

      <div className="experience input-container">
        <h3>Experience</h3>
        <Experience
          handleChange={handleExperienceChange}
          experience={cv.experience}
        />

        <Button
          type="button"
          value="Delete"
          handleClick={handleDeleteExperience}
        />
        <Button
          type="button"
          value="Add Experience"
          handleClick={handleAddExperience}
        />
      </div>

      <div className="submit-btns">
        <Button type="button" value="Preview" />
        <Button type="button" value="Reset" />
      </div>
    </form>
  );
}

Form.propTypes = {
  cv: PropTypes.object,
  setCv: PropTypes.func,
};

export default Form;
