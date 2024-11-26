import "./Form.css";
import Input from "./Input";
import Button from "./Button";
import PropTypes from "prop-types";
import Education from "./Education";
import Experience from "./Experience";
import PersonalInformation from "./PersonalInformation"
import { initialState, emptyEducation, emptyExperience } from "./initial-state";
import { useState } from "react";
// import { personalInformationOptions, educationOptions, experienceOptions } from "./options";

// zavrsi personalInfo komponentu
// handleEducationChange
// handleExperienceChange

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

  // jel mi treba tu id argument?
  function handleEducationChange(event) {
    const { name, value } = event.target;
    console.log(name);
    console.log(value);
    setCv((prev) => {
      return {
        ...prev,
        education: [...prev.education],
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

  // posebne komponente za education, experience i personal Info

  return (
    <form className="form" action="">
      <div className="personal-information input-container">
        <h3>Personal Information</h3>
        {/* {cv.personalInformation.forEach((key, value) => {
          console.log(key)
          console.log(value)
        })} */}

        {/* {Object.keys(initialState.personalInformation).map((elem) => {
          const thing = initialState.personalInformation[elem];
          // console.log(thing)
          return (
            <Input
              key={crypto.randomUUID()}
              type={thing.meta.type}
              placeholder={thing.meta.placeholder}
              onChange={handlePersonalInfoChange}
            />
          );
        })} */}

        <div className="personal-info">
          <PersonalInformation personalInfo={cv.personalInformation} />
          <input
            type={cv.personalInformation.firstName.meta.type}
            name={cv.personalInformation.firstName.meta.name}
            value={cv.personalInformation.firstName.value}
            onChange={handlePersonalInfoChange}
          />
        </div>
      </div>

      <div
        className="education input-container"
        onChange={handleEducationChange}
      >
        <h3>Education</h3>

        {/* {initialState.education.forEach((elem) => {
          Object.keys(elem).map((element) => {
            if (element === "id") return;
            const obj = initialState.education[0][element];
            console.log(obj)
            return (
              <Input
                key={crypto.randomUUID()}
                placeholder={obj.meta.placeholder}
                type={obj.meta.type}
                onChange={handleEducationChange}
              />
            );
          });
        })} */}

        {/* <Education handleEducationChange={handleEducationChange} /> */}

        {Object.keys(initialState.education[0]).map((elem) => {
          if (elem === "id") return;
          const obj = initialState.education[0][elem];
          return (
            <Input
              key={crypto.randomUUID()}
              placeholder={obj.meta.placeholder}
              type={obj.meta.type}
              name={obj.meta.name}
              handleChange={handleEducationChange}
            />
          );
        })}

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
