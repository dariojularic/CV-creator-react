import { initialState } from "./initial-state";
import Button from "./Button";
import Input from "./Input";
import "./Education.css";

function Education(props) {
  const { handleChange, education } = props;
  return education.map((edu) => {
    const fields = Object.entries(edu).map(([key, value]) => {
      return { [key]: value };
    });
    
    return (
      <section className="education-section" key={edu.id}>
        {fields.map((field) => {
          const key = Object.keys(field);
          if (key[0] === "id") return null;
          return (
            <Input
              key={field[key].meta.name}
              type={field[key].meta.type}
              placeholder={field[key].meta.placeholder}
              name={field[key].meta.name}
              handleChange={handleChange}
              id={edu.id}
            />
          );
        })}
      </section>
    );
  });
}

export default Education;
