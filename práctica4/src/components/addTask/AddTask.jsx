import { useState } from "react";

const AddTask = ({ addTask }) => {
  const [task, setTask] = useState("");

  const changeTaskHandler = (e) => {
    setTask(e.target.value);
  };

  const submitTaskHandler = (e) => {
    e.preventDefault();
    const newTask = {
      taskText: task,
      taskCompleted: false,
    };

    if (task.trim() !== "") {
      addTask(newTask);
    }
    setTask("");
  };

  return (
    <>
      <form onSubmit={submitTaskHandler}>
        <div className="mb-3">
          <label htmlFor="inputTask" className="form-label">
            Nueva tarea:
          </label>
          <input
            type="text"
            className="form-control"
            id="inputTask"
            placeholder="Ingrese una tarea"
            value={task}
            onChange={changeTaskHandler}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Agregar
        </button>
      </form>
    </>
  );
};

export default AddTask;
