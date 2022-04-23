import { useState } from "react";
import Description from "./Description";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";

const Todo = ({ todo, deleteTask, updateReminder }) => {
  const [openDescription, setOpenDescription] = useState(false);
  // const [reminder, setReminder] = useState(false);
  return (
    <div className="todo">
      <header className="todo_header">
        <h3 className="todo_title">{todo.title}</h3>
        <span
          className="delete"
          onClick={() => {
            deleteTask(todo._id);
          }}
        >
          <FontAwesomeIcon icon={faTrashCan} />
        </span>
      </header>
      <hr />
      <button
        className="check_description"
        onClick={() => {
          setOpenDescription(true);
        }}
      >
        Check Description
      </button>
      {openDescription && (
        <Description
          title={todo.title}
          description={todo.description}
          time={todo.time}
          setOpenDescription={setOpenDescription}
        />
      )}
      <small>
        <blockquote>
          Time Due: <cite>{todo.time}</cite>
        </blockquote>
      </small>
      <div className="reminder_container">
        <span
          onClick={() => {
            updateReminder(todo._id, !todo.reminder);
          }}
        >
          Reminder:
        </span>
        <div
          className={`toggle_btn ${todo.reminder && "active"}`}
          onClick={() => {
            updateReminder(todo._id, !todo.reminder);
          }}
        >
          <div className="toggle_circle"></div>
        </div>
      </div>
    </div>
  );
};

export default Todo;
