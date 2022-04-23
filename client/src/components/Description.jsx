import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

const Description = ({ title, description, time, setOpenDescription }) => {
  return (
    <div className="description_container">
      <div className="description_content">
        <div className="close_section">
          <span
            className="close"
            onClick={() => {
              setOpenDescription(false);
            }}
          >
            {/* &times; */}
            <FontAwesomeIcon icon={faXmark} />
          </span>
        </div>
        <h3 className="title">{title}</h3>
        <hr />
        <p className="description_text">
          {description
            ? description
            : "Sorry you have no description for this task"}
        </p>
        <small>
          <blockquote>
            Time Due: <cite>{time}</cite>
          </blockquote>
        </small>
      </div>
    </div>
  );
};

export default Description;
