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
      <div className="task">{props.todo.task}</div>
    </div>
  );
}

export default Todo;
