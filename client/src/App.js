// import logo from './logo.svg';
// import './App.css';
import { BrowserRouter } from "react-router-dom";
import Todos from "./components/Todos";
import Navbar from "./components/Navbar";
import { useEffect, useState } from "react";
import axios from "axios";
import AddForm from "./components/AddForm";

function App() {
  const [formOpen, setFormOpen] = useState(false);
  const [todos, setTodos] = useState([]);
  const getTodos = async () => {
    const res = await axios.get("http://localhost:5000/tasks");
    const tasks = res.data;
    return tasks;
  };
  const deleteTask = async (id) => {
    const res = await axios.delete(`http://localhost:5000/tasks/${id}`);
    const newTasks = res.data;
    // console.log(newTasks);
    setTodos([...newTasks]);
  };
  const addTask = async (newTask) => {
    const res = await axios.post(
      "http://localhost:5000/tasks",
      JSON.stringify(newTask),
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const newTasks = res.data;
    setTodos(newTasks);
  };
  const updateReminder = async (id, reminder) => {
    const res = await axios.patch(
      `http://localhost:5000/tasks/${id}`,
      { reminder },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const newTasks = res.data;
    setTodos(newTasks);
  };
  useEffect(() => {
    (async function start() {
      setTodos(await getTodos());
    })();
  }, []);

  return (
    <BrowserRouter>
      <div className="App">
        <div className={"container"}>
          <Navbar formOpen={formOpen} setFormOpen={setFormOpen} />
          <AddForm
            addTask={addTask}
            formOpen={formOpen}
            setFormOpen={setFormOpen}
          />
          <Todos
            todos={todos}
            deleteTask={deleteTask}
            updateReminder={updateReminder}
          />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
