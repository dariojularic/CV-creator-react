import "./Form.css";
import Button from "./Button";
import PropTypes from "prop-types";
import Education from "./Education";
import Experience from "./Experience";
import Preview from "./Preview";
import PersonalInformation from "./PersonalInformation";
import { initialState, addEducation, addExperience } from "./initial-state";
import { useState } from "react";

// x na click preview da se pojavi preview componenta
// x ubacit skrol na preview (window.scrollTo)
// x dodat back button
// photo type = file hidden tako da se clickom na <p> aktivira <input>
// dodat print button

// components
//    PersonalInfo(folder)
//      Index.jsx
//      NekaKomponenta.jsx
//      Index.css
//    Education(folder)
//      Index.jsx
//      NekaKOmpo.jsx

function Form() {
  const [cv, setCv] = useState(initialState);
  const [preview, setPreview] = useState(false);

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
    // console.log(cv);
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
    // console.log(cv);
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
          } else {
            return { ...exp };
          }
        }),
      };
    });
  }

  function handleAddEducation() {
    setCv((prev) => ({
      ...prev,
      education: [...prev.education, addEducation()],
    }));
  }

  function handleAddExperience() {
    setCv((prev) => ({
      ...prev,
      experience: [...prev.experience, addExperience()],
    }));
  }

  function handleDeleteEducation(id) {
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

  function resetCv() {
    setCv(initialState);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  return (
    <>
      <form className="form" action="">
        <div className="personal-information input-container">
          <h3>Personal Information</h3>
          <PersonalInformation
            personalInfo={cv.personalInformation}
            handleChange={handlePersonalInfoChange}
            setCv={setCv}
            cv={cv}
          />
        </div>

        <div className="education input-container">
          <h3>Education</h3>
          <Education
            handleChange={handleEducationChange}
            education={cv.education}
            handleDelete={handleDeleteEducation}
          />
          <Button
            type="button"
            value="Add Education"
            handleClick={handleAddEducation}
          />
        </div>

        <div className="experience-form input-container">
          <h3>Experience</h3>
          <Experience
            handleChange={handleExperienceChange}
            experience={cv.experience}
            handleDelete={handleDeleteExperience}
          />

          <Button
            type="button"
            value="Add Experience"
            handleClick={handleAddExperience}
          />
        </div>

        <div className="submit-btns">
          <Button
            type="submit"
            value="Preview"
            handleClick={(event) => {
              event.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
              setPreview(true);
            }}
          />
          <Button type="reset" value="Reset" handleClick={resetCv} />
        </div>
      </form>

      {preview && <Preview cv={cv} setPreview={setPreview} />}
    </>
  );
}

Form.propTypes = {
  cv: PropTypes.object,
  setCv: PropTypes.func,
  addEducation: PropTypes.func,
  addExperience: PropTypes.func,
};

export default Form;
