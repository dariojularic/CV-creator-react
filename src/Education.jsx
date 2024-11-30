import { initialState } from "./initial-state";
import Input from "./Input";
import Button from "./Button";

function Education(props) {
  const { handleChange, education } = props;
  // console.log(education);

  education.forEach((edu) => {
    const fields = Object.entries(edu).map(([key, value]) => {
      // console.log("key", key);
      // console.log("value", value);
      return { [key]: value };
    });

    // console.log("fields", fields)
    // pojasnit
    // console.log(edu);
    const { id, universityName, city, degree, subject, fromDate, toDate } = edu;
    return (
      <section>
        {fields.map((field) => {
          const key = Object.keys(field);
          console.log("id", id)
          if (key[0] === "id" ) return
          // console.log("key[0]", key[0])
          // console.log("field", field)

          // console.log("field[key]", field[key])
          // console.log(field[key])
          return (
            <Input
              key={field[key].meta.name}
              type={field[key[0]].meta.type}
              placeholder={field[key].meta.placeholder}
              name={field[key].meta.name}
              handleChange={handleChange}
              id={id}
            />
          );
        })}
        {/* <Input
          type={universityName.meta.type}
          placeholder={universityName.meta.placeholder}
          name={universityName.meta.name}
          handleChange={handleChange}
        />
        <Input
          type={city.meta.type}
          placeholder={city.meta.placeholder}
          name={city.meta.name}
          handleChange={handleChange}
        />
        <Input
          type={degree.meta.type}
          placeholder={degree.meta.placeholder}
          name={degree.meta.placeholder}
          handleChange={handleChange}
        />
        <Input
          type={subject.meta.type}
          placeholder={subject.meta.placeholder}
          name={subject.meta.placeholder}
          handleChange={handleChange}
        />
        <Input
          type={fromDate.meta.type}
          placeholder={fromDate.meta.placeholder}
          name={fromDate.meta.placeholder}
          handleChange={handleChange}
        />
        <Input
          type={toDate.meta.type}
          placeholder={toDate.meta.placeholder}
          name={toDate.meta.placeholder}
          handleChange={handleChange}
        /> */}

        {/* <Button type={type} value={value} handleClick={del}/> */}
      </section>
    );
  });
}

export default Education;
