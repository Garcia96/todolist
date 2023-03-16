import React from "react";
import { TodoForm } from "../../components/TodoForm";
import { useTodos } from "../useTodos";

function NewTodoPage() {
  const { addTodo } = useTodos();
  return (
    <TodoForm
      label="Escribe tu nuevo TODO"
      submitEvent={(text) => addTodo(text)}
    />
  );
}

export { NewTodoPage };
