import React from "react";
import { TodoCounter } from "../components/TodoCounter/TodoCounter";
import { TodoSearch } from "../components/TodoSearch/TodoSearch";
import { TodoList } from "../components/TodoList/TodoList";
import { CreateTodoButton } from "../components/CreateTodoButton/CreateTodoButton";
import { TodoItem } from "../components/TodoItem/TodoItem";
import { TodoForm } from "../components/TodoForm";
import { TodoContext } from "../TodoContext";
import { Modal } from "../components/Modal";
import { TodoLoading } from "../components/TodoLoading";
import { TodosError } from "../components/TodosError";
import { TodosEmpty } from "../components/TodosEmpty";

function AppUI() {
  const value = React.useContext(TodoContext);

  return (
    <React.Fragment>
      <TodoCounter />

      <TodoSearch />
      <TodoList>
        {value.error && <TodosError />}
        {value.loading &&
          new Array(5).fill(1).map((a, i) => <TodoLoading key={i} />)}
        {!value.loading && !value.searchedTodos.length && <TodosEmpty />}

        {value.searchedTodos.map((todo) => (
          <TodoItem
            completed={todo.completed}
            key={todo.text}
            text={todo.text}
            onComplete={() => value.completeTodo(todo.text)}
            onDelete={() => value.deleteTodo(todo.text)}
          />
        ))}
      </TodoList>

      <CreateTodoButton setOpenModal={value.setOpenModal} />

      {value.openModal && (
        <Modal>
          <TodoForm />
        </Modal>
      )}
    </React.Fragment>
  );
}

export { AppUI };
