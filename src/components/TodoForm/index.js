import React from "react";
import { useNavigate } from "react-router-dom";
import "./TodoForm.css";

function TodoForm(props) {
  const navigate = useNavigate();
  const [todoValue, setTodoValue] = React.useState(props.defaultTodoText || "");
  const [errorValue, setErrorValue] = React.useState("");
  const onCancel = () => {
    navigate("/");
  };

  const onSubmit = (event) => {
    event.preventDefault();

    if (!errorValue && todoValue.length) {
      props.submitEvent(todoValue);
      setTodoValue("");
      setErrorValue("");
      navigate("/");
    }
  };

  const onChange = (event) => {
    setTodoValue(event.target.value);
  };

  return (
    <form className="TodoForm" onSubmit={onSubmit}>
      <h1>{props.label}</h1>
      <textarea
        value={todoValue}
        onChange={onChange}
        placeholder="Hacer ejercicio"
      ></textarea>
      <span>{errorValue}</span>

      <div className="TodoForm-buttonContainer">
        <button
          className="TodoForm-button TodoForm-button--cancel"
          type="button"
          onClick={onCancel}
        >
          Cancelar
        </button>
        <button className="TodoForm-button TodoForm-button--add" type="submit">
          Guardar
        </button>
      </div>
    </form>
  );
}

export { TodoForm };
