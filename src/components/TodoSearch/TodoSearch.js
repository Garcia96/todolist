import React, { useEffect } from "react";
import "./TodoSearch.css";

function TodoSearch(props) {
  const onSearchValueChange = (event) => {
    props.setSearchValue(event.target.value);
    let params = {
      search: event.target.value,
    };
    props.setSearchParams(params);
  };

  useEffect(() => {
    const search = props.searchParams.get("search") ?? "";
    props.setSearchValue(search);
  }, [props.searchParams]);

  return (
    <input
      className="TodoSearch"
      placeholder="Comprar pancito"
      value={props.searchValue}
      onChange={onSearchValueChange}
      disabled={props.loading}
    />
  );
}

export { TodoSearch };
