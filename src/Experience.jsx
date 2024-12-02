import Input from "./Input"
import "./Experience.css"

function Experience(props) {
  const { handleChange, experience } = props;
  console.log(experience)
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
      </section>
    );
  });

}


export default Experience;
