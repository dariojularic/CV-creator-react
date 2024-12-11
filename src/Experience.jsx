import Input from "./Input";
import "./Experience.css";
import Button from "./Button"

function Experience(props) {
  const { handleDelete, handleChange, experience } = props;
  return experience.map((exp) => {
    const fields = Object.entries(exp).map(([key, value]) => {
      return { [key]: value };
    });

    return (
      <section className="experience-section" key={exp.id}>
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
              id={exp.id}
            />
          );
        })}
        
        <Button
          id={exp.id}
          type="button"
          value="Delete"
          handleClick={handleDelete}
        />
      </section>
    );
  });
}

export default Experience;
