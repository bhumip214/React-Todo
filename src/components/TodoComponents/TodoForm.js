import React from "react";
import "./Todo.css";

function TodoForm(props) {
  return (
    <form className="todoBar" onSubmit={props.addNewTodo}>
      <input
        value={props.task}
        type="text"
        task="task"
        placeholder="...todo"
        onChange={props.handleChanges}
      />
      <button type="submit">Add Todo</button>
      <button>Clear Completed </button>
    </form>
  );
}

export default TodoForm;
