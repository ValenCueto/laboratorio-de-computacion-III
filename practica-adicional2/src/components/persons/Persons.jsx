import Person from "../person/person";

const Persons = ({ names }) => {
  const initialLetter = "P";
  const leakedNames = names.filter((name) =>
    name.toLowerCase().startsWith(initialLetter.toLowerCase())
  );

  return (
    <>
      <ul>
        {leakedNames.map((name, index) => (
          <Person key={index} name={name} />
        ))}
      </ul>
    </>
  );
};

export default Persons;
