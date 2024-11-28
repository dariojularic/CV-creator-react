import PropTypes from "prop-types";
import Input from "./Input";

function PersonalInformation(props) {
  const { personalInfo } = props;
  // const inputs = [...props]
  console.log(personalInfo);

  return (
    <div className="personal-information input-container">
      <Input
        type={personalInfo.firstName.meta.type}
        placeholder={personalInfo.firstName.meta.placeholder}
        name={personalInfo.firstName.meta.name}
      />
      <Input
        type={personalInfo.lastName.meta.type}
        placeholder={personalInfo.lastName.meta.placeholder}
        name={personalInfo.lastName.meta.name}
      />
      <Input
        type={personalInfo.title.meta.type}
        placeholder={personalInfo.title.meta.placeholder}
        name={personalInfo.title.meta.name}
      />
      <Input
        type={personalInfo.photo.meta.type}
        placeholder={personalInfo.photo.meta.placeholder}
        name={personalInfo.photo.meta.name}
      />
      <Input
        type={personalInfo.aboutMe.meta.type}
        placeholder={personalInfo.aboutMe.meta.placeholder}
        name={personalInfo.aboutMe.meta.name}
      />
      <Input
        type={personalInfo.adress.meta.type}
        placeholder={personalInfo.adress.meta.placeholder}
        name={personalInfo.adress.meta.name}
      />
      <Input
        type={personalInfo.email.meta.type}
        placeholder={personalInfo.email.meta.placeholder}
        name={personalInfo.email.meta.name}
      />
      <Input
        type={personalInfo.phoneNumber.meta.type}
        placeholder={personalInfo.phoneNumber.meta.placeholder}
        name={personalInfo.phoneNumber.meta.name}
      />
    </div>
  );
}

export default PersonalInformation;
