import Button from "./Button";
import Input from "./Input";
import "./Education.css";
import PropTypes from "prop-types";

function Education(props) {
  const {
    handleDelete,
    handleChange,
    id,
    universityName,
    city,
    degree,
    subject,
    fromDate,
    toDate,
  } = props;
  const keys = [universityName, city, degree, subject, fromDate, toDate];

  return (
    <div className="education-section" key={id}>
      {keys.map((key) => {
        return (
          <Input
            key={key.meta.name}
            placeholder={key.meta.placeholder}
            type={key.meta.type}
            name={key.meta.name}
            id={id}
            handleChange={handleChange}
          />
        );
      })}

      <Button id={id} type="button" value="Delete" handleClick={handleDelete} />
    </div>
  );
}

Education.propTypes = {
  handleChange: PropTypes.func,
  handleDelete: PropTypes.func,
  universityName: PropTypes.object,
  city: PropTypes.object,
  degree: PropTypes.object,
  subject: PropTypes.object,
  fromDate: PropTypes.object,
  toDate: PropTypes.object,
  id: PropTypes.string,
};

export default Education;
