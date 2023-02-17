import React from "react";
import { TodoCounter } from "./components/TodoCounter/TodoCounter";
import { TodoSearch } from "./components/TodoSearch/TodoSearch";
import { TodoList } from "./components/TodoList/TodoList";
import { CreateTodoButton } from "./components/CreateTodoButton/CreateTodoButton";
import { TodoItem } from "./components/TodoItem/TodoItem";
// import "./App.css";

const todos = [
  { text: "Cortar Cebolla", completed: false },
  { text: "Comprar awita", completed: false },
  { text: "Comer galletas", completed: false },
  { text: "Buscar trabajo", completed: false },
];

function App() {
  return (
    <React.Fragment>
      <TodoCounter></TodoCounter>

      <TodoSearch></TodoSearch>

      <TodoList>
        {todos.map((todo) => (
          <TodoItem
            completed={todo.completed}
            key={todo.text}
            text={todo.text}
          />
        ))}
      </TodoList>

      <CreateTodoButton />
    </React.Fragment>
  );
}

export default App;
