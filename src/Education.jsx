import { initialState } from "./initial-state";
import Input from "./Input"


function Education(props) {
  const {handleEducationChange} = props

  return (
    <section>
      {initialState.education.forEach((elem) => {
        Object.keys(elem).map((element) => {
          if (element === "id") return;
          const thing = initialState.education[0][element];
          console.log("gagagagag")
          return (
            <Input
              key={thing}
              placeholder={thing.meta.placeholder}
              type={thing.meta.type}
              onChange={handleEducationChange}
            />
          );
        });
      })}
    </section>
  );
}

export default Education;
