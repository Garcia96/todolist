import React from "react";
import "./TodoForm.css";

function TodoForm({ addTodo, setOpenModal, todos }) {
  const [todoValue, setTodoValue] = React.useState("");
  const [errorValue, setErrorValue] = React.useState("");
  const onCancel = () => {
    setOpenModal((prevState) => !prevState);
  };

  const onSubmit = (event) => {
    event.preventDefault();

    if (!errorValue && todoValue.length) {
      addTodo(todoValue);
      setOpenModal(false);
      setTodoValue("");
      setErrorValue("");
    }
  };

  const onChange = (event) => {
    setTodoValue(event.target.value);
    const todoExist = todos.some((todo) => {
      const todoText = todo.text.toLowerCase();
      const searchText = event.target.value.toLowerCase();
      return todoText === searchText;
    });
    if (todoExist) {
      setErrorValue("El TODO ya existe");
    } else {
      setErrorValue("");
    }
  };

  return (
    <form className="TodoForm" onSubmit={onSubmit}>
      <label>Escribe tu nuevo TODO</label>
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
          Añadir
        </button>
      </div>
    </form>
  );
}

export { TodoForm };
