import React from "react";
import "./TodoList.css";

function TodoList(props) {
  const renderFunc = props.children || props.render;

  return (
    <section className="TodoList-container">
      {props.error && props.onError()}
      {props.loading && new Array(5).fill(1).map((a, i) => props.onLoading(i))}
      {!props.loading && !props.totalTodos && props.onEmpty()}
      {!!props.totalTodos &&
        !props.searchedTodos.length &&
        props.onEmptySearchResults()}
      <ul>
        {!props.loading && !props.error && props.searchedTodos.map(renderFunc)}
      </ul>
    </section>
  );
}

export { TodoList };
