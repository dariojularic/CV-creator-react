import PropTypes from "prop-types";
import Input from "./Input";

function PersonalInformation(props) {
  const { personalInfo, handleChange } = props;
  // const inputs = [...props]
  // console.log(props);

  return (
    <div className="personal-information input-container">
      <Input
        type={personalInfo.firstName.meta.type}
        placeholder={personalInfo.firstName.meta.placeholder}
        name={personalInfo.firstName.meta.name}
        // value={personalInfo.firstName.value}
        onChange={handleChange}
      />
      <Input
        type={personalInfo.lastName.meta.type}
        placeholder={personalInfo.lastName.meta.placeholder}
        name={personalInfo.lastName.meta.name}
        // value={personalInfo.lastName.value}
        onChange={handleChange}
      />
      <Input
        type={personalInfo.title.meta.type}
        placeholder={personalInfo.title.meta.placeholder}
        name={personalInfo.title.meta.name}
        // value={personalInfo.title.value}
        onChange={handleChange}
      />
      <Input
        type={personalInfo.photo.meta.type}
        placeholder={personalInfo.photo.meta.placeholder}
        name={personalInfo.photo.meta.name}
        // value={personalInfo.photo.value}
        onChange={handleChange}
      />
      <Input
        type={personalInfo.aboutMe.meta.type}
        placeholder={personalInfo.aboutMe.meta.placeholder}
        name={personalInfo.aboutMe.meta.name}
        // value={personalInfo.aboutMe.value}
        onChange={handleChange}
      />
      <Input
        type={personalInfo.adress.meta.type}
        placeholder={personalInfo.adress.meta.placeholder}
        name={personalInfo.adress.meta.name}
        // value={personalInfo.adress.value}
        onChange={handleChange}
      />
      <Input
        type={personalInfo.email.meta.type}
        placeholder={personalInfo.email.meta.placeholder}
        name={personalInfo.email.meta.name}
        // value={personalInfo.email.value}
        onChange={handleChange}
      />
      <Input
        type={personalInfo.phoneNumber.meta.type}
        placeholder={personalInfo.phoneNumber.meta.placeholder}
        name={personalInfo.phoneNumber.meta.name}
        // value={personalInfo.phoneNumber.value}
        onChange={handleChange}
      />
    </div>
  );
}

// PersonalInformation.propTypes = {
//   firstName: PropTypes.object,
//   lastName: PropTypes.func,
//   phoneNumber: PropTypes.func,
//   email: PropTypes.func,
//   aboutMe: PropTypes.func,
//   adress: PropTypes.func,
//   title: PropTypes.func,
//   photo: PropTypes.func,
// };

export default PersonalInformation;
