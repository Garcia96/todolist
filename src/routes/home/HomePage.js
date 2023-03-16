import React from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { TodoCounter } from "../../components/TodoCounter/TodoCounter";
import { TodoSearch } from "../../components/TodoSearch/TodoSearch";
import { TodoList } from "../../components/TodoList/TodoList";
import { CreateTodoButton } from "../../components/CreateTodoButton/CreateTodoButton";
import { TodoItem } from "../../components/TodoItem/TodoItem";
import { useTodos } from "../useTodos";
import { TodoLoading } from "../../components/TodoLoading";
import { TodosError } from "../../components/TodosError";
import { TodosEmpty } from "../../components/TodosEmpty";
import { TodoHeader } from "../../components/TodoHeader";
import { ChangeAlert } from "../../components/ChangeAlert";

// import "./App.css";

function HomePage() {
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  const {
    error,
    loading,
    totalTodos,
    completedTodos,
    searchValue,
    setSearchValue,
    searchedTodos,
    completeTodo,
    deleteTodo,
    sincronizeTodos,
  } = useTodos();

  return (
    <React.Fragment>
      <TodoHeader loading={loading}>
        <TodoCounter totalTodos={totalTodos} completedTodos={completedTodos} />

        <TodoSearch
          searchParams={searchParams}
          setSearchParams={setSearchParams}
          searchValue={searchValue}
          setSearchValue={setSearchValue}
        />
      </TodoHeader>

      <TodoList
        error={error}
        loading={loading}
        searchedTodos={searchedTodos}
        totalTodos={totalTodos}
        onError={() => <TodosError />}
        onLoading={(i) => <TodoLoading key={i} />}
        onEmpty={() => <TodosEmpty />}
        onEmptySearchResults={() => <p>No hay resultados para {searchValue}</p>}
        // render={(todo) => (
        //   <TodoItem
        //     completed={todo.completed}
        //     key={todo.text}
        //     text={todo.text}
        //     onComplete={() => completeTodo(todo.text)}
        //     onDelete={() => deleteTodo(todo.text)}
        //   />
        // )}
      >
        {(todo) => (
          <TodoItem
            key={todo.id}
            text={todo.text}
            completed={todo.completed}
            onComplete={() => completeTodo(todo.id)}
            onDelete={() => deleteTodo(todo.id)}
            onEdit={() => {
              navigate("/edit/" + todo.id, { state: { todo } });
            }}
          />
        )}
      </TodoList>

      <CreateTodoButton onClick={() => navigate("/new")} />

      {/* {openModal && (
        <Modal>
          <TodoForm
            setOpenModal={setOpenModal}
            addTodo={addTodo}
            todos={todos}
          />
        </Modal>
      )} */}

      <ChangeAlert sincronize={sincronizeTodos} />
    </React.Fragment>
  );
}

export { HomePage };
