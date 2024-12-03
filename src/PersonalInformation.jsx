import PropTypes from "prop-types";
import Input from "./Input";

function PersonalInformation(props) {
  const { personalInfo, handleChange } = props;

  const fields = Object.entries(personalInfo).map(([key, value]) => {
    return { [key]: value };
  });

  return (
    <div className="personal-information input-container">
      {fields.map((field) => {
        const key = Object.keys(field);
        return (
          <Input
          // key={field[key].meta.name}
          // type={field[key].meta.type}
          // placeholder={field[key].meta.placeholder}
          // name={field[key].meta.name}
          // handleChange={handleChange}
          />
        );
      })}
      {/* tu ide drugi dio inputa za slike */}
      {/* accept attribute */}
      <input type="text" placeholder="Photo" />
    </div>
  );
}

PersonalInformation.propTypes = {
  personalInfo: PropTypes.object,
  handleChange: PropTypes.func,
};

export default PersonalInformation;
