import React from "react";
import Todo from "./Todo";
import "./TodoList.css";

function TodoList(props) {
  return (
    <div className="todoList">
      {props.todoData.map((todo, index) => {
        return <Todo todo={todo} key={index} />;
      })}
    </div>
  );
}

export default TodoList;
