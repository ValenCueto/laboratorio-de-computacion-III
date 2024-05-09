const ListTask = ({ listTask, completedTask, deleteTask }) => {
  const listTaskMapped = listTask.map((task) => (
    <li
      key={task.taskId}
      style={{
        color: task.taskCompleted ? "green" : "none",
        marginTop: "10px",
      }}
    >
      {task.taskText}
      {
        <>
          <button
            onClick={() => completedTask(task.taskId)}
            className="ms-2 btn btn-primary"
          >
            Completado
          </button>
          <button
            onClick={() => deleteTask(task.taskId)}
            className="ms-2 btn btn-danger"
          >
            Eliminar
          </button>
        </>
      }
    </li>
  ));

  return (
    <>
      <ul>{listTaskMapped}</ul>
    </>
  );
};

export default ListTask;
