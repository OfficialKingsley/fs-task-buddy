import { NavLink } from "react-router-dom";

const Navbar = ({ formOpen, setFormOpen }) => {
  const toggleForm = () => {
    setFormOpen(!formOpen);
  };
  return (
    <div className="main_header">
      <header>
        <div className="logo">Tuddy</div>
        <nav>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/tasks">Tasks</NavLink>
        </nav>
        <button onClick={toggleForm} className={`${formOpen && "open"}`}>
          {formOpen ? "Close Form" : "Open Form"}
        </button>
      </header>
    </div>
  );
};

export default Navbar;
