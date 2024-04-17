import Family from "./components/family/Family";

function App() {
  const persons = [
    { name: "Juan", age: 26 },
    { name: "Gabriel", age: 27 },
    { name: "Valentina", age: 22 },
    { name: "Paula", age: 25 },
    { name: "Andrés", age: 20 },
  ];

  return (
    <>
      <Family persons={persons} />
    </>
  );
}

export default App;
