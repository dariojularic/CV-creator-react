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
        onClick={(eventClick) => {
          const inputElement = document.querySelector("input[type='file']");
          inputElement.click();
          inputElement.addEventListener("change", (event) => {
            const reader = new FileReader();
            // reader.onload = () => {
            //   // setSelectedImage(reader.result);
            //   console.log("fafafa");
            // };
            console.log(event.target.files[0]);

            reader.readAsDataURL(event.target.files[0]);

            eventClick.target.placeholder =
              "Image uploaded! Click to change photo";
            eventClick.target.setAttribute("readOnly", true);
            setCv((prev) => {
              prev.personalInformation.photo.value = event.target.files[0];
              prev.personalInformation.photo.meta.placeholder =
                "Image uploaded! Click to change photo";
              return prev;
            });
          });
        }}
      />
    </div>
  );
}

PersonalInformation.propTypes = {
  personalInfo: PropTypes.object,
  handleChange: PropTypes.func,
};

export default PersonalInformation;
