import PropTypes from "prop-types";
import Input from "./Input";

function PersonalInformation(props) {
  const { setCv, cv, personalInfo, handleChange } = props;

  const fields = Object.entries(personalInfo).map(([key, value]) => {
    return { [key]: value };
  });

  return (
    <div className="personal-information input-container">
      {fields.map((field) => {
        const key = Object.keys(field);
        return (
          <Input
            key={field[key].meta.name}
            type={field[key].meta.type}
            placeholder={field[key].meta.placeholder}
            name={field[key].meta.name}
            handleChange={handleChange}
          />
        );
      })}

      <input
        type="text"
        placeholder="Photo"
        name="fakeInput"
        onClick={(eventClick) => {
          const inputElement = document.querySelector("input[type='file']");
          inputElement.click();
          inputElement.addEventListener("change", (event) => {
            const file = event.target.files[0];
            const reader = new FileReader();

            reader.onload = (e) => {
              eventClick.target.placeholder =
                "Image uploaded! Click to change photo";
              eventClick.target.setAttribute("readOnly", true);
              eventClick.target.className = "fake-input";

              setCv((prev) => {
                prev.personalInformation.photo.value = e.target.result;
                prev.personalInformation.photo.meta.placeholder =
                  "Image uploaded! Click to change photo";
                return prev;
              });
            };
            reader.readAsDataURL(file);
          });
        }}
      />
    </div>
  );
}

PersonalInformation.propTypes = {
  personalInfo: PropTypes.object,
  handleChange: PropTypes.func,
  cv: PropTypes.object,
  setCv: PropTypes.func,
};

export default PersonalInformation;
