import React from "react";
import "./Todo.css";

function TodoForm(props) {
  return (
    <div className="todoBar">
      <input
        className="search-bar"
        value={props.searchInputValue}
        type="text"
        placeholder="Search..."
        onChange={props.handleSearch}
      />
      <input
        value={props.task}
        type="text"
        name="task"
        placeholder="Add..."
        onChange={props.handleChanges}
      />
      <button onClick={props.addNewTodo}>Add Todo</button>
      <button onClick={props.clearCompleted}>Clear Completed </button>
    </div>
  );
}

export default TodoForm;
