import Input from "./Input";
import "./Experience.css";
import Button from "./Button";
import PropTypes from "prop-types";

// refaktorirat
function Experience(props) {
  const {
    handleDelete,
    handleChange,
    id,
    city,
    company,
    fromDate,
    toDate,
    position,
  } = props;
  const keysArray = [position, company, city, fromDate, toDate];

  return (
    <div className="experience-section" key={id}>
      {keysArray.map((key) => {
        return (
          <Input
            key={key.meta.name}
            type={key.meta.type}
            placeholder={key.meta.placeholder}
            name={key.meta.name}
            handleChange={handleChange}
            id={id}
          />
        );
      })}

      <Button id={id} type="button" value="Delete" handleClick={handleDelete} />
    </div>
  );
}

Experience.propTypes = {
  handleChange: PropTypes.func,
  handleDelete: PropTypes.func,
  company: PropTypes.object,
  city: PropTypes.object,
  position: PropTypes.object,
  fromDate: PropTypes.object,
  toDate: PropTypes.object,
  id: PropTypes.string,
};

export default Experience;
