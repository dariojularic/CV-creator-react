import "./Preview.css";
import ReactDom from "react-dom";

function Preview(props) {
  const { cv } = props;
  console.log(props);
  return ReactDom.createPortal(
    <>
      <div className="overlay"></div>
      <div className="container">
        <header>
          <p className="first-name">{cv.personalInformation.firstName.value}</p>
          <p className="last-name">{cv.personalInformation.lastName.value}</p>
          <p className="title">{cv.personalInformation.title.value}</p>
        </header>
        <main>
          <div>
            <div className="about-me-container">
              <h3>About Me</h3>
              <p className="about-me-paragraph">
                {cv.personalInformation.aboutMe.value}
              </p>
              <hr />
            </div>
            <div className="education-container">
              <h3>Education</h3>
              <hr />
              {cv.education.map((edu) => {
                console.log("edu", edu)
                return (
                  <div className="education" key={edu.id}>
                    <p className="education-date">
                      {edu.fromDate.value} - {edu.toDate.value}{" "}
                    </p>
                    <p className="education-diploma">{edu.degree.value}</p>
                    <p className="education-subject">{edu.subject.value}</p>
                    <p className="education-city">{edu.city.value}</p>
                    <p className="education-university-name">
                      {edu.universityName.value}
                    </p>
                  </div>
                );
              })}
            </div>
            <div className="experience">
              <h3>Experience</h3>
              <hr />
              {cv.experience.forEach((exp) => {
                return (
                  <div className="experience">
                    <p className="experience-date">
                      {exp.fromDate.value} - {exp.toDate.value}{" "}
                    </p>
                    <p className="experience-position">{exp.position.value}</p>
                    <p className="experience-company">{exp.company.value}</p>
                    <p className="experience-city">{exp.city.value}</p>
                  </div>
                );
              })}
            </div>
          </div>

          <div>
            <div className="image-container">
              <img src="" alt="" />
            </div>
            <div className="personal-details"></div>
          </div>
        </main>
      </div>
    </>,
    document.getElementById("portal")
  );
}

export default Preview;
