import React from "react";

function TodoForm(props) {
  return (
    <form onSubmit={props.addNewTodo}>
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
