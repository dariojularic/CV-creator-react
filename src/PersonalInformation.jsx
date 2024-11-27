import PropTypes from "prop-types";
import Input from "./Input";

function PersonalInformation(props) {
  const { personalInfo } = props;
  console.log(personalInfo);

  return (
    <div className="personal-info">
      <Input />
      <Input />
      <Input />
      <Input />
      <Input />
      <Input />
      <Input />
    </div>
  );
}

export default PersonalInformation;
