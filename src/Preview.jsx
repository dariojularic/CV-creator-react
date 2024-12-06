import "./Preview.css";
import ReactDom from "react-dom";
import { format } from "date-fns";

function Preview(props) {
  const { cv, setPreview } = props;
  // console.log(cv);
  return ReactDom.createPortal(
    <>
      <div
        className="overlay"
        onClick={() => {
          setPreview(false);
          window.scrollTo({ top: 0, behavior: "smooth" });
        }}
      ></div>
      <div className="container">
        <section className="cv-header">
          <div>
            <p className="name">
              {cv.personalInformation.firstName.value}{" "}
              {cv.personalInformation.lastName.value}
            </p>
            <p className="title">{cv.personalInformation.title.value}</p>
          </div>

          <div className="buttons">
            <button onClick={() => setPreview(false)}>Back</button>
            <button>Print</button>
          </div>
        </section>

        <main>
          <section className="left-side">
            <div className="about-me-container">
              <h3 className="cv-heading">About Me</h3>
              <hr />
              <p className="about-me-paragraph">
                {cv.personalInformation.aboutMe.value}
              </p>
            </div>
            <div className="education-container">
              <h3 className="cv-heading">Education</h3>
              <hr />
              {cv.education.map((edu) => {
                // console.log("edu", edu)
                return (
                  <div className="education" key={edu.id}>
                    <p className="education-date">
                      <strong>
                        {edu.fromDate.value && edu.toDate.value
                          ? format(edu.fromDate.value, "dd/MMM/yyyyd") +
                            " - " +
                            format(edu.toDate.value, "dd/MMM/yyyy")
                          : null}
                      </strong>
                    </p>
                    <div className="education-details">
                      <p className="education-diploma">
                        <strong> {edu.degree.value}</strong>
                      </p>
                      <p className="education-subject">{edu.subject.value}</p>
                      <p className="education-university">
                        {edu.universityName.value}, {edu.city.value}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
            <div className="experience">
              <h3 className="cv-heading">Experience</h3>
              <hr />
              {cv.experience.map((exp) => {
                return (
                  <div className="experience-container" key={exp.id}>
                    <p className="experience-date">
                      <strong>
                        {exp.fromDate.value && exp.toDate.value
                          ? format(exp.fromDate.value, "dd/MMM/yyyy") +
                            " - " +
                            format(exp.toDate.value, "dd/MMM/yyyy")
                          : null}
                      </strong>
                    </p>
                    <div className="experience-details">
                      <p className="experience-position">
                        <strong>{exp.position.value}</strong>
                      </p>
                      <p className="experience-company">{exp.company.value}</p>
                      <p className="experience-city">{exp.city.value}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </section>

          <section className="right-side">
            <div className="image-container">
              <img
                className="cv-image"
                src={cv.personalInformation.photo.value}
                alt=""
              />
            </div>
            <div className="personal-details">
              <h3 className="cv-heading">Perosnal Details</h3>
              <hr />
              <p>
                {" "}
                <strong> Adress </strong>
              </p>
              <p>{cv.personalInformation.adress.value}</p>
              <p>
                <strong>Phone number</strong>
              </p>
              <p>{cv.personalInformation.phoneNumber.value}</p>
              <p>
                <strong>Email</strong>
              </p>
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
