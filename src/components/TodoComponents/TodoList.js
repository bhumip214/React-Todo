import React from "react";
import Todo from "./Todo";
import "./TodoList.css";

function TodoList(props) {
  return (
    <div className="todoList">
      {props.todoData.map(todo => {
        return <Todo todo={todo} key={todo.id} toggleTodo={props.toggleTodo} />;
      })}
    </div>
  );
}

export default TodoList;
