import { useState } from "react";

const AddForm = ({ addTask, formOpen, setFormOpen }) => {
  const [title, setTitle] = useState("");
  const [time, setTime] = useState("");
  const [description, setDescription] = useState("");
  const [reminder, setReminder] = useState(false);

  const reset = () => {
    setTitle("");
    setTime("");
    setDescription("");
    setReminder(false);
    setFormOpen(false);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (title.length && time.length) {
      const newTask = {
        title,
        time,
        description,
        reminder,
      };
      addTask(newTask);
      reset();
    } else if (!title.length && !time.length) {
      alert("Please add a title for this task and also a time due for it too");
    } else if (!title.length) {
      alert("Please Add a title");
    } else if (!time.length) {
      alert("Please add the time due for that task");
    }
  };
  return (
    <div className={`form_container ${formOpen && "open"}`}>
      <div className="form_content">
        <div className="close_section">
          <div
            className="close"
            onClick={() => {
              setFormOpen(false);
            }}
          >
            &times;
          </div>
        </div>
        <h3>Add Task</h3>
        <form action="">
          <input
            type="text"
            value={title}
            onChange={(e) => {
              setTitle(e.target.value);
            }}
            required
          />
          <input
            type="datetime-local"
            value={time}
            onChange={(e) => {
              setTime(e.target.value);
            }}
            required
          />
          <textarea
            name=""
            id=""
            cols="30"
            rows="10"
            value={description}
            onChange={(e) => {
              setDescription(e.target.value);
            }}
          ></textarea>
          <div className="reminder">
            <label htmlFor="reminder">Reminder</label>
            <input
              type="checkbox"
              name=""
              id="reminder"
              checked={reminder}
              onChange={(e) => {
                setReminder(e.currentTarget.checked);
              }}
            />
          </div>
          <button type="submit" onClick={handleSubmit}>
            Add Task
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddForm;
