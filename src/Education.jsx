import { initialState } from "./initial-state";
import Button from "./Button";
import Input from "./Input"

function Education(props) {
  const { handleChange, education } = props;

  console.log(education)
  education.forEach((edu) => {
    const fields = Object.entries(edu).map(([key, value]) => {
      return { [key]: value };
    });

    return (
      <section key={edu.id}>
        {fields.map((field) => {
          const key = Object.keys(field);
          console.log(handleChange)
          if (key[0] === "id") return;
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

        {/* <Button type={type} value={value} handleClick={del}/> */}
      </section>
    );
  });
}

export default Education;
