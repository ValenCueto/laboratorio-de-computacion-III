import FamilyMember from "../familyMember/FamilyMember";

const Family = ({ persons }) => {
  const sortedPersons = persons.sort((a, b) => b.age - a.age);

  return (
    <>
      {sortedPersons.map((person, index) => (
        <FamilyMember key={index} name={person.name} age={person.age} />
      ))}
    </>
  );
};

export default Family;
