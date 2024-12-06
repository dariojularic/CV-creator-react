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
            key={field[key].meta.name}
            type={field[key].meta.type}
            placeholder={field[key].meta.placeholder}
            name={field[key].meta.name}
            handleChange={handleChange}
          />
        );
      })}
      {/* tu ide drugi dio inputa za slike */}
      {/* accept attribute */}
      <input
        type="text"
        placeholder="Photo"
        onClick={() => {
          const inputElement = document.querySelector("input[type='file']");
          inputElement.click();
          inputElement.setAttribute("onChange", (event) => {
            handleChange(() => console.log("radi jbt"));

            console.log(event);
            console.log(event.target);
            console.log(event.target.files);
            // inputElement
            event.target.value = "Click to change photo.";
            event.target.setAttribute("tabIndex", "-1");
            event.target.setAttribute("readOnly", true);
            // console.log(event.target);
            // this.value = personalInfo.photo.value
          });
          console.log(inputElement);
        }}

        // onChange={(event) => {
        //   handleChange()
        //   console.log(event);
        //   console.log(event.target);
        //   console.log(event.target.files);
        //   // inputElement
        //   event.target.value = "Click to change photo.";
        //   event.target.setAttribute("tabIndex", "-1");
        //   event.target.setAttribute("readOnly", true);
        //   // console.log(event.target);
        //   // this.value = personalInfo.photo.value
        // }}
      />
    </div>
  );
}

PersonalInformation.propTypes = {
  personalInfo: PropTypes.object,
  handleChange: PropTypes.func,
};

export default PersonalInformation;
