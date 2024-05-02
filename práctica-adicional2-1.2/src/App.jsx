import Persons from "./components/persons/Persons";

function App() {
  const names = ["Parker", "Simmons", "Lewis", "Poe"];

  return (
    <>
      <h2>Nombres que empiezan con la letra P</h2>
      <Persons names={names} />
    </>
  );
}

export default App;
