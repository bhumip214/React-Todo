import React from "react";
import "./Todo.css";

function Todo(props) {
  return (
    <div className={props.todo.completed === true ? "strike-through" : ""}>
      {props.todo.task}
    </div>
  );
}

export default Todo;
