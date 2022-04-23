import Todo from "./Todo";

const Todos = ({ todos, deleteTask, updateReminder }) => {
  return (
    <div className="tasks">
      <h3>Tasks</h3>
      <div className="tasks_content">
        {todos.length ? (
          todos.map((todo) => (
            <Todo
              key={todo._id}
              todo={todo}
              deleteTask={deleteTask}
              updateReminder={updateReminder}
            />
          ))
        ) : (
          <h3>
            Sorry you have no tasks to show. Click on the Open Form Button to
            add a task
          </h3>
        )}
      </div>
    </div>
  );
};

export default Todos;
