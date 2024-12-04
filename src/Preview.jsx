import "./Preview.css";
import ReactDom from "react-dom";

function Preview(props) {
  const { cv } = props;
  console.log(cv);
  return ReactDom.createPortal(
    <>
      <div className="overlay"></div>
      <div className="container">
        <section className="cv-header">
          <p className="name">{cv.personalInformation.firstName.value} {cv.personalInformation.lastName.value}</p>
          <p className="title">{cv.personalInformation.title.value}</p>
        </section>

        <main>
          <section className="left-side">
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
                // console.log("edu", edu)
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
              {cv.experience.map((exp) => {
                return (
                  <div className="experience" key={exp.id}>
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
          </section>

          <section className="right-side">
            <div className="image-container">
              <img className="cv-image" src={cv.personalInformation.photo.value} alt="" />
            </div>
            <div className="personal-details">
              <h3>Perosnal Details</h3>
              <p>Adress</p>
              <p>{cv.personalInformation.adress.value}</p>
              <p>Phone number</p>
              <p>{cv.personalInformation.phoneNumber.value}</p>
              <p>Email</p>
              <p>{cv.personalInformation.email.value}</p>
            </div>
          </section>
        </main>
      </div>
    </>,
    document.getElementById("portal")
  );
}

export default Preview;
