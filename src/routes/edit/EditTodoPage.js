import React from "react";
import { useLocation, useParams } from "react-router-dom";
import { TodoForm } from "../../components/TodoForm";
import { useTodos } from "../useTodos";

function EditTodoPage() {
  const location = useLocation();
  const params = useParams();
  const { editTodo, getTodo, loading } = useTodos();

  let todoText;

  if (location.state?.todo) {
    todoText = location.state.todo.text;
  } else if (loading) {
    return <p>Cargando...</p>;
  } else {
    const todo = getTodo(Number(params.id));
    todoText = todo.text;
  }

  return (
    <TodoForm
      label="Edita tu TODO"
      defaultTodoText={todoText}
      submitEvent={(text) => editTodo(Number(params.id), text)}
    />
  );
}

export { EditTodoPage };
