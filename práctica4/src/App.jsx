import { useState } from "react";
import AddTask from "./components/addTask/AddTask";
import ListTask from "./components/listTask/ListTask";

const App = () => {
  const [listTask, setListTask] = useState([]);

  const addTask = (newTask) => {
    const dataTask = { ...newTask, taskId: Math.random() };
    setListTask([...listTask, dataTask]);
  };

  const completedTask = (taskId) => {
    setListTask(
      listTask.map((task) => {
        if (task.taskId === taskId) {
          return { ...task, taskCompleted: !task.taskCompleted };
        }
        return task;
      })
    );
  };

  const deleteTask = (taskId) => {
    setListTask(listTask.filter((task) => task.taskId != taskId));
  };

  return (
    <>
      <h1>Lista de tareas:</h1>
      <AddTask addTask={addTask} />
      <ListTask
        listTask={listTask}
        completedTask={completedTask}
        deleteTask={deleteTask}
      />
    </>
  );
};

export default App;
