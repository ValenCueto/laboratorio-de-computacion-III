import { useState } from "react";

const Login = () => {
  const [userName, setUserName] = useState("");

  const handlerInput = (event) => {
    if (event.target.value.includes("o") || event.target.value.includes("O")) {
      alert("Por favor, ¡Nombres de usuario sin la letra o!");
    }
    setUserName(event.target.value);
  };

  const handlerSubmit = (event) => {
    event.preventDefault();
    if (userName.trim().toLowerCase().includes("o") || userName === "") {
      alert("Usuario inválido para registrarse");
    } else {
      alert("¡Usuario registrado correctamente!");
    }
    setUserName("");
  };

  return (
    <form onSubmit={handlerSubmit}>
      <label htmlFor="userName">Username:</label>
      <input
        type="text"
        className="form-control"
        id="userName"
        placeholder="Ingrese su username"
        value={userName}
        onChange={handlerInput}
      />
      <p>{userName}</p>
      <br />
      <button type="submit" className="btn btn-primary">
        Registrarse
      </button>
    </form>
  );
};

export default Login;
