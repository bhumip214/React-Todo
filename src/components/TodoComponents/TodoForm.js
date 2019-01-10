import React from "react";
import "./Todo.css";

function TodoForm(props) {
  return (
    <div className="todoBar">
      <input className="search-bar" type="text" placeholder="Search..." />
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
