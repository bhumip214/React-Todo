import React from "react";
import Todo from "./Todo";

function TodoList(props) {
  return (
    <div>
      {props.todoTask.map((todo, index) => {
        return <Todo todo={todo} key={index} />;
      })}
    </div>
  );
}

export default TodoList;
