import React from "react";
import "./Todo.css";

function Todo(props) {
  return (
    <div
      onClick={() => {
        props.toggleTodo(props.todo.id);
      }}
      className={props.todo.completed === true ? "line-through" : null}
    >
      {props.todo.task}
    </div>
  );
}

export default Todo;
